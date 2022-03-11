import React from 'react';
import './helpedPeople.css';

const HelpedPeople = () => {
    return(
        <>
            <div className="truck">
                    {/* <img src="https://i.ibb.co/Ns235Px/samantha-gades-Bl-Ih-Vf-Xbi9s-unsplash.jpg" /> */}
            </div>
            <h2>How We Helped Industries</h2>
            <div className="card">
                <img src="https://i.ibb.co/Ns235Px/samantha-gades-Bl-Ih-Vf-Xbi9s-unsplash.jpg"/>
                <h4 className="cardHead">
                Ce mot me paraît 
                </h4>
            </div>
            <div className="card">
                <img src="https://i.ibb.co/Ns235Px/samantha-gades-Bl-Ih-Vf-Xbi9s-unsplash.jpg"/>
                <h4 className="cardHead">
                Ce mot me paraît 
                </h4>
            </div>
            <div className="card">
                <img src="https://i.ibb.co/Ns235Px/samantha-gades-Bl-Ih-Vf-Xbi9s-unsplash.jpg"/>
                <h4 className="cardHead">
                Ce mot me paraît 
                </h4>
            </div>
            {/* image left deccription right */ }
            <div className="tileContainer">
                    <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                        <div className="media">
                            <div className="media-left">
                                <img src="https://i.ibb.co/9gX7y3J/jose-vazquez-Q5-RBHz9cu1-A-unsplash.jpg" className="media-object"/>
                            </div>
                            <div className="media-body">
                                <h2 className="mediaHeading">Formerly the officers of the general staf</h2>
                                <h5 className="center">Logistique: Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière.
                                        ogistique: Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière  
                                </h5>
                            </div>
                        </div> 
                    </div>           
                </div>
        </>
        )
    }
    
export default HelpedPeople;