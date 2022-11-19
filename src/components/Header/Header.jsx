import DefaultButton from "../Layout/DefaultButton/DefaultButton"

import './Header.css';
import {
    headerHeadphoneImg,
    headerPhoneImg,
    headerUserImg
} from "../../assets/images"

function Header() {
    return (
        <header className="header ">
            <div className="header__container container">
                <div className="header__textBlock">
                    <div className="header__textBlockContent">
                        <h1 className="header__title">Obtain Valuible Knowledge <span
                            className='header__span'>by </span>listening
                        </h1>
                        <p className="header__text contentText">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s
                        </p>
                        <DefaultButton className='header__btn'>Button</DefaultButton>
                    </div>
                </div>
                <div className="header__imgBlock">
                    <img src={headerPhoneImg} alt="phone" className="header__phoneImg"/>
                    <img src={headerUserImg} alt="user" className="header__userImg"/>
                    <img src={headerHeadphoneImg} alt="headphone" className="header__headphoneImg"/>
                </div>
                <div className="header__mobImgBlock">
                    <img src={headerUserImg} alt="user" className="header__mobImg" />
                </div>
            </div>
        </header>
    );
}

export default Header;
