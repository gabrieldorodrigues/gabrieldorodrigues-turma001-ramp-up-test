# gabrieldorodrigues-turma001-ramp-up-test

## Tipo de Teste

**Teste de Carga com Rampa (Ramp-up Load Test)**

Este teste avalia o comportamento e a performance de uma API sob aumento gradual de carga, simulando o crescimento de usuários virtuais ao longo do tempo.

## Descrição

Trabalho individual de teste de carga automatizado, seguindo as regras da disciplina. O objetivo é simular uma rampa de usuários virtuais (VUs) acessando a API pública [jsonplaceholder](https://jsonplaceholder.typicode.com/posts), avaliando desempenho, estabilidade e limites da aplicação.

## Como rodar localmente

1. Instale o [k6](https://k6.io/docs/getting-started/installation/) (binário oficial).
   - No Windows, baixe o executável e adicione ao PATH ou execute diretamente.
   - No Linux/Mac, use o gerenciador de pacotes recomendado no site.
2. No terminal, navegue até a pasta do projeto.
3. Execute:
   ```sh
   k6 run tests/loadtest.js
   ```
   ou
   ```sh
   npm test
   ```

## Pipeline CI

O pipeline roda automaticamente no GitHub Actions a cada push ou pull request, garantindo a execução dos testes e validação dos critérios. O workflow está definido em `.github/workflows/k6.yml`.

## Critérios Avaliados

- Rampa de 10 até 300 VUs em 5 minutos
- 95% das respostas abaixo de 5700ms
- Menos de 12% de erros
- Thresholds definidos no script
- Commits frequentes e pipeline funcionando

## Como funciona o teste

O teste executa requisições GET para a API pública jsonplaceholder, simulando o crescimento de usuários virtuais conforme o gráfico solicitado. O script mede o tempo de resposta e a taxa de sucesso, validando os thresholds definidos. O objetivo é identificar gargalos, limites e estabilidade da API sob carga crescente.

### Parâmetros do teste

- **stages**: Define a rampa de usuários virtuais (VUs)
  - 1 minuto até 10 VUs
  - 2 minutos subindo até 300 VUs
  - 2 minutos mantendo 300 VUs
- **thresholds**: Critérios de aceitação
  - 95% das respostas abaixo de 5700ms
  - Menos de 12% de erros

### Métricas observadas

- Tempo de resposta (http_req_duration)
- Taxa de erro (http_req_failed)

## Estrutura do Projeto

- `tests/loadtest.js`: Script de teste de carga k6
- `.github/workflows/k6.yml`: Pipeline de CI
- `package.json`: Scripts e metadados do projeto
- `README.md`: Instruções e critérios

## Referências

- [Documentação do k6](https://k6.io/docs/)
- [API utilizada](https://jsonplaceholder.typicode.com/)

## Autor

gabrieldorodrigues, turma001
