import React from 'react';
import { Link } from 'react-router-dom';

const Sobre = () => {
  return (
    <div className="site">
      <div className="site-content container">
        <br />
        <br />
        <br />
        <br />

        <h2 className="cursos-titulo section-title">SOBRE O CEDUP</h2>
        
        
        <article className="historia-container">
          <p className="content__p">
            O CEDUP "Perfeito Manoel de Aguiar" iniciou suas atividades no 1º Semestre de 2021, buscando proporcionar o desenvolvimento integral do estudante, respeitando valores éticos, morais e culturais, tornando-o conhecedor de sua realidade, crítico, responsável, competente, democrático, criativo e capaz de transformar a sociedade a partir do seu protagonismo.
          </p>
                
          <h3 className="historia-subtitulo"><strong>Missão</strong></h3>
          <p className="content__p">
            Assegurar um ensino de qualidade, garantindo o acesso, inclusão e a permanência dos alunos, formando cidadãos críticos e participantes, capazes de agir na transformação da sociedade.
          </p>

          <h3 className="historia-subtitulo"><strong>Filosofia</strong></h3>
          <p className="content__p">
            <q>Preparar o educando para o exercício da cidadania e para o mundo do trabalho, resgatando valores éticos, morais e culturais.</q>
          </p>
                               
          <h3 className="historia-subtitulo"><strong>Quem é Perfeito Manoel de Aguiar?</strong></h3>
                
          <div className="historia-content">
            <div className="historia-imagem">
              <img 
                className="img__historia"
                src="/imagens/historia/perfeito_manoel.png" 
                alt="Fotografia em preto e branco, que contém um homem branco com cabelos grisalhos em frente a uma cortina vestindo um paletó de cor clara por cima de uma camisa social escura com botões." 
              />
            </div>
            <div className="historia-texto">
              <p>Nascido em 12 de dezembro de 1892, em Itajaí/SC, sempre exerceu a função de lavrador. Quando tinha 20 anos de idade veio residir no Distrito de Bananal, hoje município de Guaramirim, na localidade do Bairro Avaí, onde aos 28 anos casou-se com Deartina Bernadina da Rocha, com a qual teve 13 filhos.</p>
              <p>Pessoa de boa índole, Perfeito Manoel de Aguiar, educou com muita austeridade seus filhos. Sempre cobrou deles muita honestidade em tudo o que fizessem. Pessoa religiosa esteve sempre envolvido com a igreja, fazendo parte dos turmeiros na construção da Igreja Matriz e da Capela Santos Anjos no Bairro Avaí. Já com idade avançada incentivou seus filhos a doarem uma área de terra para a construção de uma escola, pois a única existente ficava a 4 km de distância do bairro.</p>
              <p>A doação foi feita pelo seu filho Manoel Perfeito de Aguiar onde então foi criada a EEB Alfredo Zimmermann. Por sempre ter se envolvido com os problemas de sua comunidade, talvez tenha sido este o motivo de fazer dois de seus filhos caminharem na vida pública. Aurino Prefeito de Aguiar foi prefeito por dois mandatos no município de Rio das Antas/SC. José Perfeito de Aguiar, vereador, depois vice-prefeito e por último prefeito de Guaramirim por seis anos.</p>
              <p>Durante o seu mandato foi adquirido uma área de terra às margens da rodovia BR 280, onde se construiu o Parque Municipal de Eventos "Perfeito Manoel de Aguiar", que atendeu por muitos anos a comunidade de Guaramirim e aonde eram realizados de 02 em 02 anos a Feira Agroindustrial de Guaramirim. Terreno este onde agora se construiu o Centro de Educação Profissional. Os frutos de "Perfeito Manoel de Aguiar" continuam a serem colhidos no município de Guaramirim, visto que seus descendentes, netos e bisnetos, trabalharam e trabalham na educação dos cidadãos guaramirenses.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Sobre;