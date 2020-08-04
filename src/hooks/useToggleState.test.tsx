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
        it("that should return initial value", () => {
            const initialValue2 = 2;
            const initialValue3 = 3;
            const { result: result1 } = renderHook(() => useToggleState(initialValue2, states));
            const { result: result2 } = renderHook(() => useToggleState(initialValue3, states));

            expect(result1.current.currentState).toEqual(initialValue2);
            expect(result2.current.currentState).toEqual(initialValue3);
        });

        it("to toggle current state", () => {
            const { result } = renderHook(() => useToggleState(initialValue, states));

            act(() => {
                result.current.toggleCurrentState(2);
            });

            expect(result.current.currentState).toEqual(2);

            act(() => {
                result.current.toggleCurrentState(3);
            });

            expect(result.current.currentState).toEqual(3);

            act(() => {
                result.current.toggleCurrentState(1);
            });

            expect(result.current.currentState).toEqual(1);
        });

        it("that shouldn't toggle current state if value is out of range", () => {
            const { result } = renderHook(() => useToggleState(initialValue, states));

            act(() => {
                result.current.toggleCurrentState(5);
            });

            expect(result.current.currentState).toEqual(initialValue);
        });
    });
});