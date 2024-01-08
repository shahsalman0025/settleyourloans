import React from "react";
import AliceCarousel from "react-alice-carousel";
import media1 from "../assets/img/media/midday.jpg";
import media5 from "../assets/img/media/mint.jpg";
import media3 from "../assets/img/media/media3.svg";
import media2 from "../assets/img/media/media2.png";
import media4 from "../assets/img/media/media4.svg";
import media6 from "../assets/img/media/Medium.png";
import { Link } from "react-router-dom";

function Media() {
  return (
    <div className="media_main">
      {/* <div class="feature__section-box text-center pb-40">
        <h4 class="section-subtitle title-anim">
          You stay in control, we do the work for you.
        </h4>
      </div> */}

      <div className="media">
        <a
          href="https://www.entrepenuerstories.com/latest/settle-loans-settle-life/"
          target="_blank"
        >
          <img src={media3} alt="" />
        </a>
        <a
          href="https://www.thedailybeat.in/settle-loans-settle-life/ "
          target="_blank"
        >
          <img src={media2} alt="" />
        </a>

        {/* <img src={media3} alt="" /> */}

        <a href="https://yourstory.com/companies/settleloans" target="_blank">
        
        <img src={media4} alt="" />
          </a>
        
        <img src={media1} alt="" />
        <img src={media5} alt="" />
        <a href="https://medium.com/@settleloans" target="_blank">
          <img src={media6} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Media;
