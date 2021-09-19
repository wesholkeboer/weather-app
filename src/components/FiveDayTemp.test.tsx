import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import FiveDayTemp from "./FiveDayTemp";

test("FiveDayTemp renders the get local weather button", () => {
  render(
    <Router>
      <FiveDayTemp />
    </Router>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
