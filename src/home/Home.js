import React, { useContext } from "react";

import "./Home.css";
import Hackatons from "../hackaton/Pages/Hacktons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../shared/context/auth-context";


const Home = () => {
  const auth = useContext(AuthContext);

//   document.documentElement.style.setProperty('--scrollbar-thumb-color', !auth.isAdmin ? '#87CEEB' : '#C99C6E');

  return (
    <>
      <Link to="/">
        <img src="elements/logo_white.svg" alt="" className="Logowhite" />
      </Link>
      <div id="home1">
        <div id={auth.isAdmin ? "home2-admin" : "home2"}>
        <h1 className="where" style={!auth.isAdmin ? { color: '#FFDCBA' } : { color: '#00A8E8' }}>Where Innovation </h1>
          <h1 className="meets">Meets Determination</h1>
          <p className="p1">
            "Join a Global Community of Innovators. SaharaBytes hosts hackathons
            that ignite creativity,
          </p>
          <p className="p2">
            foster collaboration, and drive real-world solutions. Dive in,
            compete, and shape the future with us."
          </p>
          <button className="button_home" onClick={() => window.location.href = 'mailto:StoonProduction@gmail.com'}>
            <h2 className="button_home_1" style={!auth.isAdmin ? { color: '#4D3223' } : { color: '#0185B7' }}>For Hosting</h2>
            <h2 className="button_home_2" style={!auth.isAdmin ? { color: '#4D3223',backgroundColor: "#FFDCBA" } : { color: '#0185B7',backgroundColor: "#87CEEB" }}>Contact us</h2>
            {/* <img src="elements/arrow.svg" alt="" className="arrow"/> */}
            <img src={!auth.isAdmin ? "elements/arrow.svg" : "elements/arrow_bleu.svg"} alt="" className="arrow"/>
          </button>

          <ul className="icons_home">
            <li>
              {" "}
              <img src="elements/home/Instagram.svg" alt="" />
            </li>

            <li>
              {" "}
              <img src="elements/home/twiiter.svg" alt="" />
            </li>
            <li>
              {" "}
              <img src="elements/home/Facebook.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="article_index">
        <div id="sahara">sahara</div>
      </div>
      {auth.isLoggedIn&&<Hackatons />}
    </>
  );
};

export default Home;
