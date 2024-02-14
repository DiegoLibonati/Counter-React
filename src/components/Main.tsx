import { useEffect, useRef, useState } from "react";
import { MainProps } from "../entities/entities";

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
      valueRef.current!.style.color = "red";
      return;
    } else if (valueCounter > 0) {
      valueRef.current!.style.color = "green";
      return;
    }
    valueRef.current!.style.color = "#FFE4C9";
    return;
  };

  useEffect(() => {
    checkColor();
  }, [valueCounter])

  return (
    <main>
      <section className="section_container">
        <article className="section_container_article">
          <h1>COUNTER APP</h1>
          <h2 ref={valueRef}>{valueCounter}</h2>
          <div className="section_container_article_btns">
            <button type="button" onClick={handleIncrease}>
              INCREASE
            </button>
            <button type="button" onClick={handleReset}>
              RESET
            </button>
            <button type="button" onClick={handleDecrease}>
              DECREASE
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};
