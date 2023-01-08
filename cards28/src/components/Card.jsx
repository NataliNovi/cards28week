import './Card.css';
import { useState } from 'react';
export default function Card(props) {

    console.log(props.price, "drawing");

    const {price, color, colorLimit, speed, isActive, onButtonClick} = props;

    console.log(props.color);

    const [buttonText, setButtonText] = useState("BUY NOW");
    //buttonText - это массив из двух элементов (и мы проводим его деструктуризацию):
    //console.log(buttonText);
    //"BUY NOW" и функции, которая меняет текст и перерисоввывет компонент
    //можно переписать иначе:

    /* 
    const stateArray = useState("BUY NOW");
    const buttonText = stateArray[0];
    const setButtonText = stateArray[1]; */

    //const [isActive, setIsActive] = useState(false); - удаляем, тк нам нужно управлять компонентами сверху, а не сами компоненты чтобы управляли собой.

    let classNameCard = "card";
    classNameCard += ' card_' + color;

    let classNameLimit = "limit";
    classNameLimit += ' limit_' + colorLimit;



    if (isActive) {
        classNameCard += '  card_active';
    }

    function onClick(){
        /*setButtonText("Перейти в корзину");
        setIsActive(true);*/

        /*if (!isActive) {
            setButtonText("To basket");
        }
        else {
            setButtonText("BUY NOW")
        }*/

        //setIsActive(!isActive); - убираем и пишем:
        onButtonClick(color);

    }
    return (
        <div className='container'>
    <div onClick={onClick} className={classNameCard}>
        <header className={classNameLimit}>Безлимитный {price}</header>
        <div className='money'> <span className="price"> {price} </span> <span className='month'>руб/мес</span></div>
        <div className='speed'>До {speed} Мбит/сек</div>
        <footer className='footer'>Объём включенного трафика не ограничен</footer>
        </div>
    </div>
    )
}



//<button onClick={onClick}>{isActive ? "To Basket" : "Buy Now"}</button>