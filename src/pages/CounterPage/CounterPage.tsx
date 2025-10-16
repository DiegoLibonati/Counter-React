import { useEffect, useRef, useState } from "react";

import { CounterPageProps } from "@src/entities/props";

import { theme } from "@src/styles/theme";

import "@src/pages/CounterPage/CounterPage.css";

export const CounterPage = ({ value }: CounterPageProps): JSX.Element => {
  const [valueCounter, setValueCounter] = useState<number>(value);
  const valueRef = useRef<HTMLHeadingElement | null>(null);

  const handleIncrease: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setValueCounter(valueCounter + 1);
  };

  const handleReset: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setValueCounter(0);
  };

  const handleDecrease: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setValueCounter(valueCounter - 1);
  };

  const checkColor = (): void => {
    if (valueCounter < 0) {
      valueRef.current!.style.color = theme.colors.red;
      return;
    } else if (valueCounter > 0) {
      valueRef.current!.style.color = theme.colors.green;
      return;
    }
    valueRef.current!.style.color = theme.colors.primary;
    return;
  };

  useEffect(() => {
    checkColor();
  }, [valueCounter]);

  return (
    <main className="main-counter">
      <section className="counter-wrapper">
        <article className="counter">
          <h1 className="counter__title">COUNTER APP</h1>
          <h2 ref={valueRef} className="counter__value">
            {valueCounter}
          </h2>
          <div className="counter__btns">
            <button
              type="button"
              className="counter__btn counter__increase"
              aria-label="increase"
              onClick={handleIncrease}
            >
              INCREASE
            </button>
            <button
              type="button"
              className="counter__btn counter__reset"
              aria-label="reset"
              onClick={handleReset}
            >
              RESET
            </button>
            <button
              type="button"
              className="counter__btn counter__decrease"
              aria-label="decrease"
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
