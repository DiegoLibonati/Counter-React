# Counter-App-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install node_modules with npm install
4. Use npm start to run the app page

## Description

I made a web application that serves as a counter, basically we have 3 buttons. An `increase` button that adds one to our variable or state, `decrease` that subtracts one to our variable or state and `reset` that resets our variable or state to 0. If the number is positive it will be green, if it is 0 it will be white and if it is negative it will be red.

## Technologies used

1. React JS
2. CSS3

## Galery

![Counter-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/reactcounter-0.jpg)

![Counter-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/reactcounter-1.jpg)

![Counter-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/reactcounter-2.jpg)

![Counter-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/reactcounter-3.jpg)

## Portfolio Link

`https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Counter%20App%20Page`

## Video

https://user-images.githubusercontent.com/99032604/199360962-be7f945a-a287-42ad-88bf-16c08a995441.mp4

## Documentation

In the `Main.jsx` component we are going to have a state called `value` that will be the one whose value will be added, subtracted or subtracted. It has a default value that arrives by props. The `handleIncrease()` function will add 1 to the `value` state each time it is called, the `handleReset()` function will reset the value of `value` to 0 each time it is called and the `handleDecrease()` function will subtract 1 from `value` each time it is called. Also the `checkColor()` function will check the value of `value` and depending on whether it is positive, negative or neutral will assign a different color to that element:

```
const [value, setValue] = useState(props.value)

const handleIncrease = (e) => {
    setValue(value + 1)
    checkColor(value + 1, e.target.parentElement.parentElement.children[1])
}

const handleReset = (e) => {
    setValue(0)
    e.target.parentElement.parentElement.children[1].style.color = "white";
}

const handleDecrease = (e) => {
    setValue(value - 1)
    checkColor(value - 1, e.target.parentElement.parentElement.children[1])
}

const checkColor = (n, valueObject) => {

    if (n < 0){
        valueObject.style.color = "red";
    } else if (n > 0){
        valueObject.style.color = "green";
    } else if (n === 0){
        valueObject.style.color = "white";
    }
}
```
