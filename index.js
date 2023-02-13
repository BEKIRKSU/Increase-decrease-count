import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

//The idea here is simple. How can we get the + button to trigger an update in
//the number.
//How can we approach this. Firstly, the h1 has a hard coded \/alue inside it, so
//that won't work. Whateer is hard coded wont change, so when you want something
//thats changeable first remo\/e the hard coding.
//So let's create a new \/ar called count and set it to zero and then we could
//replace the hard coded \/alue with count. See below:
//So it changes from <h1>0</h1> to <h1>{count}</h1>

//So now we need to be able to trigger some piece of code to happen when the button
//is clicked.
//We know from HTMl that all our button elements ha\/ean attribute called 'onClick'
//So we can set that to equal some sort of function to be triggered when this button
//receies a click action.
//So we can literally set this onClick to a function, so let's create a function.
//As you see, outside the ReactDOM.render bit all the functions etc are set and called
//simply by their name inside the render area.

//So I made a function that says this:

// var count = 0;

// function increaseCount() {
//   count++;
//   ReactDOM.render(
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increaseCount}>+</button>
//     </div>,
//     document.getElementById("root")
//   );
// } This was all copy pasted into the App component file.

//When I do it like this, it works, wheneer we click the button we see an icnrease
//in the console by 1 each time. But our user interface is not changing at all.
//(We rely on ReactDOM.render to render each of these elements onto the screen)
//So if we want to update what's on the screen we ha\/e to re render the bit inside
//the di\/ below.
//One way to do this will be to call ReactDOM.redner again, but this time inside our
//function called increaseCount.
//Look abo\/e for this one.
//As you can see, we still ha\/e the render below. So we need to ha\/e
//one render to ha\/e what we ha\/e on the screen, and then the second render inside the
//function abo\/e to re-render it all and get it to work in the UI.
//So eerythime we click the button it is re rendering e\/erything that's on screen.
//which is our di\/ and our h1 and our button.
//So it basically goes back and checks the code and updates it , adds one to the count
//and then puts that new count into the h1 and then re renders it all onto the screen.
//But this is kind of inefficient and doesn't look great.
//There's too much repetition.
//So up until here, we probably won't be doing or seeing when using React and etc.
//To simplify all of this hooks come in. Such as the useState hook which works well
//for this situation.

ReactDOM.render(<App />, document.getElementById("root"));

//One of the rules for when using hooks is that you must use it inside a functional
//component.
//So we ha\/e to create a function, that renders a component and then we use the hook
//inside that function.
//So we therefore import the App.js file and moe all the code from here into there
//and only keep our ReactDOM. render code here.
//And inside that ReactDOM we are rendering a simple App component rather than all the
//code.
//So now we can go and focus on our App component. Check notes on App.js

//We are left with one line of code rather than the messy code we had a minute ago.