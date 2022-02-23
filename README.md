
# Sombra Jade Player Manager API

Esta api é direcionada ao uso em conjunto com o front end Sombra Jade Player Manager.
Um projeto pessoal feito pelo grupo de estudos **t1me_7**, com um cliente simulado, interpretado por desenvolvedores diversos:
O cliente é uma treinadora de um time de airsoft, que necessita de um sistema simples de gerenciamento de cards com informações de seus adversários de outros times.

É um sistema de uso interno, mas precisa estar hospedado na internet e com acesso via celular para partidas de campo.

Por questão de prazos e 'budget-simulado', optamos que o sistema fosse feito de forma mais simples, para entrega rápida, assumindo o custo técnico da não normalização do banco de dados.

## Documentação da API

### Login

```obs: O usuário deve ser criado pelo administrador do sistema, visto que esse o objetivo é ser um sistema interno.```

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**. O nome de usuário para autenticação |
| `password` | `string` | **Obrigatório**. O senha de acesso para autenticação |

Caso o login seja efetuado com sucesso, você receberá um token em formato de string como resposta que é necessário para todas as operações na api.
Este token tem a duração de 30 min e após esse período é necessário fazer um novo login.

O token será uma string parecida com isso:
`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

Você deve salvá-lo na sua aplicação após o login e enviá-lo na chave `Authorization` do cabeçalho da sua requisição.

`REQUEST HEADERS`

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. O token de autenticação |


### Cadastra um jogador

```http
  POST /player
```

`REQUEST HEADERS`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. O token de autenticação |

`REQUEST BODY`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `playerName` | `string` | **Obrigatório**. Nome do Jogador **Único**. |
| `picture` | `string` | **Obrigatório**. URL da foto do jogador. |
| `age` | `int` | **Obrigatório**. Idade |
| `description` | `string` | **Obrigatório**. Descrição do jogador. |
| `team` | `string` | **Obrigatório**. Time do jogador. |
| `role` | `string` | **Obrigatório**. Veja a sessão "Tipos" para mais informações. |
| `priWeapon` | `string` | **Obrigatório**. Veja a sessão "Tipos" para mais informações. |
| `secWeapon` | `string` | **Obrigatório**. Veja a sessão "Tipos" para mais informações. |
| `mov` | `int` | **Obrigatório**. Valor de habilidade do jogador. |
| `int` | `int` | **Obrigatório**. Valor de habilidade do jogador. |
| `aim` | `int` | **Obrigatório**. Valor de habilidade do jogador. |
| `str` | `int` | **Obrigatório**. Valor de habilidade do jogador. |
| `eqp` | `int` | **Obrigatório**. Valor de habilidade do jogador. |
| `friendly` | `int` | **Obrigatório**. Numero de partidas do jogador. |
| `regional` | `int` | **Obrigatório**. Numero de partidas do jogador. |
| `state` | `int` | **Obrigatório**. Numero de partidas do jogador. |
| `national` | `int` | **Obrigatório**. Numero de partidas do jogador. |
| `international` | `int` | **Obrigatório**. Numero de partidas do jogador. |

### Lista todos os jogadores

```http
  GET /player
```

`REQUEST HEADERS`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. O token de autenticação |

### Exibe um jogador

```http
  GET /player/:id
```

`REQUEST HEADERS`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. O token de autenticação |

`URL PARAMS`
| Parâmetro   | Descrição                           |
| :---------- |  :---------------------------------- |
| `id` | **Obrigatório**. O id do jogador |

### Atualiza um jogador

```http
  PUT /player/:id
```

`REQUEST HEADERS`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. O token de autenticação |

`URL PARAMS`
| Parâmetro   | Descrição                           |
| :---------- |  :---------------------------------- |
| `id` | **Obrigatório**. O id do jogador |

`REQUEST BODY`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `playerName` | `string` | **Obrigatório**. Nome do Jogador **Único**. |
| `picture` | `string` | **Obrigatório**. URL da foto do jogador. |
| `age` | `int` | **Obrigatório**. Idade |
| `description` | `string` | **Obrigatório**. Descrição do jogador. |
| `team` | `string` | **Obrigatório**. Time do jogador. |
| `role` | `string` | **Obrigatório**. Veja a sessão "Tipos" para mais informações. |
| `priWeapon` | `string` | **Obrigatório**. Veja a sessão "Tipos" para mais informações. |
| `secWeapon` | `string` | **Obrigatório**. Veja a sessão "Tipos" para mais informações. |
| `mov` | `int` | **Obrigatório**. Valor de habilidade do jogador. |
| `int` | `int` | **Obrigatório**. Valor de habilidade do jogador. |
| `aim` | `int` | **Obrigatório**. Valor de habilidade do jogador. |
| `str` | `int` | **Obrigatório**. Valor de habilidade do jogador. |
| `eqp` | `int` | **Obrigatório**. Valor de habilidade do jogador. |
| `friendly` | `int` | **Obrigatório**. Numero de partidas do jogador. |
| `regional` | `int` | **Obrigatório**. Numero de partidas do jogador. |
| `state` | `int` | **Obrigatório**. Numero de partidas do jogador. |
| `national` | `int` | **Obrigatório**. Numero de partidas do jogador. |
| `international` | `int` | **Obrigatório**. Numero de partidas do jogador. |

```
É importante que todos os valores sejam passados ainda que não se vise uma alteração.
O não envio de alguma das informações obrigatórias farão você encontrar um erro.
```

### Deleta um jogador

```http
  DELETE /player/:id
```

`REQUEST HEADERS`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. O token de autenticação |

`URL PARAMS`
| Parâmetro   | Descrição                           |
| :---------- |  :---------------------------------- |
| `id` | **Obrigatório**. O id do jogador |

`*ATENÇÃO: ESSA OPERAÇÃO NÃO PODE SER DESFEITA*`
## Alguma dúvida?

- Github: [@serpaef](https://www.github.com/serpaef)
- LinkedIn: [Fernando Serpa](https://www.linkedin.com/in/serpaef/)
## Stack utilizada

**Back-end:** TypeScript, Node, Express, TypeORM
