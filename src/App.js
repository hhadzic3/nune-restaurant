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
      classa: "col-sm-6 col-md-4 col-lg-4 breakfast"
    },
    {
      title: 'Cevapi',
      img: './img/pljeska.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 breakfast"
    },
    {
      title: 'Plata1',
      img: './img/pljeska.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 breakfast"
    },
    {
      title: 'Plata2',
      img: './img/pljeska.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 breakfast"
    },
    {
      title: 'Sudjukice',
      img: './img/pljeska.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 breakfast"
    },
    {
      title: 'Kombinacija',
      img: './img/pljeska.jpg',
      classa: "col-sm-6 col-md-4 col-lg-4 breakfast"
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
