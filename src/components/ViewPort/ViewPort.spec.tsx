import { vi } from 'vitest';
import {ViewPort} from "./ViewPort";
import {render, screen} from "@testing-library/react";
import {useViewPort} from "../../hooks/useViewPort";

vi.mock('../../hooks/useViewPort', () => ({
    // useViewPort: vi.fn().mockImplementationOnce(() => ({ x: 1024, y: 768}))
    useViewPort: vi.fn(),
}));

describe('ViewPort component', () => {

    it('should display default values', () => {
        vi.mocked(useViewPort).mockImplementationOnce(() => ({ x: 1024, y: 768}));
        render(<ViewPort/>);
        expect(screen.getByText(/x: 1024, y: 768*/i)).toBeInTheDocument();
    })

    it('should display values', () => {
        vi.mocked(useViewPort).mockImplementationOnce(() => ({ x: 1920, y: 1080}));
        const {debug} = render(<ViewPort/>);
        debug();

        expect(screen.getByText(/x: \d*, y: \d*/i)).toBeInTheDocument();
    })
});
