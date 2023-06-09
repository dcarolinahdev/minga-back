# Minga backend app

API for reading and managing manga.

## How the server works?

this project works with **MongoDB** with the help of **Mongoose** library, **React** to develop our application interfaces as SPA and **Vite** which pre-configures everything you need to create our React app.

## What are its endpoints?

| endpoint | request method | Description |
|  :----:  |  :----:  |    :---     |
| auth/  | GET | for users list |
| authors/ | GET | for authors list |
| categories/  | GET | for categories list|
| chapters/  | GET | for chapters list |
| mangas/  | GET | for mangas list |

### How to run the project locally??

```npm run dev```

Remember:

```npm run {script-taken-from-package.json/scripts}```

## Main dependencies

See *package.json / dependencies*

    - Express [^4.18.2]
    : This Node.js web application framework allows us to create a solid infrastructure for servers.

    - Nodemon [^2.0.22]
    : use for recharge server.

    - Dotenv [^16.0.3]
    : use for environment variables.
