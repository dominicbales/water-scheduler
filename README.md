## Description

Tandem watering scheduler is a scheduler that helps keeps track of which plants at Tandem need to be water and on which day

### Accepted Criteria

- &#x2714; The user can view which plant(s) to water on which dates(s)
- &#x2714; The schedule covers the next 12 weeks starting next Monday
- &#x2714; No plants are watered on Saturdays or Sundays
- &#x2714; Each plant is watered on its desired schedule or as close as possible, taking into acount weekends

### Demo

You can view the demo of the application here (https://soterox.github.io/water-scheduler/) or run it locally by following the steps below

### How to Run

In order to run this project you must first make sure you have Yarn installed and after that you must cd into the project directory and run:

```js
yarn start
```

### Problems

One of the biggest problems I faced was adding the date object to an array and then increasing the date through a loop because of Javascript pass by reference nature the objects in the array would constantly change when the date was increased at the end of the loop.

### Issues

An issue that this project has is that it's not dynamic, so if you wanted to add new plants or add more weeks to this application it wouldn't work. The good thing is that you only have to make a few changes for it to be dynamic.

### Additional Features

- Add checkmarks so the user knows if they already water the plants that day
- Login and signup
- Allow plants to be added
- Choose how many weeks you would like to scheduler to schedule watering days for

### Notes

Just a side note, the components List and BigCalendar logics to determine the plants dates are similar but different mainly because the React package that I'm using for the calendar needed the data to be structured a certain way before it could be used.

### Project INFO

- Created with Create-React-App
- Used react-big-calendar(https://github.com/intljusticemission/react-big-calendar)
- Testing with JEST and Enzyme
- CircleCI
