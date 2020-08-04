import { act, renderHook } from "@testing-library/react-hooks";
import { useToggleState } from "./useToggleState";

const states: number[] = [1, 2, 3];
const initialValue: number = 1;

describe("useToggleState hook should", () => {
    it("return current state and function to change state", () => {
        const { result: { current } } = renderHook(() => useToggleState(initialValue, states));
        const { currentState, toggleCurrentState } = current;

        expect(currentState).toEqual(1);
        expect(typeof toggleCurrentState).toEqual("function");
    });

    describe("return a function toggleCurrentState", () => {
        it("to toggle current state", () => {
            const { result } = renderHook(() => useToggleState(initialValue, states));

            act(() => {
                result.current.toggleCurrentState(2);
            });

            expect(result.current.currentState).toEqual(2);
        });

        it("that shouldn't toggle current state if value is out of range", () => {
            const { result } = renderHook(() => useToggleState(initialValue, states));

            act(() => {
                result.current.toggleCurrentState(5);
            });

            expect(result.current.currentState).toEqual(1);
        });
    });
});