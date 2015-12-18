# Entry 04
I have been off lately and haven't written a blog post for along time. Why you may ask? well because I have been busy implementing shitloads of awesome stuff into my project that's why!

### Implemented time
I started the project by implementing time. I use the javascript new Date() and with this a calculate and print out the date, week, day of the week and a watch. Everything updates automatically in time.js

### Deciding project and doing research
I played around a lot with reacts chat guide/app and I would use this later on to create my own kind of "chat" with Firebase. But I wanted to do an application where I could we which of my friends ate in school or not. After some research I realized firebase was a nobrainer to use with react to save data. I also found an app called IFFT (if this than that) that could do post requests on different triggers. I could use this to ping my database when someone enters or leaves the school. However the enter/exit gps function on this app is unreliable so I use this check together with if this person connects with eduroam the schools wifi. However this means that that it will trigger if visiting other places that uses eduroam like the library or other universities.

### Working on the project
I started with looking at (read copying) the reduxfirebasedemo app to implement my own authentication and together with reacts tutorial I implemented a logging and a very simple chat application where someone after logging in can write a simple message. This later changed into something more like leaving a post note and not a chat (only one message per user, it overwrites your old message). I also save the userId and username on the people logging in with facebook. I later use this when I who is in school or not. I let IFTTT ping a node server with a post that contains if they entered or exited together with the userId.

### Firebase
As I mentioned before using firebase as a database with react was a nobrainer. I never user firebase before but the official guides and tutorials was really good and it didn't take long until I could set it up. My problem now however that I didn't have time to solve is security. My database connection is all out there fully exposed.

### Styling with bootstrap and Material Design Lite
When you get a little tired after looking at your application for hours,days and weeks it's probably time for some styling. I wanted the website to be mobile-friendly since this might be a website that you will visit on your phone to check who is in school. I thought this would be a good time to read up on bootstrap. The grid system there makes it really really for your website to adapt to tablets and phones. After studying,installing and implementing I got the grid system to work and the website looked ok on phones and tablets I did need to install react for bootstrap. But the styling still wasn't pretty enough and styling is not my strong side, also I find bootstrap design is outdated and boring. I then heard that mdl (material design lite) by google was out. This was amazing. Since I really like google material design but I'm to lazy to write css this was great. I implemented mdl into my react project aswell however it did have some styling conflict with bootstrap and using two css frameworks. After a while realized that mdl got a grid system as well, even tough its not as good as bootstraps it was a dealbreaker and I removed bootstrap from the project.

### Other stuff
I did a lot of refactoring/styling/implementation etc. which I haven't mentioned since I was to busy/lazy to write bloggposts. 
