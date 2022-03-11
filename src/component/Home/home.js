import React from 'react';
import HomeHeader from './homeHeader';
import HelpedPeople from './helpedPeople';
import './home.css';

const Home = () => {
    return(
        <>        
            <HomeHeader/>
            <div className="mainContainer">
                <div className="mainTilecontainer">
                    {/* text on main image */}
                    <div className="heading">
                        <h1 className="text-center"> supply chain management and supply chain engineering that plans</h1> 
                        <h5 className="subHeading">In military science, logistics is concerned with maintaining army supply lines while disrupting those of the enemy, since an armed force without resources and transportation is defenseless. Military logistics was already practiced in the ancient world and as the modern military has a significant need for logistics solutions, advanced implementations have been developed. In military logistics, logistics officers manage how and when to move resources to the places they are needed.</h5>
                    </div>
                </div>
                {/* four icon section */}
                <div className="tileConatainerIcon">
                    <div className=" col-xl-12 row">
                        <div className="column" id="one">Box 1</div>
                        <div className="column" id="two">Box 2</div>
                        <div className="column" id="three">Box 3</div>
                        <div className="column" id="four">Box 3</div>
                    </div>   
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
                                <button className="btn btn-success">Book Now</button>
                            </div>
                        </div> 
                    </div>           
                </div>
                {/* truck image */}
                <div className="truck">
                    {/* <img src="https://i.ibb.co/Ns235Px/samantha-gades-Bl-Ih-Vf-Xbi9s-unsplash.jpg" /> */}
                </div>

                {/* card images */}
                <div className="cardConatainer">
                    <div className="card">
                        <img src="https://i.ibb.co/Ns235Px/samantha-gades-Bl-Ih-Vf-Xbi9s-unsplash.jpg"/>
                        <h4 className="cardHead">
                        Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans
                        </h4>
                        <h5 className="cardSubHead">Logistique: Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière.
                            ogistique: Ce mot me paraît être tout-à-fait nouveau,  
                        </h5>
                    </div>
                    <div className="card">
                        <img src="https://i.ibb.co/Ns235Px/samantha-gades-Bl-Ih-Vf-Xbi9s-unsplash.jpg"/>
                        <h4 className="cardHead">
                        Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans
                        </h4>
                        <h5 className="cardSubHead">Logistique: Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière.
                            ogistique: Ce mot me paraît être tout-à-fait nouveau,  
                        </h5>
                    </div>
                    <div className="card">
                        <img src="https://i.ibb.co/Ns235Px/samantha-gades-Bl-Ih-Vf-Xbi9s-unsplash.jpg"/>
                        <h4 className="cardHead">
                        Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans
                        </h4>
                        <h5 className="cardSubHead">Logistique: Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière.
                            ogistique: Ce mot me paraît être tout-à-fait nouveau,  
                        </h5>
                    </div>
                    <div className="card">
                        <img src="https://i.ibb.co/Ns235Px/samantha-gades-Bl-Ih-Vf-Xbi9s-unsplash.jpg"/>
                        <h4 className="cardHead">
                        Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans
                        </h4>
                        <h5 className="cardSubHead">Logistique: Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière.
                            ogistique: Ce mot me paraît être tout-à-fait nouveau,  
                        </h5>
                    </div>
                </div>
                {/* truck image */}
                <div className="truck">
                    {/* <img src="https://i.ibb.co/Ns235Px/samantha-gades-Bl-Ih-Vf-Xbi9s-unsplash.jpg" /> */}
                </div>

                {/* image right deccription left */ }
                <div className="tileContainer">
                    <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                        <div className="media">
                            <div className="media-right">
                                <img src="https://i.ibb.co/9gX7y3J/jose-vazquez-Q5-RBHz9cu1-A-unsplash.jpg" className="media-object"/>
                            </div>
                            <div className="media-body">
                                <h2 className="mediaHeading">Formerly the officers of the general staf</h2>
                                <h5 className="center">Logistique: Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière.
                                        ogistique: Ce mot me paraît être tout-à-fait nouveau, car je ne l'avais encore vu nulle part dans la littérature militaire. … il paraît le faire dériver du mot logis, étymologie singulière  
                                </h5>
                                <button className="btn btn-success">Book Now</button>
                            </div>
                        </div> 
                    </div>           
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
                <HelpedPeople/>
            </div>
   
        </>
    )
}

export default Home;