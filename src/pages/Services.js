import React from 'react';
import Header from "../Accueil/Header";
import Presentation_2 from "../Services/Presentation_2";
import Etapes from "../Services/Etapes";
import TextPhoto_2 from "../Services/TextPhoto_2";
import Staff from "../Services/Staff";
import TextPhoto_4 from "../Services/TextPhoto_4";
import TextPhoto_5 from "../Services/TextPhoto_5";
import Footer from "../Accueil/Footer";



const Services = () =>{
  return (
      <div>
          <div id="projets">

          </div>
      <Presentation_2/>
       <TextPhoto_4/>
          <div id ="gestion-constru">
      <TextPhoto_2/>
          </div>
      <Etapes/>
      <Staff/>
      <TextPhoto_5/>
      <Footer/>


     </div>

  );
};

export default Services;