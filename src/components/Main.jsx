import { useState } from 'react';

export const Main = (props) => {

    const [value, setValue] = useState(props.value)

    const handleIncrease = (e) => {
      setValue(value + 1)
      checkColor(value + 1, e.target.parentElement.parentElement.children[1])
    }
  
    const handleReset = (e) => {
      setValue(0)
      e.target.parentElement.parentElement.children[1].style.color = "white";
    }
  
    const handleDecrease = (e) => {
      setValue(value - 1)
      checkColor(value - 1, e.target.parentElement.parentElement.children[1])
    }

    const checkColor = (n, valueObject) => {

        if (n < 0){
            valueObject.style.color = "red";
        } else if (n > 0){
            valueObject.style.color = "green";
        } else if (n === 0){
            valueObject.style.color = "white";
        }
    }

  return (
    <>
    <main>
        <section className='section_container'>
            <article className='section_container_article'>
                <h1>COUNTER APP</h1>
                <h2>{value}</h2>
                <div className='section_container_article_btns'>
                    <button type="button" onClick={handleIncrease}>INCREASE</button>
                    <button type="button" onClick={handleReset}>RESET</button>
                    <button type="button" onClick={handleDecrease}>DECREASE</button>
                </div>
            </article>
        </section>
    </main>
    </>
  )
}
