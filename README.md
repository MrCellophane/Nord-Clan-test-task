# NordClan Test Task

## Prerequirements

You need the following software to be installed on your system:

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://gitlab.com/help/topics/git/index.md)

## Getting Started

1.  Clone the repo and navigate to the target folder.

        $ git clone git@github.com:MrCellophane/Nord-Clan-test-task.git
        $ cd Nord-Clan-test-task

2.  Build containers at the command prompt:

        $ docker-compose build

3.  Run `yar install` inside `web` container at the command prompt:

        $ docker-compose run web yarn install

### Starting the app

1.  Start the service at the command prompt:

        $ docker-compose up

2.  Navigate to [http://localhost:3000/](http://localhost:3000/)

### Stopping the app

Simply interrupt the `up` process using `CTRL + C` combo on the keyboard, or `kill -SIGINT [process id]` command in terminal.

### Attach to a running container

Use `exec` command with the service name. For example, to start an interactive session in the rails container run:

        $ docker-compose exec web bash

### Run lint

        $ docker-compose run --rm web yarn lint

### Test User

1.  email: Dion29@yahoo.com,

    password: gwPvwAUoFonAl66,

2.  email: Mark15@hotmail.com,

    password: k9JILACGsfmUeCX,

3.  email: Stewart62@hotmail.com,

    password: ZjF1lWbxPKNJFBp,

4.  email: Reanna.Abshire72@yahoo.com,

    password: LOv7haID_7iU0Dx,

5.  email: Fletcher33@yahoo.com,

    password: biP7mURvFtW0qKV,
