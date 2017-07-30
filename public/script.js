$(document).ready(function() {
  $.getJSON('memes/index.json', (memes) => {
    const es = new EventSource('/stream');
    es.onmessage = (event) => {
      const track = JSON.parse(event.data);
      const uri = track.track_resource.uri;
      console.log(`Track: ${track.track_resource.name}`);
      const meme = memes[uri];
      if (meme) {
        console.info(meme);
        $('img').attr('src', meme.i ? `memes/${meme.i}` : 'dummy.gif');
        $('p.top').text(meme.tt);
        $('p.bottom').text(meme.tb);
        $('footer').text(`${meme.s}: ${track.track_resource.name} - ${track.artist_resource.name}`);
      } else {
        console.log(`No meme for track with uri '${uri}' found.`);
        $('img').attr('src', 'dummy.gif');
        $('p.top').text('');
        $('p.bottom').text('');
        $('footer').text('');
      }
    };
  });
});
