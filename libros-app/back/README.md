# Aplicación React con autentificación JWT

### Para ejecutar debe:

1. `git clone` para clonar el repositorio.

2. ejecutar `npm install` en client y library.

3. Crear un archivo `.env` en la raiz de library, adyacete a `server.js`.

   *The only environment variable you **have** to declare in development is `JWT_SECRET`*

   En el archivo `.env`, usted debe establecer las variables de entorno: `JWT_SECRET`, `DB_URI`, y `PORT`. Por ejemplo:

   ```
   JWT_SECRET = "Mi frase secreta"
   DB_URI = "mongodb://user:password@cluster0-shard-00-00.mey1q.mongodb.net:27017,cluster0-shard-00-01.mey1q.mongodb.net:27017,cluster0-shard-00-02.mey1q.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-77yhhp-shard-0&authSource=admin&retryWrites=true&w=majority"
   PORT = 3001
   ```



4. It's recommended that you run the api server on port 3001 while developing locally, as the client app will default to port 3000.
5. Make sure `mongod` is running by running… ahem… `mongod`
6. From that point you can run the api server either by using `nodemon` or just running `node server.js`
7. Now for the client application. `cd client`
8. Install the client app's dependencies with `npm install`
9. From the client directory, run `npm start` to boot up the client application.
10. $$$ Profit

### Usage

It's common to identify the user making an authenticated request on the server side. In this application, the `verifyToken` middleware (declared in `/serverAuth.js`) decodes a provided token, and makes sure the request is coming from a valid user. When the user is validated, it is added to the `req` object as `req.user`. 

Here's an example of how you can access the 'current user' from the server side app, assuming a user is logged in and sending an authenticated request:

```javascript
const express = require('express')
const mySpecialRouter = new express.Router()

// JWT AUTH MIDDLEWARE:
const { verifyToken }  = require('../serverAuth.js')

const Comment = require('../models/Comment.js')

// all routes declared after this middleware require a token
mySpecialRouter.use(verifyToken)
mySpecialRouter.post("/comments", (req, res) => {
  // since this route succeeds 'verifyToken', it has the current user in req.user
  // so we can easily associate new mongo documents to the current user:
  Comment.create({ ...req.body, user: req.user }, (err, comment) => {
    if(err) return console.log(err)
    res.json({ success: true, message: "Comment created.", comment })
  })
})

module.exports = mySpecialRouter
```
