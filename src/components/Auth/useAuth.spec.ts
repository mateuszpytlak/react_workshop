import {act, renderHook} from "@testing-library/react";
import { useAuth } from "./AuthContext.tsx";

describe('useAuth hook', () => {
    it('should change values', () => {
        const { result } = renderHook(() => useAuth());

        expect(result.current.isLoggedIn).toBe(false);
        act(() => {
            expect(result.current.toggleLoginState());
        })
        expect(result.current.isLoggedIn).toBe(true);
    });
})
