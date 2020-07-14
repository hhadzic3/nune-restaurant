import React from 'react';

export default ({ menu }) => {
    return(
        
  <div id="restaurant-menu">
    <div className="section-title text-center center">
      <div className="overlay">
        <h2> Meni </h2>
        <hr/>
        <p>Standardni kvalitet naših ćevapčića, sudžukica ili pljeskavica, naše usluge, kao i svega ostalog iz raznovrsne
                        ponude, zadovoljne goste uvijek vraća kod Nuneta.</p>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="menu-section">
            <h2 className="menu-section-title">Jela sa roštilja </h2>
            <hr/>
            {menu && menu.map(( {type ,title , price , caption} , i) =>
            ( type === 'rostilj' ?
            (  
                <div className="menu-item" key={title}>
                <div className="menu-item-name"> {title} </div>
                <div className="menu-item-price"> {price} </div>
                <div className="menu-item-description"> {caption} </div>
              </div>
            ) : (<p key={title}> </p>)
            )
            )}
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className="menu-section">
            <h2 className="menu-section-title"> Prilozi & Salata </h2>
            <hr/>
            {menu && menu.map(( {type ,title , price , caption} , i) =>

            (type === 'prilog' ?
            (  
              <div className="menu-item" key={title}>
                <div className="menu-item-name"> {title} </div>
                <div className="menu-item-price"> {price} </div>
                <div className="menu-item-description"> {caption} </div>
              </div>
            ) : (<p key={title}> </p>)
            )
            )}
            
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="menu-section">
            <h2 className="menu-section-title"> Burgeri </h2>
            <hr/>
            {menu && menu.map(( {type ,title , price , caption} , i) =>
            ( type === 'burger' ?
            (  
              <div className="menu-item" key={title}>
                <div className="menu-item-name"> {title} </div>
                <div className="menu-item-price"> {price} </div>
                <div className="menu-item-description"> {caption} </div>
              </div>
            ) : (<p key={title}> </p>)
            )
            )}
          </div>
        </div>
        
        <div className="col-xs-12 col-sm-6">
          <div className="menu-section">
            <h2 className="menu-section-title"> Pića </h2>
            <hr/>
            {menu && menu.map(( {type ,title , price , caption} , i) =>
            ( type === 'pice' ?
            (  
              <div className="menu-item" key={title}>
                <div className="menu-item-name"> {title} </div>
                <div className="menu-item-price"> {price} </div>
                <div className="menu-item-description"> {caption} </div>
              </div>
            ) : (<p key={title}> </p>)
            )
            )}
          </div>
        </div>

      </div>
    </div>
  </div>
    )
}