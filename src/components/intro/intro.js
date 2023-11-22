import React from "react";
import bg from "../../assets/Man-No-Background.png";
import { Link  } from "react-scroll";
import "./Intro.css";

const Intro = () => {
  return (
    <div>
      <section>
        <div className="introContant">
          <span className="hello">Olá,</span>
          <span className="introText">
            sou <span className="introName"> Maikon Schafranski,</span>
            <br />
            Desenvolvedor full stack
          </span>
          <p className="introPera">
            apaixonado pelas tecnologias de desenvolvimento front-end e back-end.
            Atualmente, sou estudante de <br /> Análise e Desenvolvimento de
            Sistemas na Faculdade Uniguairaca. Embora ainda não tenha
            experiência <br /> profissional na área, possuo bom conhecimento em
            React, Angular, TypeScript e Java Spring.
          </p>
         
        
            <button className="bnt"> <Link to="contact" smooth={true} duration={500}>Contrate-me </Link></button>
         
          
        </div>
     
        <img src={bg} alt="Profile" className="bg" />
      </section>
    </div>
  );
};

export default Intro;
