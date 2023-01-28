require('dotenv').config();
import express, { urlencoded, json } from 'express';
const app = express();
const router = express.Router();

const { PORT } = process.env;

const api = require('./api');

router.use('/api', api.routes());

app.use(urlencoded({ extended: true }));

app.use(json());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
});
