import {Input} from "./Input.tsx";
import {render} from "@testing-library/react";
import {axe} from "jest-axe";

describe('Input component', () => {
    it('should not have any accessibility violations', async () => {
        const { container } = render(<Input label="E-mail" />);
        const result = await axe(container);
        expect(result).toHaveNoViolations();
    })
});


