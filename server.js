//Install express server
const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();

// Serve only the static files form the dist directory
app.use(helmet.frameguard({
  action: 'SAMEORIGIN',
}));
app.use(express.static('./dist/local-brands'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/local-brands/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
