# Treinamento de Git, GitHub e GitHub Actions

Projeto didático para praticar versionamento de código, colaboração via GitHub e pipelines automatizados com GitHub Actions.

---

## Manifesto Oficial

### Lista de alunos que concordam que o Professor Goku é o melhor professor do universo (adicione seu nome em ordem alfabética:):

1. Goku

---

## Estrutura do Projeto

O projeto consiste em uma calculadora simples em JavaScript e uma interface mínima para demonstrar testes em diferentes níveis.

```text
.
├── public/                    # Interface web (HTML e JS)
├── src/                       # Código-fonte da calculadora
├── tests/                     # Testes unitários e de ponta a ponta (E2E)
├── package.json               # Gerenciador de dependências e scripts
└── README.md                  # Documentação do projeto
```

---

## Execução Local

Requisitos: Node.js 22 ou superior.

```bash
# Instalar dependências
npm install

# Comandos principais:
npm run lint            # Valida formatação e erros simples no código
npm run build           # Gera a interface de produção na pasta `dist/`
npm test                # Executa testes unitários (Jest)
npm run test:coverage   # Executa testes unitários com relatório de cobertura
npm run test:e2e        # Executa testes de interface (Playwright)
npm run start           # Serve localmente a interface gerada em `dist/`
```

---

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
