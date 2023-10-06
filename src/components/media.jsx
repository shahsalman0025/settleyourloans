import React from "react";
import AliceCarousel from 'react-alice-carousel';
import media3 from '../assets/img/media/media3.png'
import media2 from '../assets/img/media/media2.png'
import media4 from '../assets/img/media/media4.svg'

function Media() {
  return (
    <div className="media_main">
      <div className="feature__section-box  pb-40">
        <h4 className="section-subtitle title-anim">You stay in control, we do the work for you.</h4>
        <h3 className="section-title title-anim pt-20 pb-20">Media</h3>
      </div>
      <div className="media">
        <img src={media3} alt="" />
        <img src={media2} alt="" />
        <img src={media4} alt="" />
      </div>
    </div>
  )
}

export default Media