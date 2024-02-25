
import logo from './assets/logo.png'
import React, {useState , useEffect} from "react";
import "./Nav.css";

function Nav() {
    const[show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src={logo}
          alt="logo"
        />

        <img
          className="nav__avatar"
          src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
          alt="avtr"
        />
      </div>
    </div>
    
  );
}

export default Nav;
