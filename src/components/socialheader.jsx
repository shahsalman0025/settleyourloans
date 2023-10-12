import React from 'react'
import coming from '../assets/img/coming.png'
function SocialHeader() {
    return (
        <div className="socialmain">

            <div className='comingsoon'>  <p>Coming Soon on</p> <img src={coming} alt="" /></div>
            <div className='header-social-icons'>
                <a href="https://www.youtube.com/@settleloans/"><i className='fab fa-youtube'></i></a>
                <a href="https://www.linkedin.com/company/settleloans/"><i className='fab fa-linkedin'></i></a>
                <a href="https://www.instagram.com/settleloans/?igshid=YmMyMTA2M2Y="><i className='fab fa-instagram'></i></a>
                <a href="https://www.facebook.com/people/SettleLoans/100089458940627/?mibextid=LQQJ4d"><i className='fab fa-facebook-square'></i></a>
            </div>
        </div>
    )
}

export default SocialHeader