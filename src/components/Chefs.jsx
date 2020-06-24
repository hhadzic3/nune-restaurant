import React from 'react';

export default ({photos}) => {
    return(
        <div id="team" className="text-center">
            <div className="overlay">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 section-title">
                <h2>Tradicija od 1966</h2>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                </div>
                <div id="row">
                {photos && photos.map(( {title , img, caption} , i) =>
                <div className="col-md-4 team" key={title}>
                    <div className="thumbnail">
                    <div className="team-img"><img src={img} alt="Tradicija-slika"/></div>
                    <div className="caption">
                        <h3> { title } </h3>
                        <p> { caption } </p>
                    </div>
                    </div>
                </div>
                )}
            </div>
            </div>
        </div>
        </div>
    )
}