import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import CounterPage from "@/pages/CounterPage/CounterPage";

type RenderPage = {
  container: HTMLElement;
};

const renderPage = (value = 0): RenderPage => {
  const { container } = render(<CounterPage value={value} />);
  return { container };
};

describe("CounterPage", () => {
  it("should render the main landmark with the correct aria-label", () => {
    renderPage();
    expect(screen.getByRole("main", { name: "Counter application" })).toBeInTheDocument();
  });

  it("should render the counter controls group with the correct aria-label", () => {
    renderPage();
    expect(screen.getByRole("group", { name: "Counter controls" })).toBeInTheDocument();
  });

  it("should render the 'Increase counter by 1' button", () => {
    renderPage();
    expect(screen.getByRole("button", { name: "Increase counter by 1" })).toBeInTheDocument();
  });

  it("should render the 'Reset counter to zero' button", () => {
    renderPage();
    expect(screen.getByRole("button", { name: "Reset counter to zero" })).toBeInTheDocument();
  });

  it("should render the 'Decrease counter by 1' button", () => {
    renderPage();
    expect(screen.getByRole("button", { name: "Decrease counter by 1" })).toBeInTheDocument();
  });

  it("should render the initial counter value from props", () => {
    renderPage(5);
    expect(screen.getByRole("heading", { name: "Current counter value: 5" })).toBeInTheDocument();
  });

  it("should render 0 as the default initial value", () => {
    renderPage();
    expect(screen.getByRole("heading", { name: "Current counter value: 0" })).toBeInTheDocument();
  });

  it("should increment the counter when clicking 'Increase counter by 1'", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole("button", { name: "Increase counter by 1" }));

    expect(screen.getByRole("heading", { name: "Current counter value: 1" })).toBeInTheDocument();
  });

  it("should decrement the counter when clicking 'Decrease counter by 1'", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole("button", { name: "Decrease counter by 1" }));

    expect(screen.getByRole("heading", { name: "Current counter value: -1" })).toBeInTheDocument();
  });

  it("should reset the counter to zero when clicking 'Reset counter to zero'", async () => {
    const user = userEvent.setup();
    renderPage(10);

    await user.click(screen.getByRole("button", { name: "Reset counter to zero" }));

    expect(screen.getByRole("heading", { name: "Current counter value: 0" })).toBeInTheDocument();
  });

  it("should accumulate multiple increments correctly", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole("button", { name: "Increase counter by 1" }));
    await user.click(screen.getByRole("button", { name: "Increase counter by 1" }));
    await user.click(screen.getByRole("button", { name: "Increase counter by 1" }));

    expect(screen.getByRole("heading", { name: "Current counter value: 3" })).toBeInTheDocument();
  });

  it("should reset to zero after incrementing several times", async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole("button", { name: "Increase counter by 1" }));
    await user.click(screen.getByRole("button", { name: "Increase counter by 1" }));
    await user.click(screen.getByRole("button", { name: "Reset counter to zero" }));

    expect(screen.getByRole("heading", { name: "Current counter value: 0" })).toBeInTheDocument();
  });

  it("should have aria-live='polite' on the counter value", () => {
    renderPage();
    const valueHeading = screen.getByRole("heading", { name: "Current counter value: 0" });
    expect(valueHeading).toHaveAttribute("aria-live", "polite");
  });

  it("should have aria-atomic='true' on the counter value", () => {
    renderPage();
    const valueHeading = screen.getByRole("heading", { name: "Current counter value: 0" });
    expect(valueHeading).toHaveAttribute("aria-atomic", "true");
  });
});
