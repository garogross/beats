import React from 'react'

import "./Footer.css"
import {
   logoImg,
   fbImg,
   twiterImg,
   instagramImg
} from '../../assets/images'
import DefaultButton from '../Layout/DefaultButton/DefaultButton'

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__container container">
            <div className="footer__main">
               <div className="footer__about">
                  <img src={logoImg} alt="" className="footer__logoImg" />
                  <p className="footer__text footer__aboutText">Lorem Ipsum is simply  text of the  printing and typesetting industry.</p>
               </div>
               <div className="footer__subscribeBlock">
                  <p className="footer__text footer__subscribeText">Subscribe to stay tuned for new web design and latest updates. Let's do it!</p>
                  <form action="" className="footer__subscribeForm">
                     <input type="email" placeholder='Enter yout email addres' className="footer__subscribeInput" />
                     <DefaultButton className='footer__subscribeBtn'>Button</DefaultButton>
                  </form>
               </div>
               <div className="footer__contactBlock">
                  <div className="footer__socBlock">
                     <h5 className="footer__title footerSocBlockTitle">Follow us</h5>
                     <div className="footer__socIcons">
                        <a href="#" className='footer__socIconLink'>
                           <img src={fbImg} alt="fb" className="footer__socIconImg" />
                        </a>
                        <a href="#" className='footer__socIconLink'>
                           <img src={twiterImg} alt="twiter" className="footer__socIconImg" />
                        </a>
                        <a href="#" className='footer__socIconLink'>
                           <img src={instagramImg} alt="instagram" className="footer__socIconImg" />
                        </a>
                     </div>
                  </div>
                  <div className="footer__callBlock">
                     <h5 className="footer__title footer__callTitle">Call us</h5>
                     <p className="footer__callBlockText">+1 800 854 36 80 </p>
                  </div>
               </div>
            </div>
            <div className="footer__links">
               <p className="footer__LinksItem footer__LinksItem_left">© 2022 All Rights Reserved</p>
               <a href="#" className="footer__LinksItem">Privacy Policy</a>
               <a href="#" className="footer__LinksItem">Terms of use</a>
               <a href="#" className="footer__LinksItem">Legal</a>
               <a href="#" className="footer__LinksItem">Site Map</a>
               <a href="#" className="footer__LinksItem footer__LinksItem_mob">Terms</a>
               <p className="footer__LinksItem footer__LinksItem_mob">© 2022</p>
               <a href="#" className="footer__LinksItem footer__LinksItem_mob">Privacy Policy</a>
            </div>
         </div>
      </footer>
   )
}

export default Footer