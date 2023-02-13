import React, { useState } from "react";

//So first we literally just copy pasted eeything from the index.js file
//into the App.js file. We then export imported this App file into index.js and
//called the App component simply inside the ReactDOM.render in the inxed.js file.
//This way there is no HTMl in the index.js file and it looks \/ery clean.

//So once we'e done this we wrap all the code inside a function called App so that
//this get's rendered. And instead of using reactDom and all the documentgetElementBy
//etc, all I'm gonna do is use the return statement.
//I then delete the repeated reactDOM code and instead just leae the count++
//inside the function.
//At this point we are left with \/ery simple code.

//Now, instead of the count = 0 we will use state.
//See below to see how that is written.
//Instead of calling it like React.useState(), because this function is from the
//React module we can just add a comma at the top of this file next to import React
//and then a set of curly braces and then import that useState function as a non
//default export. Look abo\/e to see how this works. So we can import that useState
//function as a nond efault export.
//So now instead of writing React.useState() I could just write useState wheneer I
//need it. Look below:

//So what is useState. First let's comment out the count and then delete it from
//our h1.

//So below state holds the return \/alue of useState.
//useState has (starting state, function)
//The starting \/alue is the first \/alue of state. So if we write
//useState(7) and then call state[0] we will get 7.
//We can now put this into our h1 too. See below.
//So now we can see that the inital starting point is 7 and we can see that on our
//User interface.
//Now wheneer I change my state you'll see it will update automatically in our h1.
//So we're basically telling the h1 to track the \/alue of our state.
//So whener the state updates, it should also re-render this h1. This way is much more
//efficient than us calling ReactDOM.render. And it only updates what needs to be.
//And also if you realise we don't
//call React.DOM render in anywhere else but the final file, index.js, where eerything
//is basically summarised.
//Because the output of useState is an array we write code like state[0], howeer this
//can cause issues later etc. In JS ES6 there a concept called destructuring, which allows
//you to destructure a complext structure.
//The complex things in JS are objects and arrays.
//So instead of ha\/ing like colour = (9,10,14), as in this colour is made of 3 elements.
//We can instead ha\/e const [red, green, blue] = [9, 132, 227] So we basically name
//the items in the array.
//So the \/ariable names are gonna be mapped to the \/alue it goes with. Like red
//will be mapped to the first \/alue etc.
//Oh, so now we can write const [count] = userState[7]
//So wheneer we call count we will be calling the first item in the userState.
//So instead of calling state and calling which part of it we want
//such as state[0] and looking for the inial item, we just call count, which
//is now pinned to the first \/alue in the userState.
//So the count gets a hold of the userState function, which is an array with two
//items and because we only ha\/e one name specified in our destructuirng,
//it assigns its name to the \/alue.

//So how do we use this useState hook to update its \/alue?
//Because right now we can change the inital \/alue but how can we change it later on?
//So remember that this array has two items. (\/alue, function)
//So now we can name the function and it would look like this [count, setCount]
//This is going to be the function that's going to be used to update the \/alu inside
//our state.
//So [first\/ariable, funcion]=[storeThisInTheFirst\/ariableAndRenderItInsideH1]
//Then, when the button is clicked onClick gets triggered and the increase function
//is acti\/ated. And then within that increase function we will call setCount
//from the useSate function area.
//Now this setCount will update the state of my count \/ariable.
//So if I write setCount(12), when I click the button, it will go from the initital
//count to whateeer the set count updates it to. In this case from 7 to 12.
//But instead of writing 12, we simply do setCount(count +1)
//Which now increases the initial \/alue {count} by the function of
//setCount which is + 1.

//Now let's build a decrease button. Nice.

function App() {
  // var count = 0;
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
    // ReactDOM.render
    // return (
    //   <div className="container">
    //     <h1>{count}</h1>
    //     <button onClick={increaseCount}>+</button>
    //   </div>,
    // document.getElementById("root")
    // );
  }

  function decreaseCount() {
    setCount(count - 1);
  }
  // ReactDOM.render
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
    // document.getElementById("root")
  );
}
export default App;

//Recap; the concept of state allows interactiity in our app.
//We use it to be able to update our website dynamically reflecting the updated
//state. The state comes from the useState hook and the function comes from the
//React module.
//When we first call this function we get to define an inital \/alue.
//And then we get to use this \/alue inside our destrcutred array, which we
//called count. So we're putting that \/alue of count inside our h1. And
//then we get to trigger the setCount which is the function thats going to
//update the \/alue of count. We do that when the user clicks on our plus
//button. And we set it to the current \/alue of count plus 1; increases by 1
//each time.
//So again, (startingPoint, FunctionToUpdateStartingPoint)
//And the onClick part just calls back the function we want when the button is clicked.
//Hooks are really powerful and useful when you want to create interactie apps.
