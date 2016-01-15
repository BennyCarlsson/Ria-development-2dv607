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

Other alternatives like npm or bower install look [here](https://www.firebase.com/docs/web/guide/setup.html)

To be able to read or write data to your database create a reference in your javascrip.
```
var firebaseRef = new Firebase('https://YOUR-TABLENAME.firebaseio.com/');
```
To save data to your database you can either use set() or push() or transaction for more complex data.
```
var firebaseRef = new Firebase('https://YOUR-TABLENAME.firebaseio.com/users');

firbaseRef.push({
        name: "Benny",
        lastname: "carlsson"
    });
```
push will automatically create a unique id for the user and can create and save multiple users.
```
var firebaseRef = new Firebase('https://YOUR-TABLENAME.firebaseio.com/users/special-user');

firbaseRef.set({
        name: "Bill",
        lastname: "Billson"
    });
```
using set will however save data to the defined path user/special-user and overwrite any old data in that path. You can use set if you already have a unique id and don't want firebase to create one for you.

use update to update your data.
```
var firebaseRef = new Firebase('https://YOUR-TABLENAME.firebaseio.com/users/special-user');
firbaseRef.update({
        lastname: "Carlsson"
    });
```
this changes Bills lastname to "Carlsson" instead of "Billson" note that if you use set instead of update it will delete Bills the other information and Bill would have lost his firstname.

Now to retrieve our data we simply set up a listener that will be called every time data changes to keep it updated.
```
var firebaseRef = new Firebase('https://YOUR-TABLENAME.firebaseio.com/users');
firbaseRef.on("value", function(snapshot){
        console.log(snapshot.val());
    });
```
You will retrieve the data as a snapshot and calling val)= you get the value of it.
you can change "value" to "Child_changed", "Child_added", "Child_removed" or "Child Moved" pretending on what cause you want the callback.

if you don't want the function to be executed on the listener you can switch it offline
```
firbaseRef.off();
```
or simply tell it to only get the information once
```
var firebaseRef = new Firebase('https://YOUR-TABLENAME.firebaseio.com/users');
firbaseRef.once("value", function(snapshot){
        console.log(snapshot.val());
    });
```
more information about retrieveng data [here](https://www.firebase.com/docs/web/guide/retrieving-data.html)


Firebase also got it's own offline sync which require no extra coding on your part. Before pushing any data to the database it first writes it to it's local version first. If you loose internet connection before or while writing to the database, firebase will automatically sync the data when your internet connection is re-established.

### Security on Firebase?
If you use firebase on the client side on your web application your security = null. But luckily you can change this by going to the Security & rules when looking at your database.

By default it looks like this
```
{
    "rules": {
        ".read": true,
        ".write": true
    }
}
```
this means anyone can read your data and anyone can write data to your database.
you can set .read (who can read your data), .write (who can write to your database) and .valiate (what is allowed).
if read or write is not set it is by default false.
Keep in mind that this rules are absolute if something is breaking the rules an error will be thrown and returned.

More about setting rules [here](https://www.firebase.com/docs/security/guide/securing-data.html)
### Pay Plan
Even tough Firebase is completely free to use in the beginning
[Pricing list](https://www.firebase.com/pricing.html)
### When to use Firebase?

### Links
[Firebase 5min getting started tutorial](https://www.firebase.com/tutorial/#gettingstarted)

[Firebase website](https://www.firebase.com/)

[Official guide](https://www.firebase.com/docs/)
