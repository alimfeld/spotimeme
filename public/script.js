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
        fillText($('p.top'), meme.tt);
        fillText($('p.bottom'), meme.tb);
        $('footer').text(`${meme.s}: ${track.track_resource.name} - ${track.artist_resource.name}`);
      } else {
        console.log(`No meme for track with uri '${uri}' found.`);
        $('img').attr('src', 'dummy.gif');
        $('p.top span').text('');
        $('p.bottom span').text('');
        $('footer').text(`${track.track_resource.name} - ${track.artist_resource.name}`);
      }
    };
  });
});

const fillText = ($p, text) => {
  $span = $p.children();
  if (!text) {
    $span.text('');
    return;
  }
  $span.css('display', 'none');
  $span.css('white-space', 'nowrap');
  var s = 3;
  $span.css('font-size', `${s}vh`);
  $span.text(text);
  while (s <= 10 && $span.width() < $p.width()) {
    s += 1;
    $span.css('font-size', `${s}vh`);
  }
  $span.css('font-size', `${s-1}vh`);
  $span.css('white-space', 'normal');
  $span.css('display', 'inline');
};
