import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./modal.css";
import ModalImg from "./assets/AppModal.webp";
import Close from "./assets/Close.svg";
const customStyles = {
  content: {
    // display:"flex",
    // justifyContent: "center",
    // alignItems: "center",
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
};

export default function AppModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);
useEffect(()=>{
    if(!sessionStorage.getItem("istTime")){
      setIsOpen(true)
    }else{
      setIsOpen(false)
    }
},[])


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
    sessionStorage.setItem("istTime",false)

  }

  function closeModal() {
    sessionStorage.setItem("istTime",false)
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={"AppModal"}
      >
        <div className="AppModal-header">
          <button onClick={closeModal} className="close">
            <img src={Close} alt="" />
          </button>
        </div>

        <img src={ModalImg} alt="" />
        <div className="AppModal-footer">
        <div
          className="slider__btn wow  mt-30"
          data-wow-duration=".9s"
          data-wow-delay="1.1s"
        >
          <button onClick={()=>{    window.open('https://play.google.com/store/apps/details?id=com.settleLoans.app&pcampaignid=web_share', '_blank');
}} className="main-btn tp-btn-hover alt-color" to="/contact">
            <span>Download Now From PlayStore</span>
            <b />
          </button>
        </div>
        </div>
        
      </Modal>
    </div>
  );
}
