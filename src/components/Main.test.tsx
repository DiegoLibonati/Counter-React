import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

import { Main } from "./Main";

const renderComponent = (): {
  container: HTMLElement;
  initialValue: number;
} => {
  const initialValue = 0;
  const { container } = render(<Main value={initialValue}></Main>);

  return {
    container: container,
    initialValue: initialValue,
  };
};

test("The title, the counter and the three buttons: increment, reset and decrement must be rendered in the application.", () => {
  const { initialValue } = renderComponent();

  const title = screen.getByRole("heading", {
    name: /counter app/i,
  });
  const counter = screen.getByRole("heading", {
    name: String(initialValue),
  });
  const increaseButton = screen.getByRole("button", {
    name: /increase/i,
  });
  const decreaseButton = screen.getByRole("button", {
    name: /decrease/i,
  });
  const resetButton = screen.getByRole("button", {
    name: /reset/i,
  });

  expect(title).toBeInTheDocument();
  expect(counter).toBeInTheDocument();
  expect(increaseButton).toBeInTheDocument();
  expect(decreaseButton).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
});

test("It should be incremented by 1 when the increment button is touched and also change the color of the counter to green.", async () => {
  const { initialValue } = renderComponent();

  const increaseButton = screen.getByRole("button", {
    name: /increase/i,
  });

  expect(increaseButton).toBeInTheDocument();

  const newValue = initialValue + 1;

  await user.click(increaseButton);

  const counter = screen.getByRole("heading", {
    name: String(newValue),
  });

  expect(counter).toBeInTheDocument();
  expect(counter).toHaveStyle("color: green;");
});

test("It should be decremented by 1 when the decrement button is touched and also change the color of the counter to red.", async () => {
  const { initialValue } = renderComponent();

  const decreaseButton = screen.getByRole("button", {
    name: /decrease/i,
  });

  expect(decreaseButton).toBeInTheDocument();

  const newValue = initialValue - 1;

  await user.click(decreaseButton);

  const counter = screen.getByRole("heading", {
    name: String(newValue),
  });

  expect(counter).toBeInTheDocument();
  expect(counter).toHaveStyle("color: red;");
});

test("It should be reset to 0 when the reset button is touched and also change the counter color to #FFE4C9.", async () => {
  renderComponent();

  const resetButton = screen.getByRole("button", {
    name: /reset/i,
  });

  expect(resetButton).toBeInTheDocument();

  const newValue = 0;

  await user.click(resetButton);

  const counter = screen.getByRole("heading", {
    name: String(newValue),
  });

  expect(counter).toBeInTheDocument();
  expect(counter).toHaveStyle("color: #FFE4C9;");
});
