import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";

export default function Gallery({ portfolioLinks }) {
    return(
      <div id="portfolio">
        <div className="section-title text-center center">
          <div className="overlay">
            <h2> Galerija </h2>
            <hr/>
            <p>Standardni kvalitet naših ćevapčića, sudžukica ili pljeskavica, naše usluge, kao i svega ostalog iz raznovrsne
                        ponude, zadovoljne goste uvijek vraća kod Nuneta.</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="categories">
              <ul className="cat">
                <li>
                  <ol className="type">
                    <li><a href="/#" data-filter="*" className="active">Sve</a></li>
                    <li><a href="/#" data-filter=".rostilj">Jela sa roštilja</a></li>
                    <li><a href="/#" data-filter=".radnja">Objekat i lokacija</a></li>
                  </ol>
                </li>
              </ul>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="row">
              <SRLWrapper>
            <div className="portfolio-items" >
            {portfolioLinks && portfolioLinks.map(( {title , img, classa} , i) =>
              <div className={classa} key={title}>
                <div className="portfolio-item">
                    <img src={img} className="img-responsive" alt={title}/>  
                </div>
              </div>
              )}
              </div>
          </SRLWrapper>
          </div>
        </div>
      </div>
  )
}

