# Serverless Private Project

[TYPESCRIPT](https://www.typescriptlang.org/)

[serverless-framework](https://www.serverless.com/)

[mongo-database](https://www.mongodb.com/)

[JEST](https://jestjs.io/)

[ESLint](https://eslint.org/)

[Prettier](https://prettier.io/)

## Índice

- [project structure](#project_structure)

## project structure

```
.
├── config
│   └── serverless
│       └── functions
├── docs
├── src
│   ├── core
│   │   ├── config
│   │   ├── factories
│   │   ├── interfaces
│   │   │   ├── enum
│   │   │   ├── models
│   │   │   ├── requests
│   │   │   └── responses
│   │   ├── middlewares
│   │   │   └── validations
│   │   │       └── base
│   │   ├── repositories
│   │   │   ├── base
│   │   │   └── schemas
│   │   ├── services
│   │   │   └── base
│   │   └── utils
│   └── functions
└── test
    ├── helpers
    └── unit
        ├── core
        │   ├── config
        │   ├── factories
        │   ├── middlewares
        │   │   └── validations
        │   │       └── base
        │   ├── repositories
        │   │   └── base
        │   ├── services
        │   │   └── base
        │   └── utils
        └── functions
```
