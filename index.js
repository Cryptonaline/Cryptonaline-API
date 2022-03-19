const config = require('./config');
const express = require('express');
const {
  postsRouter,
  storiesRouter,
  tweetsRouter,
  videosRouter,
} = require('./routes');

const app = express();

app.use(express.json());

// health-check route
app.get('/', async (req, res) => {
  res.send({ status: 'ok' });
});

app.use('/posts', postsRouter);
app.use('/videos', videosRouter);
app.use('/stories', storiesRouter);
app.use('/tweets', tweetsRouter);

app.listen(config.PORT, () => {
  console.log(`Listening at ${config.HOST}:${config.PORT}`);
});
