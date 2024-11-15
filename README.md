# Counter React

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install node_modules with yarn install
4. Use yarn dev or start (depends package.json) to run the app page

## Description

I made a web application that serves as a counter, basically we have 3 buttons. An `increase` button that adds one to our variable or state, `decrease` that subtracts one to our variable or state and `reset` that resets our variable or state to 0. If the number is positive it will be green, if it is 0 it will be white and if it is negative it will be red.

## Technologies used

1. React JS
2. Typescript
3. CSS3

## Libraries used

#### Dependencies

```
"@types/jest": "^29.5.13",
"@types/react": "^18.3.11",
"@types/react-dom": "^18.3.1",
"@types/node": "^20.10.6",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"
```

#### devDependencies

```
"@testing-library/dom": "^10.4.0",
"@testing-library/jest-dom": "^6.6.2",
"@testing-library/react": "^16.0.1",
"@testing-library/user-event": "^14.5.2",
"typescript": "^5.3.3"
```

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/Counter-React`](https://www.diegolibonati.com.ar/#/project/Counter-React)

## Video

https://github.com/DiegoLibonati/Counter-App-Page/assets/99032604/42c39994-9e70-431b-8954-0c0c4ad67e4c

## Testing

1. Join to the correct path of the clone and join to: `bookstore-app`
2. Execute: `yarn install`
3. Execute: `yarn test`

## Documentation

In the `Main.tsx` component we are going to have a state called `value` that will be the one whose value will be added, subtracted or subtracted. It has a default value that arrives by props. The `handleIncrease()` function will add 1 to the `value` state each time it is called, the `handleReset()` function will reset the value of `value` to 0 each time it is called and the `handleDecrease()` function will subtract 1 from `value` each time it is called. Also the `checkColor()` function will check the value of `value` and depending on whether it is positive, negative or neutral will assign a different color to that element:

```
  const [valueCounter, setValueCounter] = useState<number>(value);
  const valueRef = useRef<HTMLHeadingElement | null>(null);

  const handleIncrease: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setValueCounter(valueCounter + 1);
  };

  const handleReset: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setValueCounter(0);
  };

  const handleDecrease: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setValueCounter(valueCounter - 1);
  };

  const checkColor = (): void => {
    if (valueCounter < 0) {
      valueRef.current!.style.color = "red";
      return;
    } else if (valueCounter > 0) {
      valueRef.current!.style.color = "green";
      return;
    }
    valueRef.current!.style.color = "#FFE4C9";
    return;
  };

  useEffect(() => {
    checkColor();
  }, [valueCounter]);
```
