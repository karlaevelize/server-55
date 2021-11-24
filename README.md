### Interacting with a server

- GET (working today)
- POST
- PUT
- DELETE

### Steps to create a server

1. `npm init -y` -> creates a package.json
2. `npm i express` -> install express
3. Import express `const express = require("express")`
4. Create a server `const app = express`
5. Define a port `const port = 4000`
6. Start listening ``app.listen(port, () => console.log(`Listening on ${port}`))``
7. Run the server `npx nodemon index.js`
