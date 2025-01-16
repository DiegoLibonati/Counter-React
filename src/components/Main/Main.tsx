import { useEffect, useRef, useState } from "react";

import { rootCss } from "../../constants/configCss";

interface MainProps {
  value: number;
}

export const Main = ({ value }: MainProps): JSX.Element => {
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
      valueRef.current!.style.color = rootCss.colors.red;
      return;
    } else if (valueCounter > 0) {
      valueRef.current!.style.color = rootCss.colors.green;
      return;
    }
    valueRef.current!.style.color = rootCss.colors.primary;
    return;
  };

  useEffect(() => {
    checkColor();
  }, [valueCounter]);

  return (
    <main>
      <section className="counter">
        <article className="counter__article">
          <h1>COUNTER APP</h1>
          <h2 ref={valueRef}>{valueCounter}</h2>
          <div className="counter__article__btns">
            <button
              type="button"
              aria-label="increase"
              onClick={handleIncrease}
            >
              INCREASE
            </button>
            <button type="button" aria-label="reset" onClick={handleReset}>
              RESET
            </button>
            <button
              type="button"
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
