# Spotimeme

Web application for displaying a meme matching the currently played Spotify track.

# Requirements

- Spotify
- Node/npm
- Git

# Setup

- Clone this repo
- Run ```npm install```
- Add a folder 'memes'
- Add a file 'index.json' under 'memes' describing the memes to display for Spotify tracks:

```
{
  "<spotify track id>": {
    "s": "<subject>",
    "i": "<path to the image under memes>",
    "tt": "<text to display at the top of the image>",
    "tb": "<text to display at the bottom of the image>"
  },
  "<spotify track id>": {
  }
}
```

Replace the ```<spotify track id>``` with the actual track ID of the Spotify track. The track ID is part of the track URI,
e.g. 'Lady In Black' (Uriah Heep) has a track URI ```spotify:track:2U2ByqoO82fnayaPzO4x2d``` and the track ID therefore
is ```2U2ByqoO82fnayaPzO4x2d```.

# Run

- Run `node main.js`
- Start Spotify
- Open `localhost:3000` in your Browser
- Play a track in Spotify you configured a meme for
