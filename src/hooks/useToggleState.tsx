import { useState, useCallback } from "react";
import { isEqual } from "lodash";

export interface IToggleResult<T> {
    currentState: T;
    toggleCurrentState: (newState: T) => void;
}

export const useToggleState = <T extends unknown>(initialState: T, states: T[]): Readonly<IToggleResult<T>> => {
    if (!states.some(state => isEqual(initialState, state))) {
        console.error(`Initial state ${initialState} is not available in possible states.`);
    }

    if (!states.length) {
        console.error("States arr shouldn't be empty.");
    }

    if (!initialState) {
        console.error("Initial state should be present.");
    }

    if (!states) {
        console.error("States should be present.");
    }

    const [currentState, setCurrentState] = useState<T>(initialState);

    const toggleCurrentState = useCallback((newState: T): void => {
        if (states.some(state => isEqual(state, newState))) {
            setCurrentState(newState);
        } else {
            console.error(`Current value: ${newState} is not available in possible states`);
        }
    }, [states]);

    return { currentState, toggleCurrentState };
};