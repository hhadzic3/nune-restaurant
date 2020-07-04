import React from 'react';


export default () => {
    return(
        <div> 
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                <div className="container"> 
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                    <a className="navbar-brand page-scroll" href="#page-top">Nune</a> </div>
                
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#about" className="page-scroll">O nama</a></li>
                        <li><a href="#restaurant-menu" className="page-scroll">Meni</a></li>
                        <li><a href="#portfolio" className="page-scroll">Galerija</a></li>
                        <li><a href="#team" className="page-scroll">Tradicija</a></li>
                        <li><a href="#call-reservation" className="page-scroll">Kontakt</a></li>
                        <li><a href="/login" className="page-scroll">Prijava</a></li>
                    </ul>
                </div>
                </div>
            </nav>
            <header id="header">
                <div className="intro">
                <div className="overlay">
                    <div className="container">
                    <div className="row">
                        <div className="intro-text">
                        <h1> Nune </h1>
                        <p> Ćevabdžinica </p>
                        <a href="#about" className="btn btn-custom btn-lg page-scroll">Saznajte više</a> </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </div>
    )
}