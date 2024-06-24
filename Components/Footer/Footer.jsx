import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import './footer.css'
import { ImFacebook, ImTwitter } from "react-icons/im";
import { MdTravelExplore } from "react-icons/md";
import { AiFillInstagram } from 'react-icons/ai';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () =>   {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <div className="footer">
            <div className="secContainer container grid">
                <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
                    <div data-aos="fade-up" data-aos-duration="2000" className="footerLogo">
                        <a href="#" className="logo flex">
                            <h1 className="flex">
                                <MdTravelExplore className="icon"/>
                            Travel</h1>
                        </a>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className="socials flex">
                        <ImFacebook className="icon"/>
                        <ImTwitter className="icon"/>
                        <AiFillInstagram className="icon"/>
                     </div>

                </div>

                <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
                    <span className="linkTitle">
                        Helpful Links
                    </span>
                    <li>
                        <a href="#">Destination</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    <li>
                        <a href="#">Travel & Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                    
                </div>

                <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
                    <span className="linkTitle">
                        Information
                    </span>
                    <li>
                        <Link  to="/">Home</Link>
                    </li>
                    <li>
                        <Link  to="/Popular">Popular</Link>
                    </li>
                    <li>
                        <Link  to="/About">About</Link>
                    </li>
                    <li>
                         <Link  to="/Blog">Blog</Link>
                    </li>
                    
                </div>

                <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks">
                    <span className="linkTitle">
                        Contact Us
                    </span>
                   <span className="phone">8959501783</span>
                   <span className="E-mail">blackdude04@gmail.com</span>
                </div>


                
            </div>
        </div>
        
    )
}

export default  Footer