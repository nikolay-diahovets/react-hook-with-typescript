import { act, renderHook } from "@testing-library/react-hooks";
import { useToggleState } from "./useToggleState";
import { IState } from "../App";

describe("useToggleState hook should", () => {
    it("return current state and function to change state", () => {
        const states: number[] = [1, 2, 3];
        const initialValue: number = 1;
        const { result: { current } } = renderHook(() => useToggleState<number>(initialValue, states));
        const { currentState, toggleCurrentState } = current;

        expect(currentState).toEqual(1);
        expect(typeof toggleCurrentState).toEqual("function");
    });

    describe("return a function toggleCurrentState", () => {
        it("that should return initial value", () => {
            const states: number[] = [1, 2, 3];

            const initialValue1: number = 1;
            const initialValue2: number = 2;
            const { result: result1 } = renderHook(() => useToggleState<number>(initialValue1, states));
            const { result: result2 } = renderHook(() => useToggleState<number>(initialValue2, states));

            expect(result1.current.currentState).toEqual(initialValue1);
            expect(result2.current.currentState).toEqual(initialValue2);
        });

        it("to toggle current state", () => {
            const initialState: IState = {
                name: "Nick",
                age: 23,
            };

            const states: IState[] = [
                { name: "Nick", age: 23 },
                { name: "Tom", age: 25 },
                { name: "Kate", age: 27 }
            ];

            const { result } = renderHook(() => useToggleState<IState>(initialState, states));

            act(() => {
                result.current.toggleCurrentState({ name: "Kate", age: 27 });
            });
            expect(result.current.currentState).toEqual({ name: "Kate", age: 27 });

            act(() => {
                result.current.toggleCurrentState({ name: "Tom", age: 25 });
            });
            expect(result.current.currentState).toEqual({ name: "Tom", age: 25 });

            act(() => {
                result.current.toggleCurrentState({ name: "Nick", age: 23 });
            });
            expect(result.current.currentState).toEqual({ name: "Nick", age: 23 });
        });

        it("that shouldn't toggle current state if value is not present in states", () => {
            const states: string[] = ["one", "two", "three"];
            const initialValue: string = "one";

            const { result } = renderHook(() => useToggleState<string>(initialValue, states));

            act(() => {
                result.current.toggleCurrentState("five");
            });

            expect(result.current.currentState).toEqual(initialValue);
        });
    });
});