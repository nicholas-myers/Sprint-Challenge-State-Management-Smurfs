# Sprint Challenge: State Management - Smurfs

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored the context API, the reducer pattern, and Redux. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web.

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency throughout State Management and your command of the concepts and techniques in the the context API, the reducer pattern, and Redux.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this challenge, you are to build a Smurfs village utilizing context or Redux as your state management. Build this challenge from the ground up using what you have learned about state management.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] What problem does the context API help solve?

Context solve the problem of props drilling and passing props to components that don't need state.

- [x] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are the functions that dispatch an object with a type and payload. actions send their actions to the reducer where the data is set to state. reducers set the initial state that is then passed through a create store function. the store is the single place where all state exists. the store is the single source of truth because each component recieves its state from the store as the data changes it will change for every component thus single source.

- [x] What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is one state that is used through each component throughout the entire app. Component state exists only on a single component. component state might exist on a form component to change inputs. Where app state would be a situation where mutiple components change the data of state so the form input is recieved and that creates a new object that is added to data which is passed to another component that then renders the new data.

- [x] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is passed through middleware to allow as to create a function to then make our dispatch calls to as return in our actions. Thunk also allows for asyncronous axios calls returned in our action function. the change is that our action no loger just returns our action object, it returns a function that can execute asyncronously.

- [x] What is your favorite state management system you've learned and this sprint? Please explain why!

I think that I will end up liking Redux more for the way that it sets up state and allows for better re-usable components. Although context is easier to set up and less lines of code, the power of redux is far greater and I'm already planning to implement it into a side project of mine that I think would benefit from it's capabilities.

## Project Set Up

Follow these steps to set up your project:

- [x] `fork & clone` this repository.
- [x] `cd` into the forked copy of this repository.
- [x] **RUN** `npm install` to retrieve all `server-side` the dependencies.
- [x] **RUN** `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [x] After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an array with one smurf in it returned to you. This is an array that your **API** will be using to store our Smurf Data.
- [x] **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [x] **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
- [x] **cd** into `smurfs` and run `npm install` to retrieve the client side dependencies.
- [x] **RUN** `npm start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

**LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.

## Minimum Viable Product

- [x] Plan and implement how you are going to manage your state for your application
- [x] You _must_ use either context or Redux as your state management system
- [x] Once you have planned out your state management system, fetch data from the smurf server and display the data it returns
- [x] Add a form to collect info for a new smurf, and make a POST request to the server to add a new smurf to your village

## API documentation

### GET '/smurfs'

- [x] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`.
- [x] Double check that your response from the server is an array of smurfs.

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
];
```

### POST '/smurfs'

- [x] Design the functionality to add a smurf to the Smurf DB you'll need all three fields. `name`, `age`, and `height`.

Example of the shape of data to be sent to the `POST` endpoint:

```js
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```

- [x] Double check to make sure that a smurf is created correctly once your functionality is built out.

Initially Brainey will be in the array, but it takes more than one smurf to make the village. Be sure to add a few smurfs to populate our smurf village.

**HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

Example of object created in Smurf DB:

```js
[
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  },
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```

## STRETCH PROBLEM

The following two endpoints are here for you if you'd like to push yourselves a little further.

### PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify

- [ ] For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.

Example:

```js
input:
{
  id: 1,
  name: 'Grumpy'
}
output:
[
  {
    name: 'Grumpy',
    age: 30,
    height: '3cm',
    id: 1
  },
  {
    name: 'Sleepy',
    age: 211,
    height: '2cm',
    id: 0
  }
]
```

### DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove

For this endpoint to work, all you need is an id sent up as part of the request url.

If your delete worked, you'll get a an array back with all of the smurfs but with your requested smurf removed.

- [ ] You don't need any input beyond the url parameter of the smurf, so if we send up a delete request to `/smurfs/123` then you'll remove the smurf by that id.

Example:

```js
output: [
  {
    name: "Sleepy",
    age: 200,
    height: "5cm",
    id: 1
  }
];
```
