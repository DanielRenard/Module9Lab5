# Module9Lab5

# MVC Structure

This is my simple nodejs application to showcase MVC structure and simple Rest API. This boilerplate is very basic and should be used as a training ground

After installing, run the server using

npm start
If instead, you get something like the following, someone is already using the default port of 8081:

Server running at http://127.0.0.1:3000/

events.js:72
    throw er; // Unhandled 'error' event
              ^
Error: listen EADDRINUSE
    at errnoException (net.js:901:11)
    at Server._listen2 (net.js:1039:14)
    at listen (net.js:1061:10)
    at Server.listen (net.js:1127:5)
    ...
Once the server is running, test it by visiting the following URL in your browser:

http://localhost:3000/

## files in this repository

server.js

The server written with node.js. This server was adapted from the example provided in the node docs.

.gitignore

List of file patterns that should NOT be stored in git. If you aren't using git, you don't need this file. And the contents are personal preference.

See the npm google groups topic 'node_modules in git' from FAQ for discussion.

package.json

Standard package.json file for node packages. You will need this file for two reasons:

identify your node package dependencies during npm install
identify to Bluemix that this directory contains a node.js application
See the npm doc package.json for more information.

README.md

This file!

## Exercise
Using the guide at https://socket.io/get-started/chat as a helper, try to implement a basic
chat app which includes one of their suggested extensions (or come up with your own!):
● Broadcast a message to connected users when someone connects or disconnects.
● Add support for nicknames.
● Don’t send the same message to the user that sent it. Instead, append the message
directly as soon as he/she presses enter.
● Add “{user} is typing” functionality.
● Show who’s online.