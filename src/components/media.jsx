import React from "react";
import AliceCarousel from 'react-alice-carousel';
import media3 from '../assets/img/media/media3.svg'
import media2 from '../assets/img/media/media2.png'
import media4 from '../assets/img/media/media4.svg'

function Media() {
  return (
    <div className="media_main">
      <div className="feature__section-box text-center pb-40">
        <h3 className="section-title title-anim pt-20 pb-20">In Media</h3>
      </div>
      <div className="media">
        <img src={media3} alt=""  style={{}}/>
        <img src={media2} alt="" />
        <img src={media4} alt="" />
      </div>
    </div>
  )
}

export default Media