import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import FiveDayTemp from "./FiveDayTemp";
import { mockNavigatorGeolocation } from "./mockNavigatorGeolocation";

test("FiveDayTemp renders the get local weather button", () => {
  render(
    <Router>
      <FiveDayTemp />
    </Router>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("button on Landing calls the GetCurrentPosition function", () => {
  render(
    <Router>
      <FiveDayTemp />
    </Router>
  );
  const { getCurrentPositionMock } = mockNavigatorGeolocation();
  getCurrentPositionMock.mockImplementation();
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(getCurrentPositionMock).toHaveBeenCalled();
});
