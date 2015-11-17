# 3 Simple Steps of Hello World!
So trying to take on React, Redux and React routing resulted in me considering to throw my laptop into the heart of Mordor. But instead I decided to try breaking it down. So where to start? Why not hello world? This is a simple post describing the 3 Simple Steps of Hello World. I got 3 html files which only purpose is to print out "Hello World". No mind blowing stuff but atleast something!


### The most simplest Hello World!
This is according to me the esiest way to print "Hello World" in React.
In the head we import what we need to use react, reactdoom and jsx from the web. And in the <scripttype="text/babel"></script> tag all we do is render "Hello World!" in the content div.
```
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World!</title>
    <meta charset="utf-8">
    <!-- The core React library -->
    <script src="https://fb.me/react-0.14.2.js"></script>
    <!-- The ReactDOM Library -->
    <script src="https://fb.me/react-dom-0.14.2.js"></script>
    <!-- So that we can use JSX -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
  </head>
  <body>
    <div id="content">
      <p>This text will be replaced with a "Hello World!"</p>
    </div>
    <script type="text/babel">
      ReactDOM.render(
        <h1>Hello World!</h1>,
        document.getElementById('content')
      );
    </script>
  </body>
</html>
````

### My first component!
Note that this time i downloaded the react library from here https://facebook.github.io/react/index.html however it works the same way as the first example but now you have the library locally.

We are still just printing out "Hello World!", however this time we are doing it by first creating a compononent valled Message and its job is to return "Hello World".
```
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World2!</title>
    <meta charset="utf-8">
    <!-- The core React library -->
    <!-- note that I downlaoaded the library this time -->
    <script src="build/react.js"></script>
    <!-- The ReactDOM Library -->
    <!-- note that I downlaoaded the library this time -->
    <script src="build/react-dom.js"></script>
    <!-- So that we can use JSX -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
  </head>
  <body>
    <div id="content">
      <p>This text will be replaced with a "Hello World!"</p>
    </div>
    <script type="text/babel">
      var Message = React.createClass({
        render: function(){
          return <h1>Hello World!</h1>;
        }
      });

      ReactDOM.render(
        <Message/>,
        document.getElementById('content')
      );
    </script>
  </body>
</html>
```
### Passing a property
In the last example we are still just printing out "Hello World!" and this time we arre passing the message with a property, these can be found by using this.props.
```
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World3!</title>
    <meta charset="utf-8">
    <!-- The core React library -->
    <script src="build/react.js"></script>
    <!-- The ReactDOM Library -->
    <script src="build/react-dom.js"></script>
    <!-- So that we can use JSX -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
  </head>
  <body>
    <div id="content">
      <p>This text will be replaced with a "Hello World!"</p>
    </div>
    <script type="text/babel">
      var Message = React.createClass({
        render: function(){
          return <h1>{this.props.message}</h1>;
        }
      });
      ReactDOM.render(
        <Message message="Hello World!"/>,
        document.getElementById('content')
      );
    </script>
  </body>
</html>
```
1. [hello-world.html](https://github.com/bc222az/Ria-development-2dv607/blob/gh-pages/hello-world/hello-world.html)
2. [hello-world2.html](https://github.com/bc222az/Ria-development-2dv607/blob/gh-pages/hello-world/hello-world2.html)
3. [hello-world3.html](https://github.com/bc222az/Ria-development-2dv607/blob/gh-pages/hello-world/hello-world3.html)
