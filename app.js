const express = require('express');

const signRouter = require('./routes/sign.js');
const communityRouter = require('./routes/community.js');
const db = require('./models');

const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공!!!');
  })
  .catch(console.error);

app.use('/sign', signRouter);
app.use('/community', communityRouter);

app.listen(3066, () => {
  console.log('서버 실행 중!!!');
});
