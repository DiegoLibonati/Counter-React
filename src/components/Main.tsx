import { useState } from "react";
import { MainProps } from "../entities/entities";

export const Main = ({ value }: MainProps): JSX.Element => {
  const [valueCounter, setValueCounter] = useState<number>(value);

  const handleIncrease: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLElement;
    setValueCounter(valueCounter + 1);
    checkColor(
      valueCounter + 1,
      target.parentElement!.parentElement!.children[1] as HTMLElement
    );
  };

  const handleReset: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLElement;
    const children = target.parentElement!.parentElement!
      .children[1] as HTMLElement;
    setValueCounter(0);
    children.style.color = "white";
  };

  const handleDecrease: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLElement;
    setValueCounter(valueCounter - 1);
    checkColor(
      valueCounter - 1,
      target.parentElement!.parentElement!.children[1] as HTMLElement
    );
  };

  const checkColor = (n: number, valueObject: HTMLElement): void => {
    if (n < 0) {
      valueObject.style.color = "red";
      return;
    } else if (n > 0) {
      valueObject.style.color = "green";
      return;
    }
    valueObject.style.color = "white";
    return;
  };

  return (
    <main>
      <section className="section_container">
        <article className="section_container_article">
          <h1>COUNTER APP</h1>
          <h2>{valueCounter}</h2>
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
