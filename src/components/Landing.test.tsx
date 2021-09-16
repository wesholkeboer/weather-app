import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./Landing";

test("Landing renders the get local weather button", () => {
  render(
    <Router>
      <Landing />
    </Router>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
