Create web server 
// Path: server.js
Create routes 
// Path: routes/index.js
Create views 
// Path: views/index.ejs
Create CSS 
// Path: public/stylesheets/style.css
Create database 
// Path: db.json
Create controller 
// Path: controllers/comments.js
```

### 2. Create web server
Create a file called `server.js` and add the following code:
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```
Start the server by running `node server.js` in the terminal. You should see the following message in the terminal: `Example app listening on port 3000!`.

### 3. Create routes
Create a file called `index.js` in the folder