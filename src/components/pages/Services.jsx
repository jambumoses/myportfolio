import React from "react";
import information from "./information";

function Services(){

    function show_or_hide_Service(event){
        if(event.target.innerHTML == "+"){
            event.target.innerHTML="-";
            const details_id = document.getElementById(event.target.id+"-details");
            details_id.className="service-details-show";
        }else{
            event.target.innerHTML="+";
            const details_id = document.getElementById(event.target.id+"-details");
            details_id.className="service-details";
        }
    }

    return (
        <>
        <section className="service-section">
            <h1 data-aos="fade-up">services</h1>
            <div data-aos="fade-up"  className="service-container">
                
                <div data-aos="fade-left"  className="service">
                    <span className="service-count">{information.services[0].count}</span>
                    <span className="service-content">
                        <span className="service-context">{information.services[0].heading}</span>
                    </span>
                    <span id={information.services[0].count} onClick={show_or_hide_Service} className="open-service">+</span>
                    <div id={information.services[0].count+"-details"} className="service-details">{/*  .service-details-show */}
                        <div data-aos="fade-up" className="service-context">{information.services[0].sub_titles[0]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[0].sub_titles[1]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[0].sub_titles[2]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[0].sub_titles[3]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[0].sub_titles[4]}</div>
                    </div>
                </div>

                <div data-aos="fade-left" className="service">
                    <span className="service-count">{information.services[1].count}</span>
                    <span className="service-content">
                        <span className="service-context">{information.services[1].heading}</span>
                    </span>
                    <span id={information.services[1].count} onClick={show_or_hide_Service} className="open-service">+</span>
                    <div id={information.services[1].count+"-details"} className="service-details">
                        <div data-aos="fade-up" className="service-context">{information.services[1].sub_titles[0]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[1].sub_titles[1]}</div>
                    </div>
                </div>

                <div data-aos="fade-left" className="service">
                    <span className="service-count">{information.services[2].count}</span>
                    <span className="service-content">
                        <span className="service-context">{information.services[2].heading}</span>
                    </span>
                    <span id={information.services[2].count} onClick={show_or_hide_Service} className="open-service">+</span>
                    <div id={information.services[2].count+"-details"} className="service-details">
                        <div data-aos="fade-up" className="service-context">{information.services[2].sub_titles[0]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[2].sub_titles[1]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[2].sub_titles[2]}</div>
                    </div>
                </div>

                <div data-aos="fade-left" className="service">
                    <span className="service-count">{information.services[3].count}</span>
                    <span className="service-content">
                        <span className="service-context">{information.services[3].heading}</span>
                    </span>
                    <span id={information.services[3].count} onClick={show_or_hide_Service} className="open-service">+</span>
                    <div id={information.services[3].count+"-details"} className="service-details">
                        <div data-aos="fade-up" className="service-context">{information.services[3].sub_titles[0]}</div>
                    </div>
                </div>

                <div data-aos="fade-left" className="service">
                    <span className="service-count">{information.services[4].count}</span>
                    <span className="service-content">
                        <span className="service-context">{information.services[4].heading}</span>
                    </span>
                    <span id={information.services[4].count}  onClick={show_or_hide_Service} className="open-service">+</span>
                    <div id={information.services[4].count+"-details"} className="service-details">
                        <div data-aos="fade-up" className="service-context">{information.services[4].sub_titles[0]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[4].sub_titles[1]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[4].sub_titles[2]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[4].sub_titles[3]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[4].sub_titles[4]}</div>
                    </div>
                </div>

                <div data-aos="fade-left" className="service">
                    <span className="service-count">{information.services[5].count}</span>
                    <span className="service-content">
                        <span className="service-context">{information.services[5].heading}</span>
                    </span>
                    <span id={information.services[5].count} onClick={show_or_hide_Service} className="open-service">+</span>
                    <div id={information.services[5].count+"-details"} className="service-details">
                        <div data-aos="fade-up" className="service-context">{information.services[5].sub_titles[0]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[5].sub_titles[1]}</div>
                    </div>
                </div>

                <div data-aos="fade-left" className="service">
                    <span className="service-count">{information.services[6].count}</span>
                    <span className="service-content">
                        <span className="service-context">{information.services[6].heading}</span>
                    </span>
                    <span id={information.services[6].count} onClick={show_or_hide_Service} className="open-service">+</span>
                    <div id={information.services[6].count+"-details"} className="service-details">
                        <div data-aos="fade-up" className="service-context">{information.services[6].sub_titles[0]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[6].sub_titles[1]}</div>
                        <div data-aos="fade-up" className="service-context">{information.services[6].sub_titles[2]}</div>
                    </div>
                </div>

            </div>
        </section>
        </>
    );
}

export default Services;