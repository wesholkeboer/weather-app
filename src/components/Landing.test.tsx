import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./Landing";
import { mockNavigatorGeolocation } from "./mockNavigatorGeolocation";

test("Landing renders the get local weather button", () => {
  render(
    <Router>
      <Landing />
    </Router>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("button on Landing calls the GetCurrentPosition function", () => {
  render(
    <Router>
      <Landing />
    </Router>
  );
  const { getCurrentPositionMock } = mockNavigatorGeolocation();
  getCurrentPositionMock.mockImplementation();
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(getCurrentPositionMock).toHaveBeenCalled();
});
