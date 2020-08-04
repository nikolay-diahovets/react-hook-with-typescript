import { useState, useCallback } from "react";

interface IToggleResult {
    currentState: number;
    toggleCurrentState: (newState: number) => void;
}

export const useToggleState = (initialState: number = 1, states: number[] = []): Readonly<IToggleResult> => {
    if (!states.includes(initialState)) {
        console.error(`Initial state ${initialState} is not available in possible states.`);
    }

    if (!states.length) {
        console.error("States arr shouldn't be empty.");
    }

    if (!states.every(item => item >= 1)) {
        console.error("Each element of the states arr should be >= 1.");
    }

    const [currentState, setCurrentState] = useState<number>(initialState);
    const [possibleStates] = useState<number[]>(states);

    const toggleCurrentState = useCallback((newState: number): void => {
        if (possibleStates.includes(newState)) {
            setCurrentState(newState);
        } else {
            console.error(`Current value: ${newState} is not available in possible states`);
        }
    }, [possibleStates]);

    return { currentState, toggleCurrentState };
};