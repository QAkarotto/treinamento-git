const { multiply, subtract, sum } = require("../src/calculator");

describe("calculator", () => {
  // Cada teste protege uma operacao basica para que os alunos enxerguem falhas
  // rapidamente quando alterarem a regra de negocio.
  test("sum soma dois numeros", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("subtract subtrai o segundo valor do primeiro", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiply multiplica dois numeros", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("operacoes preservam numero negativo quando necessario", () => {
    expect(sum(-2, -3)).toBe(-5);
    expect(subtract(-2, -3)).toBe(1);
    expect(multiply(-2, 3)).toBe(-6);
  });
});