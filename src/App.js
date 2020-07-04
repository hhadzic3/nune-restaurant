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
import Meni from "./data/meni.json"
import Tradition from "./data/tradition.json"
import G from "./data/gallery.json"

import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'

function App() {
  const portfolioLinks = G.gallery;
  const photos = Tradition.t;
  const menu = Meni.meni;

  return (
    <div className="App">
      <Switch>
          <Route path="/login" component={Login} />
          
          <Route exact path="/">
            <Header/>
            <About/>
            <Menu menu={menu} />
            <SimpleReactLightbox>
              <Gallery portfolioLinks={portfolioLinks} ></Gallery>
            </SimpleReactLightbox>
            <Chefs photos={photos}/>
            <Info/>
            <Contact></Contact>
            <Footer/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
