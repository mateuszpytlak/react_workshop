import {render, screen} from "@testing-library/react";
import { axe } from 'jest-axe';
import {Button} from "./Button.tsx";

describe('Button component', () => {
    it('should render correctly', () => {
        //const { debug } = render(<Button label="Click me" />);
        render(<Button label="Click me" />);

        const elem = screen.getByText('Click me');
        // debug();
        expect(elem).toBeInTheDocument();
    })

    it('should have no violations', async () => {
        const { container } = render(<Button label="Click me" />);

        const result = await axe(container);

        expect(result).toHaveNoViolations();
    })
})
