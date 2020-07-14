import React from 'react';
import './App.css';
import Header from './components/home/Header';
import Footer from './components/home/Footer';
import Chefs from './components/home/Chefs';
import Contact from './components/home/Contact';
import Gallery from './components/home/Gallery';
import Info from './components/home/Info';
import Menu from './components/home/Menu';
import About from './components/home/About';
import SimpleReactLightbox from "simple-react-lightbox";
import Meni from "./data/meni.json"
import Tradition from "./data/tradition.json"
import G from "./data/gallery.json"

import { Route, Switch } from 'react-router-dom'
import Login from './components/login/Login'
/*
import Admin from './components/posts/Admin'
<Route path="/admin" component={Admin} />
*/        
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
