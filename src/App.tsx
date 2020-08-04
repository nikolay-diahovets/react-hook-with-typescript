import React, { FC } from 'react';
import { useToggleState } from "./hooks/useToggleState";

const App: FC = () => {
    const { currentState, toggleCurrentState } = useToggleState(1, [1, 2, 3, 4, 5]);

    return (
        <div>
            <div>{currentState}</div>
            <button onClick={() => toggleCurrentState(2)}>Toggle state</button>
        </div>
    );
}

export default App;
