import { render, screen } from "@testing-library/react";
import {describe, expect, test} from "vitest";
import Button from "./button";

describe("Button", () => {
  test("le bouton affiche bien le text 'cliquez ici'", () => {
    render(<Button />);
    const buttonElement = screen.getByText("Cliquez ici");
    expect(buttonElement).toBeInTheDocument();
  });
});