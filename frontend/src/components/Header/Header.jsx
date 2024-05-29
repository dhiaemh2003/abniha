import BannerImg from '../../assets/pixlr-image-generator-999ab294-921e-494e-ba64-a2d75037846b (1).png'
import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className='header'>
             <div>
       <h1>نحو طريق اسهل في بيع مواد البناء</h1>
       <p>مرحبا بك,استمتع بتجربة رهيبة في عالم مواد البناء  
       <br/>
       لا تضيع فرصتك
       </p>
       <button> تسوق الان</button>
       </div>
            <img className='bb' src={BannerImg} alt="" />
        </div>
    )
}

export default Header
