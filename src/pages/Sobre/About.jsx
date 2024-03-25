import React from 'react';
import styles from "./About.module.css";
import MinhaImagem from '../../Imgs/Foto.jpg';

const About = ({ menuOpen }) => {
  return (
    <div className={`${styles.about} ${menuOpen ? styles.menuOpen : ''}`}>
      <h2> <span>Sobre mim </span> </h2>
      <div className={styles.container_about}>
        <p>
          Tenho 18 anos e estou cursando Engenharia da Computação na USF e Análise e Desenvolvimento de Sistemas na UNICSUL, ambos no 1º semestre. Sou formado em Técnico em Informática pela ETEC e tenho o ensino médio completo. Estou focado em aprender Java, React e Python para aprimorar minhas habilidades como desenvolvedor, buscando criar soluções inovadoras e impactantes. Atualmente, estou em busca de estágio na área de tecnologia para aplicar e expandir meus conhecimentos.
        </p>
        <div className={styles.container_IMG}>
          <img src={MinhaImagem} alt="Minha Imagem" className={styles.imagem} />
        </div>
      </div>
    </div>
  );
};

export default About;
