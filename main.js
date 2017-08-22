const express = require('express');
const SSE = require('express-sse');
const sse = new SSE();
const app = express();

const SpotifyWebHelper = require('spotify-web-helper');
const helper = SpotifyWebHelper();

app.use(express.static('public'));
app.use('/memes', express.static('memes'));
app.get('/stream', sse.init);

const send = (track) => {
  console.log(track);
  sse.send(track);
  sse.updateInit(track);
};

helper.player.on('error', err => {
  console.log(err);
});
helper.player.on('ready', () => {
  helper.player.on('play', () => {
    send(helper.status.track);
  });
  helper.player.on('track-will-change', (track) => {
    send(track);
  });
});

app.listen(3000);
