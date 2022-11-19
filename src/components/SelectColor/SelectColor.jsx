import DefaultButton from "../Layout/DefaultButton/DefaultButton"

import {useState} from "react";
import './SelectColor.css';
import {
    selectBlackImg,
    selectBlueImg,
    selectGreenImg,
    selectWhiteImg
} from "../../assets/images"

function SelectColor() {
    const [color,setColor] = useState(selectBlackImg)

    const onColorChange = (color) => {
        setColor(color)
    }
    return (
        <div className='selectColor container'>
            <h2 className="selectColor__title defaultTitle">Choose your Beats</h2>
            <div className="selectColor__wrapper">
                <div className="selectColor__imgBlock">
                    <img src={color} alt="" className="selectColor__img selectColor__img_active"/>
                </div>
                <div className="selectColor__textBlock">
                    <h4 className="selectColor__productName">Beats Fit Pro</h4>
                    <p className="selectColor__productPrice">$199.99</p>
                    <ul className="selectColor__list">
                        <li className="selectColor__listItem contentText">. Flexible, secure-fit wingtips</li>
                        <li className="selectColor__listItem contentText">. Active Noise Cancelling (ANC) and
                            Transparency
                        </li>
                        <li className="selectColor__listItem contentText">. Up to 6 hours of listening time with ANC
                            on
                        </li>
                        <li className="selectColor__listItem contentText">. Autoplay/Pause connection via Apple H1
                            chip
                        </li>
                        <li className="selectColor__listItem contentText">. Flexible, secure-fit wingtips</li>
                        <li className="selectColor__listItem contentText">. Flexible, secure-fit wingtips</li>
                    </ul>
                    <div className="selectColor__colorBlock">
                        <h4 className="selectColor__colorText">4 colors</h4>
                        <div className="selectColor__colorSelects">
                            <div onClick={() => onColorChange(selectBlackImg)} className="selectColor__colorSelectItem black"></div>
                            <div onClick={() => onColorChange(selectWhiteImg)} className="selectColor__colorSelectItem white"></div>
                            <div onClick={() => onColorChange(selectGreenImg)} className="selectColor__colorSelectItem green"></div>
                            <div onClick={() => onColorChange(selectBlueImg)} className="selectColor__colorSelectItem blue"></div>
                        </div>
                    </div>
                    <DefaultButton className='selectColor__btn'>Button</DefaultButton>
                </div>
            </div>
        </div>
    );
}

export default SelectColor;
