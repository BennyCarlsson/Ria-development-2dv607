# Firebase

### What is Firebase?
Firebase is a realtime NOSQL database that stores your information as a JSON object and does NOT require a backend. It lets you store and sync data across multiple clients and platforms such as Android, iOS and JavaScript SDKs. Firebase as company was bought by Google in 2014.

### What can it do? And why is it so awesome?
Firebase is really awesome for many reasons but the thing that makes it really awesome is the fact that it's really easy to get started, with their great official tutorials and documentations (links in the end). It's free to use for starters however their is a free limit and if you want to expand your application you have to pay.

Firebase offers multiple user authentication for your application with email/password combination, facebook, twitter, github, gmail, anonymous auth or with your own authentication system. More about this in the Authentication section.

Hosting for your web app is also something firebase offers. Every app get their own firebaseapp.com domain and if your willing to pay you can use your own custom domain. But this is of course just an option and you can simply implement firebase on your own website deployed somewhere else.

GeoFire available for web (Javascript),android(Java) and iOS(Objective-C) is a library that makes it possible for information together with keys based on geographic so that you can for example only load data close to you. This is good to narrow data on larger apps.

### How to implement Firebase?
We are going to focus on web applications and javascript however you can easily connect to the same database table from iOS and/or Android by following the Firebase [official guide](https://www.firebase.com/docs/).

Go to [Firebase website](https://www.firebase.com/) and sign up if you already haven't. A table called "MY FIRST APP" will be created for you. Feel free to use that one or create a new one.

Now to include firebase to your project you simply add
```
<script src="https://cdn.firebase.com/js/client/2.3.2/firebase.js"></script>
```
into you head.
something like this
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Firebase Demo</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <script src="https://cdn.firebase.com/js/client/2.3.2/firebase.js"></script>
  </head>
  <body>
  </body>
</html>
```
Other alternatives like npm or bower install look [here](https://www.firebase.com/docs/web/guide/setup.html)

To be able to read or write data ti your database create a reference in your javascrip.
```
var firebaseRef = new Firebase('https://YOUR-TABLENAME.firebaseio.com/');
```

### Authentication

### Security on Firebase?

### Pay Plan

### When to use Firebase?

### Links
[Firebase 5min getting started tutorial](https://www.firebase.com/tutorial/#gettingstarted)
