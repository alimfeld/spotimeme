# Spotimeme

Web application for displaying a meme matching the currently played
Spotify song.

# Requirements

- Spotify
- Node/npm
- Git

# Setup

- Clone this repo
- Run ```npm install```
- Add a folder 'memes'
- Add a file 'index.json' under 'memes' describing the memes to display
  for Spotify songs:

```
{
  "<spotify track uri>": {
    "s": "<subject>",
    "i": "<path to the image under memes>",
    "tt": "<text to display at the top of the image>",
    "tb": "<text to display at the bottom of the image>"
  },
  ...
}
```

Replace the ```<spotify track uri>``` with the actual track URI of the
Spotify song, e.g. 'Lady In Black' (Uriah Heep) has a track URI
```spotify:track:2U2ByqoO82fnayaPzO4x2d```.

You can find the Spotify track URI of a song by e.g. using the Share
functionality in Spotify or by checking the console output when playing
songs in Spotify while spotimeme is running.

# Run

1. Start Spotify
2. Run `node main.js`
3. Open `localhost:3000` in your Browser (tested in Chrome)
4. Play a song in Spotify you configured a meme for
