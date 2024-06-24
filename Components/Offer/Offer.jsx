import React, {useEffect}  from 'react'
import './offer.css'
import { MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn } from 'react-icons/md'; 
import img from '../../Assets/offer1.jpg'
import img2 from '../../Assets/offer2.jpg'
import img3 from '../../Assets/offer3.jpg'
import img4 from '../../Assets/offer4.jpg'
import img5 from '../../Assets/offer5.jpg'
import { FaWifi } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Offers =[
    {
        id:1,
        imgSrc: img,
        destTitle:'Soneva Jani Resort' ,
        location: ' Maldives ',
        price: 'Rs. 2,00,000',
        dis: '20% off',
        Bed: '160',
        Bathtub:'160',
    },
    {
        id:2,
        imgSrc: img2,
        destTitle: 'Nihi Sumba',
        location: 'Sumba Island',
        price: 'Rs. 3,50,000',
        dis: '30% off',
        Bed: '200',
        Bathtub:'200',
    },
    {
        id:3,
        imgSrc: img3,
        destTitle: 'Hotel Du Cap-Eden-Roc',
        location: 'Antibes',
        price: 'Rs. 5,00,00',
        dis: '45% off',
        Bed: '500',
        Bathtub:'500',
    },
    {
        id:4,
        imgSrc: img4,
        destTitle: 'Four Seasons Astir Palace',
        location: 'Athens',
        price: '6,45,000',
        dis: '35% off',
        Bed: '303',
        Bathtub:'200',
    },
    {
        id:5,
        imgSrc: img5,
        destTitle:'Soneva Jani' ,
        location: 'Maldives',
        price: 'Rs. 3,00,000',
        dis: '55% off',
        Bed: '60',
        Bathtub:'40',
    },
]

const Offer = () =>   {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    

    return(
        <section className="offer container section"> 
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
                    <h2 className="secTitle">
                        Special Offers

                    </h2>
                    <p>
                        From historical to natural spectaculars,
                        come see the best of the world!
                    </p>
                </div>

                <div className="mainContent">
                        {
                            Offers.map(({id,imgSrc,destTitle,location,price,dis,Bed,Bathtub})=>{
                                return(
                                    <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
                                    <div className="destImage">
                                        <img src={imgSrc} alt={destTitle} />
                                        <span className="discount">
                                            {dis}
                                        </span>
                                    </div>
                                

                                <div className="offerBody">
                                    <div className="price flex">
                                        <h4>
                                            {price}
                                        </h4>
                                        <span className="status">
                                                For Rent
                                            </span>
                                    </div>

                                    <div className="amenities flex">
                                        <div className="singleAmenity flex">
                                            <MdKingBed className='icon'/>
                                            <small>{Bed}</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdBathtub className='icon'/>
                                            <small>{Bathtub}</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <FaWifi className='icon'/>
                                            <small>Wi-fi</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdAirportShuttle className='icon'/>
                                            <small>Shuttle</small>
                                        </div>
                                    </div>

                                    <div className="location flex">
                                        <MdLocationOn className='icon'/>
                                        <small>{location}</small>
                                    </div>

                                    <button className="btn flex">
                                        View Details
                                        <BsArrowRightShort className='icon'/>
                                    </button>
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

export default Offer;