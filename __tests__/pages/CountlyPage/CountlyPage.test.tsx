import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import type { RenderResult } from "@testing-library/react";
import type { CountlyPageProps } from "@/types/props";

import CountlyPage from "@/pages/CountlyPage/CountlyPage";

const renderPage = (props: Partial<CountlyPageProps> = {}): RenderResult => {
  const defaultProps: CountlyPageProps = {
    value: 0,
    ...props,
  };
  return render(<CountlyPage {...defaultProps} />);
};

describe("CountlyPage", () => {
  describe("rendering", () => {
    it("should render the page title", () => {
      renderPage();
      expect(screen.getByRole("heading", { name: "Countly", level: 1 })).toBeInTheDocument();
    });

    it("should render the initial counter value", () => {
      renderPage({ value: 5 });
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("5");
    });

    it("should render the increase button", () => {
      renderPage();
      expect(screen.getByRole("button", { name: "Increase counter by 1" })).toBeInTheDocument();
    });

    it("should render the reset button", () => {
      renderPage();
      expect(screen.getByRole("button", { name: "Reset counter to zero" })).toBeInTheDocument();
    });

    it("should render the decrease button", () => {
      renderPage();
      expect(screen.getByRole("button", { name: "Decrease counter by 1" })).toBeInTheDocument();
    });

    it("should render the counter controls group", () => {
      renderPage();
      expect(screen.getByRole("group", { name: "Counter controls" })).toBeInTheDocument();
    });

    it("should render the counter application landmark", () => {
      renderPage();
      expect(screen.getByRole("main", { name: "Counter application" })).toBeInTheDocument();
    });
  });

  describe("behavior", () => {
    it("should increment the counter when the increase button is clicked", async () => {
      const user = userEvent.setup();
      renderPage({ value: 0 });
      await user.click(screen.getByRole("button", { name: "Increase counter by 1" }));
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("1");
    });

    it("should decrement the counter when the decrease button is clicked", async () => {
      const user = userEvent.setup();
      renderPage({ value: 0 });
      await user.click(screen.getByRole("button", { name: "Decrease counter by 1" }));
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("-1");
    });

    it("should reset the counter to zero when the reset button is clicked", async () => {
      const user = userEvent.setup();
      renderPage({ value: 10 });
      await user.click(screen.getByRole("button", { name: "Reset counter to zero" }));
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("0");
    });

    it("should reflect multiple increments correctly", async () => {
      const user = userEvent.setup();
      renderPage({ value: 0 });
      const increaseBtn = screen.getByRole("button", { name: "Increase counter by 1" });
      await user.click(increaseBtn);
      await user.click(increaseBtn);
      await user.click(increaseBtn);
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("3");
    });

    it("should reflect multiple decrements correctly", async () => {
      const user = userEvent.setup();
      renderPage({ value: 0 });
      const decreaseBtn = screen.getByRole("button", { name: "Decrease counter by 1" });
      await user.click(decreaseBtn);
      await user.click(decreaseBtn);
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("-2");
    });

    it("should reset from a negative value to zero", async () => {
      const user = userEvent.setup();
      renderPage({ value: -5 });
      await user.click(screen.getByRole("button", { name: "Reset counter to zero" }));
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("0");
    });

    it("should update the aria-label on the counter value heading", async () => {
      const user = userEvent.setup();
      renderPage({ value: 0 });
      await user.click(screen.getByRole("button", { name: "Increase counter by 1" }));
      expect(
        screen.getByRole("heading", { name: "Current counter value: 1", level: 2 })
      ).toBeInTheDocument();
    });
  });

  describe("color", () => {
    it("should set black color when initial value is zero", () => {
      renderPage({ value: 0 });
      const valueHeading = screen.getByRole("heading", { level: 2 });
      expect(valueHeading).toHaveStyle({ color: "var(--color-black)" });
    });

    it("should set green color when initial value is positive", () => {
      renderPage({ value: 3 });
      const valueHeading = screen.getByRole("heading", { level: 2 });
      expect(valueHeading).toHaveStyle({ color: "var(--color-green)" });
    });

    it("should set red color when initial value is negative", () => {
      renderPage({ value: -3 });
      const valueHeading = screen.getByRole("heading", { level: 2 });
      expect(valueHeading).toHaveStyle({ color: "var(--color-red)" });
    });

    it("should change to green color after incrementing from zero", async () => {
      const user = userEvent.setup();
      renderPage({ value: 0 });
      await user.click(screen.getByRole("button", { name: "Increase counter by 1" }));
      expect(screen.getByRole("heading", { level: 2 })).toHaveStyle({
        color: "var(--color-green)",
      });
    });

    it("should change to red color after decrementing below zero", async () => {
      const user = userEvent.setup();
      renderPage({ value: 0 });
      await user.click(screen.getByRole("button", { name: "Decrease counter by 1" }));
      expect(screen.getByRole("heading", { level: 2 })).toHaveStyle({ color: "var(--color-red)" });
    });

    it("should change to black color after resetting from a positive value", async () => {
      const user = userEvent.setup();
      renderPage({ value: 5 });
      await user.click(screen.getByRole("button", { name: "Reset counter to zero" }));
      expect(screen.getByRole("heading", { level: 2 })).toHaveStyle({
        color: "var(--color-black)",
      });
    });

    it("should change to black color after resetting from a negative value", async () => {
      const user = userEvent.setup();
      renderPage({ value: -5 });
      await user.click(screen.getByRole("button", { name: "Reset counter to zero" }));
      expect(screen.getByRole("heading", { level: 2 })).toHaveStyle({
        color: "var(--color-black)",
      });
    });
  });
});
