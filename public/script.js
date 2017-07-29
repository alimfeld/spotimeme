$(document).ready(function() {
  $.getJSON('memes/index.json', (memes) => {
    const es = new EventSource('/stream');
    es.onmessage = (event) => {
      const track = JSON.parse(event.data);
      const id = track.track_resource.uri.replace('spotify:track:', '');
      console.log(`Track: ${track.track_resource.name}`);
      const meme = memes[id];
      if (meme) {
        console.info(meme);
        $('img').attr('src', `memes/${meme.i}`);
        $('p.top').text(meme.tt);
        $('p.bottom').text(meme.tb);
        $('footer').text(`${meme.s}: ${track.track_resource.name} - ${track.artist_resource.name}`);
      } else {
        console.log(`No meme for track with id '${id}' found.`);
        $('img').attr('src', '');
        $('p.top').text('');
        $('p.bottom').text('');
        $('footer').text('');
      }
    };
  });
});
