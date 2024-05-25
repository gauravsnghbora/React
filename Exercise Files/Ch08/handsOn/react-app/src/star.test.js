import { Star } from "./star";
import { render } from "@testing-library/react";

test("render h1 tag", () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/cool star/);
  expect(h1).toHaveTextContent("cool star");
});
