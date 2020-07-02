import React from 'react';

export default () => {
    return(
            
      <div id="footer">
      <div className="container text-center">
        <div className="col-md-4">
          <h3> Adresa </h3>
          <div className="contact-item">
            <p> Ferhadija 12, </p>
            <p> Sarajevo 71000, BiH </p>
          </div>
        </div>
        <div className="col-md-4">
          <h3> Radno vrijeme </h3>
          <div className="contact-item">
            <p> Ponedjeljak - Subota: 10:00 AM - 10:00 PM</p>
            <p> Nedjelja: 11:00 AM - 05:00 AM</p>
          </div>
        </div>
        <div className="col-md-4">
          <h3> Kontakt </h3>
          <div className="contact-item">
            <p>Telefon: +387 033/ 21 29 46</p>
            <p>Email: salem@company.com</p>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center copyrights">
        <div className="col-md-8 col-md-offset-2">
          <div className="social">
            <ul>
              <li><a href="https://www.facebook.com/cevabdzinicanune/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/explore/locations/493014535/cevabdzinica-nune?hl=hr" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
          <h5>&copy; <i>2020. Designed by <a href="https://harun-dev.netlify.app/" target="_blank" rel="noopener noreferrer">Harun Hadžić</a> </i> </h5>
        </div>
      </div>
    </div>
    )
}