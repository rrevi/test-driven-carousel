import { render, screen } from "@testing-library/react";
import CarouselButton from "./CarouselButton";

describe("CarouselButton", () => {
  it("renders a <button>", () => {
    render(<CarouselButton />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("passes 'children' through to the <button>", () => {
    const text = "Button text";
    render(<CarouselButton>{text}</CarouselButton>);
    expect(screen.getByRole("button")).toHaveTextContent("Button text");
  })
})