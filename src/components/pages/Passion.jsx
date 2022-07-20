import React, { useEffect } from "react";
import "./css/work.css";
import Aos from "aos";
import "aos/dist/aos.css";
import information from "./information";

function Passion(props){

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
    switch (props.want) {
        case 'raceCars':
            return(
                <>
                            <div data-aos="fade-up" className="passion-details-section">
                                <h5>{information.passion[0].title}</h5>
                                <p>
                                {information.passion[0].description}<a href={information.passion[0].link.linkPage} className="passion-link">{information.passion[0].link.name}</a>
                                </p>
                            </div>
                            
                            <div data-aos="fade-up" className="passion-thumbnail" style={{ backgroundImage: `url(${ require(`${information.passion[0].img}`) })`}}></div>
                </>
            );       
            break;

        case 'music':
            return(
                <>
                            <div data-aos="fade-up" className="passion-details-section">
                                <h5>{information.passion[1].title}</h5>
                                <p>
                                {information.passion[1].description}<a href={information.passion[1].link.linkPage} className="passion-link">{information.passion[1].link.name}</a>
                                </p>
                            </div>
                            
                            <div data-aos="fade-up" className="passion-thumbnail" style={{ backgroundImage: `url(${ require(`${information.passion[1].img}`) })`}}></div>
                </>
            );       
            break;

            case 'tattoos':
                return(
                    <>
                                <div data-aos="fade-up" className="passion-details-section">
                                    <h5>{information.passion[2].title}</h5>
                                    <p>
                                    {information.passion[2].description}<a href={information.passion[2].link.linkPage} className="passion-link">{information.passion[2].link.name}</a>
                                    </p>
                                </div>
                                
                                <div data-aos="fade-up" className="passion-thumbnail" style={{ backgroundImage: `url(${ require(`${information.passion[2].img}`) })`}}></div>
                    </>
                );       
                break;
    
        default:
            return null;
            break;
    }
}

export default Passion;