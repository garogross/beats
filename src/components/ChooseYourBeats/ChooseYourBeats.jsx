import React from 'react'

import "./ChooseYourBeats.css"
import { visaCardImg } from '../../assets/images'

const ChooseYourBeats = () => {
  return (
     <div className='chooseYourBeats container'>
        <div className="chooseYourBeats__textBlock">
           <h2 className="defaultTitle chooseYourBeats__title">Choose your Beats</h2>
           <h2 className="defaultTitle chooseYourBeats__titleMob">Payments</h2>
              <p className="contentText chooseYourBeats__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
</p>
        </div>
        <div className="chooseYourBeats__imgBlock">
           <img src={visaCardImg} alt='visa card' className="chooseYourBeats__cardImg"/>
        </div>
     </div>
  )
}

export default ChooseYourBeats