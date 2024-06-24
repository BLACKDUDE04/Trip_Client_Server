import React, {useEffect} from 'react'
import './popular.css'
import { BsArrowLeftShort} from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { GoDotFill } from "react-icons/go";
import img01 from '../../Assets/img01.jpg'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id:1,
    header: "India",
    image: img01,
    text: 'Alleppey',

},  
  {
    id:2,
    header: "New Zealand",
    image: img1,
    text: 'Bora Bora',

    },
    {
      id:3,
        header: "Indonesia",
        image: img2,
        text: 'Bali Island',

    },
    {
      id:4,
      header: "Canada",
      image: img3,
      text: `Columbia`,
    },
    
    {
      id:5,
      header: "Spain",
      image: img4,
      text: `Costa Brava`,
    },
    
    {
      id:6,
      header: "South Africa",
      image: img5,
      text: `Blyde River Canyon and Panorama Route`,
    },
    
];


const Popular = () =>   {


  useEffect(()=>{
    Aos.init({duration:2000})
},[])

    return(
      <section className="popular section container">
        <div className="secConatiner">
        
          <div className="secHeader flex">
            <div data-aos="fade-right" data-aos-duration="2500"  className="textDiv">
              <h2 className="secTitle">
                Popular destination
              </h2>
              <p>
                From historical cities to natural
                specteculars, come see the best of the
                world!
              </p>              
          </div>

            <div data-aos="fade-left" data-aos-duration="2500"  className="iconsDiv flex">
              <BsArrowLeftShort className='icon  leftIcon'/>
              <BsArrowRightShort className='icon'/>
            </div>
          </div>
          
          <div className="mainContent grid">
            {
              Data.map(({id,header,image,text})=>{
                return(
                  <div data-aos="fade-up"  className="singleDestination">
              <div className="destImage">
                <img src={image} alt="Image title"/>
                  <div className="overlayInfo">
                    <h3>{text}</h3>
                    <p>
                      {header}
                    </p>
                    <BsArrowRightShort className="icon"/>
                  </div>
                
              </div>
              
                <div className="destFooter">
                  <div className="number">
                    {id}
                  </div>
                  <div className='destText flex'>
                    <h6>
                      {text}
                    </h6>
                    <span className='flex'>
                      <span className='dot'>
                        <GoDotFill className='icon'/>
                      </span>

                    </span>
                  </div>

                </div>
                
            </div>
                )
              })
            }

          </div>
        </div>
      </section>
    )
  }
  export default Popular