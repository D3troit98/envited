import React, { useEffect } from 'react'
import birthdayCake from "../assets/Birthday cake.png"
import { BsFillCalendarMinusFill } from "react-icons/bs"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdKeyboardArrowRight } from "react-icons/md"
import "./event.css"
const Event = ({ form, selectImage, imageSource, setImageSource }) => {

    useEffect(() => {
        if (selectImage) setImageSource(URL.createObjectURL(selectImage))

    }, [selectImage, setImageSource])


    return (
        <div className='event-container'>
            <div className='card'>
                <div className='cake-image'>
                    <img src={imageSource ? imageSource : birthdayCake} alt="cake" />
                </div>
                <div className='event-list'>  
                <div className='event-header'>
                    <h1 className='event-head-text'>
                        {form.eventName ? form.eventName : 'Birthday Bash'}
                    </h1>
                        <p className='event-header-p'>Hosted by <span className='add-weight'>{form.hostName ? form.hostName : 'Elysia'}</span></p>
                </div>
                <div className='event-details'>
                        <div className='event-card'>
                            <BsFillCalendarMinusFill color="#E87BF8" fontSize="20px" />
                            <div className='event-date'>
                            <div className='event-date-details' >
                                    <h3>{form.date ? form.date : '18 August'} 6:00PM</h3>
                                    <p>to <span className='add-weight'>{form.endDate ? form.endDate : '19 August'} 1:00PM </span>UTC+ 10</p>
                            </div>

                        </div>
                            <MdKeyboardArrowRight className='arrow' />
                    </div>


                        <div className='event-card'>
                            <HiOutlineLocationMarker color="#E87BF8" fontSize="20px" />
                            <div className='event-date'>

                            <div className='event-date-details'>
                                <h3>Street name</h3>
                                <p>{form.location ? form.location : 'Suburb State Postcode'}</p>
                            </div>

                            </div>
                            <MdKeyboardArrowRight className='arrow' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Event