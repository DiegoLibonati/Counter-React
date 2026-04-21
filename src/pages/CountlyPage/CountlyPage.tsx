import { useEffect, useRef, useState } from "react";

import type { JSX } from "react";
import type { CountlyPageProps } from "@/types/props";

import "@/pages/CountlyPage/CountlyPage.css";

const CountlyPage = ({ value }: CountlyPageProps): JSX.Element => {
  const [valueCounter, setValueCounter] = useState(value);
  const valueRef = useRef<HTMLHeadingElement | null>(null);

  const handleIncrease: React.MouseEventHandler<HTMLButtonElement> = () => {
    setValueCounter(valueCounter + 1);
  };

  const handleReset: React.MouseEventHandler<HTMLButtonElement> = () => {
    setValueCounter(0);
  };

  const handleDecrease: React.MouseEventHandler<HTMLButtonElement> = () => {
    setValueCounter(valueCounter - 1);
  };

  const checkColor = (): void => {
    if (valueCounter < 0) {
      valueRef.current!.style.color = "var(--color-red)";
      return;
    } else if (valueCounter > 0) {
      valueRef.current!.style.color = "var(--color-green)";
      return;
    }
    valueRef.current!.style.color = "var(--color-black)";
    return;
  };

  useEffect(() => {
    checkColor();
  }, [valueCounter]);

  return (
    <main className="main-countly" aria-label="Counter application">
      <section className="countly-wrapper">
        <article className="countly">
          <h1 className="countly__title">Countly</h1>
          <h2
            ref={valueRef}
            className="countly__value"
            aria-live="polite"
            aria-atomic="true"
            aria-label={`Current counter value: ${valueCounter}`}
          >
            {valueCounter}
          </h2>
          <div className="countly__btns" role="group" aria-label="Counter controls">
            <button
              type="button"
              className="countly__btn countly__increase"
              aria-label="Increase counter by 1"
              onClick={handleIncrease}
            >
              INCREASE
            </button>
            <button
              type="button"
              className="countly__btn countly__reset"
              aria-label="Reset counter to zero"
              onClick={handleReset}
            >
              RESET
            </button>
            <button
              type="button"
              className="countly__btn countly__decrease"
              aria-label="Decrease counter by 1"
              onClick={handleDecrease}
            >
              DECREASE
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default CountlyPage;
