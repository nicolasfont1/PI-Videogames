import style from "./LandingPage.module.css";
import LandingKeyhole from "../../Resources/LandingKeyhole.png";
import { Link } from "react-router-dom";
import { getAllHomepage, getApiGenres } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const LandingPage = () => {
   const dispatch = useDispatch();
   const requestGames = () => { dispatch(getAllHomepage()) }
   const requestGenres = () => { dispatch(getApiGenres()) }

   useEffect(() => {
      requestGames();
      requestGenres();
   })

   return (
      <div className={style.pageHolder}>
         <div className={style.titleDiv}>
            <h4>THE</h4>
            <h1>VIDEOGAME</h1>
            <h2>LIBRARY</h2>
         </div>
         <div className={style.keyholeDiv}>
            <Link to="/home" className={style.link}>
               <img className={style.keyholeImage} src={LandingKeyhole} />
            </Link>
         </div>
         <div className={style.landingInfoDiv}>
            <h6>The Videogame Library is a proyect made for the <span>soyHenry</span> bootcamp.</h6>
            <h6>Background image taken from <span>Planet of Lana</span>.</h6>
         </div>
      </div>
   )
};

export default LandingPage