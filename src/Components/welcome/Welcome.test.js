import { render } from "@testing-library/react";
import Welcome from "./Welcome";


describe("Welcome Component", () => {
    it("should be rendered on the web page", () => {
        const { getByTestId } = render(<Welcome />);
        const welcomeComponent = getByTestId("welcome-component");

        expect(welcomeComponent).toBeInTheDocument();
    });
});
