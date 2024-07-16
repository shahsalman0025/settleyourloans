import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/custom-animation.css";
import "./assets/css/slick.css";
import "./assets/css/nice-select.css";
import "./assets/css/flaticon.css";
import "./assets/css/swiper-bundle.css";
import "./assets/css/meanmenu.css";
import "./assets/css/font-awesome-pro.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/spacing.css";
import "./assets/css/style.css";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Home from "./Screens/Home";
import DebtFree from "./Screens/Services/DebtFree";
import { Footer } from "./components/Footer";
import { FooterTwo } from "./components/FooterTwo";
import NotFound from "./Screens/404";
import Whatsapp from "./Screens/Utils/Whatsapp";
import ServiceSlug from "./Screens/Services/ServiceSlug";
import Thanks from "./Screens/Thanks";
import Data from "./Screens/Admin/Data";
import HomeForm from "./Screens/Admin/HomeForm";
import ContactForm from "./Screens/Admin/ContactForm";
import Login from "./Screens/Admin/Login";
import ContactScreen from "./Screens/ContactScreen";
import About from "./Screens/About";
import Blogs from "./Screens/Blogs/Blogs";
import BlogSlug from "./Screens/Blogs/BlogSlug";
import Error from "./Screens/Error";
import Modal from "./components/Modal";
import NewBlogs from "./Screens/Blogs/NewBlogs";
import FAQ from "./Screens/FAQ";
import Banks from "./components/banks";
import AppModal from "./Screens/Modals/AppModal";
function App() {
  return (
 <>
 
 <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/form" element={<Modal />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactScreen />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/blog/:slug" element={<BlogSlug />}></Route>
          <Route path="/service/:slug" element={<ServiceSlug />}></Route>
          <Route element={<Thanks />} path="/thanks/:formId"></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={ <Data />}></Route>
          <Route path="/admin/home" element={ <HomeForm />}></Route>
          <Route path="/admin/contact" element={<ContactForm />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/thanks" element={<Thanks />}></Route>
        </Routes>
        <FooterTwo />
      </Router>
    </div>
  
    {/* <AppModal/> */}

 </>
  );
}

export default App;
