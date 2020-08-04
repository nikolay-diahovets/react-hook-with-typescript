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
