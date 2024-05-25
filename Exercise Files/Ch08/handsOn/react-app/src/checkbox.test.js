import { Checkbox } from "./checkbox";
import { render, fireEvent } from "@testing-library/react";

test("render h1 tag", () => {
  const { getByLabelText } = render(<Checkbox />);
  const checkbox = getByLabelText(/not checked/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);
});
