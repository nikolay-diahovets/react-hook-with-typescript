# Custom React hook with TypeScript

This is a test task project where is created custom react hook using TypeScript.

Hook is placed in folder src/hooks.

## Task description

Build a React hook that a programmer can use to toggle between n arbitrary states where n >= 1. I can feed the hook a set of possible states and an initial state. It returns the current state and a function to let me set a new state.
Use Typescript and write a test suite for it using jest.

## Example

```typescript jsx
import React, { FC } from 'react';
import { useToggleState } from "./hooks/useToggleState";

export interface IState {
    name: string
    age: number
}

const initialState: IState = {
    name: "Nick",
    age: 23,
};

const states: IState[] = [
    { name: "Nick", age: 23 },
    { name: "Tom", age: 25 },
    { name: "Kate", age: 27 }
];

const App: FC = () => {
    const { currentState, toggleCurrentState } = useToggleState<IState>(initialState, states);
    const { name, age } = currentState;
    return (
        <div>
            <div>{`Name: ${name}, Age: ${age}`}</div>
            <div>
                {
                    states.map((state, index) => {
                        const { name: stateName, age: stateAge } = state;
                        return (
                            <div key={index}>
                                <button onClick={() => toggleCurrentState({ name: stateName, age: stateAge })}>{`State ${index + 1}`}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;
```
---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
