import React from 'react'
import birthdayCake from "../assets/Birthday cake.png"
import { BsFillCalendarMinusFill } from "react-icons/bs"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdKeyboardArrowRight } from "react-icons/md"
import "./event.css"
const Event = ({ form, selectImage }) => {
    return (
        <div className='event-container'>
            <div className='card'>
                <div className='cake-image'>
                    <img src={selectImage ? selectImage : birthdayCake} alt="cake" />
                </div>
                <div className='event-header'>
                    <h1 className='event-head-text'>
                        {form.eventName ? form.eventName : 'Birthday Bash'}
                    </h1>
                    <p className='event-header-p'>{form.hostName ? form.hostName : 'Hosted by Elysia'}</p>
                </div>
                <div className='event-details'>
                    <div className='event-card'>
                        <div className='event-date'>
                            <BsFillCalendarMinusFill color="#E87BF8" fontSize="20px" />
                            <div className='event-date-details' >
                                <h3>18 August 6:00PM</h3>
                                <p>to <strong>19 August 1:00PM </strong>UTC + 10</p>
                            </div>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>


                    <div className='event-card'>

                        <div className='event-date'>
                            <HiOutlineLocationMarker color="#E87BF8" fontSize="20px" />
                            <div className='event-date-details'>
                                <h3>Street name</h3>
                                <p>{form.location ? form.location : 'Suburb State Postcode'}</p>
                            </div>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Event