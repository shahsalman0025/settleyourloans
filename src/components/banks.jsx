import React from "react";
import "../assets/css/banks.css";
import Header from "./Header";
import SocialHeader from "./socialheader";
import icici from "../assets/img/banks/icici.jpeg";
import axis from "../assets/img/banks/axis.jpeg";
import hdfc from "../assets/img/banks/hdfc.jpeg";
import idbi from "../assets/img/banks/idbi.jpeg";
import indusland from "../assets/img/banks/indusland.png";
import kotak from "../assets/img/banks/kotak.png";
import rbl from "../assets/img/banks/rbl.jpeg";
import baroda from "../assets/img/banks/baroda.png";
import state from "../assets/img/banks/state.jpeg";
import yes from "../assets/img/banks/yes.png";

function Banks (){
    return(
        <>
        <div className="banks-bg">
        <div className="banks">
            <div className="bank-span">
                <h3>We have effectively assested our <br />
                clients in achieving settlements <br /> 
                from</h3>
            </div>
            </div>
            <div className="bank-logos">
                <img src={yes} alt="" style={{width: 200, height: 100}}/>
                <img src={state} alt="" style={{width: 200, height: 100}}/>
                <img src={baroda} alt="" style={{width: 200, height: 100}}/>
                <img src={rbl} alt="" style={{width: 200, height: 100}}/>
                <img src={kotak} alt="" style={{width: 200, height: 100}}/>
                <img src={indusland} alt="" style={{width: 200, height: 100}}/>
                <img src={idbi} alt="" style={{width: 200, height: 100}}/>
                <img src={hdfc} alt="" style={{width: 200, height: 100}}/>
                <img src={axis} alt="" style={{width: 200, height: 100}}/>
                <img src={icici} alt="" style={{width: 200, height: 100}}/>
            </div>
        
            </div>
        
        </>
    )
}
export default Banks;