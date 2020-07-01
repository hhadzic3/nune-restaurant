import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Chefs from './components/Chefs';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Menu from './components/Menu';
import About from './components/About';
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  const portfolioLinks = [
    {
      title: 'Pljeskavica',
      img: './img/pljeska.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 rostilj"
    },
    {
      title: 'Ćevapi',
      img: './img/cevapi.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 rostilj"
    },
    {
      title: 'Biftek',
      img: './img/biftek.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 rostilj"
    },
    {
      title: 'Plata',
      img: './img/plata.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 rostilj"
    },
    {
      title: 'Sudjukice',
      img: './img/sudjukice.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 rostilj"
    },
    {
      title: 'Kombinacija',
      img: './img/plata.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 rostilj"
    },
    {
      title: 'Teletina',
      img: './img/teletina.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 rostilj"
    },
    {
      title: 'Hamburger',
      img: './img/burger.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 rostilj"
    },
    {
      title: 'Lokacija',
      img: './img/ulica.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 radnja"
    },
    {
      title: 'Porodica',
      img: './img/team/ekipa.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 radnja"
    },
    {
      title: 'Otac i sin',
      img: './img/team/ekipa2.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 radnja"
    }
  ]

  const photos = [
    {
      title: 'Salem',
      img: './img/team/header.jpg',
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
    },
    {
      title: 'Edin',
      img: './img/team/ekipa2.jpg',
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
    },
    {
      title: 'Nihad',
      img: './img/team/ekipa.jpg',
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
    }
  ]

  const menu = [
    {
      type: 'rostilj',
      title: 'Cevapi 10',
      price: '10 KM',
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
    },
    {
      type: 'rostilj',
      title: 'Sudjukice - velika porcija',
      price: '9 KM',
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
    },
    {
      type: 'pice',
      title: 'Coca Cola',
      price: '3 KM',
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
    },
    {
      type: 'prilog',
      title: 'Kajmak',
      price: '3 KM',
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
    }
  ]

  return (
    <div className="App">
      <Header/>
      <About/>
      <Menu menu={menu} />
      <SimpleReactLightbox>
        <Gallery portfolioLinks={portfolioLinks} ></Gallery>
      </SimpleReactLightbox>
      <Chefs photos={photos}/>
      <Info/>
      <Contact  ></Contact>
      <Footer/>
    </div>
  );
}

export default App;
