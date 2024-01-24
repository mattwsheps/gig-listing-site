import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gig from "../src/components/Gig";

describe("Test Gig component", () => {
    test("renders with the correct props", () => {
        const props = {
            name: "Awesome Band",
            image: "band-image.jpg",
            description: "An amazing concert",
            datetime: "6pm 20/03/2024",
            location: "Concert Hall",
        };
        render(<Gig {...props} />);
        expect(screen.getByTestId("band-name")).toHaveTextContent(
            "Awesome Band"
        );
        expect(screen.getByTestId("band-image")).toHaveAttribute(
            "src",
            "band-image.jpg"
        );
        expect(screen.getByTestId("description")).toHaveTextContent(
            "An amazing concert"
        );
        expect(screen.getByTestId("date-time")).toHaveTextContent(
            "6pm 20/03/2024"
        );
        expect(screen.getByTestId("location")).toHaveTextContent(
            "Concert Hall"
        );
    });
});
