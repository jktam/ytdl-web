# ytdl-web
webui for youtube-dl

(WIP)!!!

This project is intended for self-hosting a webserver that has youtube-dl installed. I am using this as a learning experience/exercise on creating webpages, server/client interaction, server running commands generated from the webpage (PHP, Python, shell), Docker, etc.

This is NOT robustly made because I am a novice; so this is not intended to be public-facing.

Intended features:
- grab "best" video/audio available file (default)
- grab "absolute best" video/audio file
- grab audio only (m4a)

Currently, the website can form the youtube-dl command that a UNIX machine can read-- but that's about it. This command has to be passed to the server with PHP to run a shell or Python script, which will then execute the command. I do not know how to pass the download to the client nor sending the file to a network share.
