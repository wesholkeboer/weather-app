import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

test("Header renders the weather local heading", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const title = screen.getByText(/weather. local./i);
  expect(title).toBeInTheDocument();
});
