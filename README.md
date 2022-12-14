# GoTech Assignment API

<img src="https://gotech.io/assets/images/common/logo.svg" alt="GoTech Logo" width="300"/>

## The stack

1. node - runtime
2. express - Framework
3. prisma - ORM
4. postgres - DB

---

## Configuration

In order to run the server, you must create a .env file
It is not in the repo.

### Env file creation:

```sh
echo "NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://db_user:some_password@localhost:5432/api_db?schema=public
REDIS_URL=redis://localhost:6379" > .env
```

---

## Getting started

```sh
$ nvm use # This will use the node version from .nvmrc
$ npm install
$ npx prisma generate # This will create a prisma client
$ npm run start:dev # Or run "Debug Locally" in VSCode
```
