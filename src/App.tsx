import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles.css';
import banner_image from './assets/Black_Pink.png';
import Testimonials from './components/Testimonials';
import profile_image from '/perfil.png';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <div className='banner'>
        <img src={banner_image} alt="Banner Principal" />
      </div>
      <Navbar />
      <div className="container">
      </div>
      <div>
        <section id="about" className="about-agency dark">
          <h2>Sobre Nossa Agência</h2>
          <p>A Agência de Desenvolvimento Web e Aplicativos é especializada em fornecer soluções digitais personalizadas para empresas de todos os tamanhos. Nosso compromisso com a excelência e a inovação nos permite oferecer resultados excepcionais aos nossos clientes.</p>
        </section>

        <section id="portfolio" className="portfolio dark">
          <h2>Portfólio de Projetos</h2>
          Veja alguns dos nossos projetos mais recentes. Clique <a href="/Projects">aqui</a> para ver mais.
        </section>

        <section id="founders" className='founders dark'>
          <h2>Conheça os Fundadores</h2>
          <div className="founder-profile">
            <div className="profile_image">
              <img src={profile_image} alt="Sergio Alves Barbosa" />
            </div>
            <div className="founder-info">
              <h3>Sergio Alves Barbosa</h3>
              <p>Desenvolvedor Web Full Stack</p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials dark">
          <h2>Depoimentos de Clientes</h2>
          <Testimonials />
        </section>

        <section id="services" className="services dark">
          <h2>Nossos Serviços</h2>
          <p>Oferecemos uma ampla gama de serviços para atender às necessidades de nossos clientes. Desde a criação de sites até o desenvolvimento de aplicativos, nossa equipe de especialistas está pronta para ajudar a levar o seu projeto para o próximo nível.</p>
        </section>

        <section id="contact" className="cta dark">
          <h2>Entre em Contato Conosco</h2>
          <p>Estamos prontos para ajudar a levar o seu projeto para o próximo nível. Entre em contato conosco hoje mesmo para obter uma consulta gratuita.</p>
          {/* Ícones das redes sociais */}
          <div className='socialIcons'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://api.whatsapp.com/send?phone=+5585999924744" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a> {/* Substitua SEUNUMERO pelo seu número de telefone do WhatsApp */}
          </div>
        </section>
      </div>
      <Footer />
    </Router>
  );
}

export default App;