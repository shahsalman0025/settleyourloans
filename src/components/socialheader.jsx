import React from 'react'
import googlePlay from '../assets/img/googleplay.png'
function SocialHeader() {
    return (
        <div className="socialmain">
{/* 
            <div className='comingsoon'>  <p>Now Available On </p> <button className='comingsoon-btn' onClick={()=>{
                    window.open('https://play.google.com/store/apps/details?id=com.settleLoans.app&pcampaignid=web_share', '_blank');

            }}><img src={googlePlay} alt="" /></button></div> */}
            <div></div>
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