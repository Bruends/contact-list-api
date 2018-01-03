const app = require('./config/server');
require('./config/database');

app.listen(5000, () => {
  console.log('server on: localhost:5000');
});
