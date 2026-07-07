const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const port = Number(process.env.PORT || 3000);
const rootDir = path.join(__dirname, "..", "dist");

const contentTypes = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript"
};

const server = http.createServer((request, response) => {
  const requestedPath = request.url === "/" ? "/index.html" : request.url;
  const filePath = path.join(rootDir, requestedPath);
  const normalizedPath = path.normalize(filePath);

  if (!normalizedPath.startsWith(rootDir)) {
    response.writeHead(403);
    response.end("Acesso negado");
    return;
  }

  if (!fs.existsSync(normalizedPath)) {
    response.writeHead(404);
    response.end("Arquivo nao encontrado");
    return;
  }

  const extension = path.extname(normalizedPath);
  response.writeHead(200, {
    "Content-Type": contentTypes[extension] || "text/plain"
  });
  response.end(fs.readFileSync(normalizedPath));
});

server.listen(port, () => {
  console.log(`Aplicacao disponivel em http://localhost:${port}`);
});
