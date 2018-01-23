const port = 3000;
const app = require('./config/server');

app.listen(port, () => {
  console.log(`server on: localhost:${port}`);
});
