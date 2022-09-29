import React from 'react'
import { useNavigate } from "react-router-dom"
import "./create.css"
const Create = ({ form, setForm, setSelectImage }) => {
    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/event")
    }

    const changeHandler = (event) => {
        setSelectImage(event.target.files[0]);

    };

    const handleChange = (e) => {
        setForm((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <div className='create-container'>
            <h1 className='head-text'>Create
                <span className='gradient-text'> Your </span>
                Event
            </h1>
            <form>
                <div>
                    <label htmlFor="eventName" className='labels'>
                        Event Name
                    </label>
                    <input
                        type="text"
                        placeholder='Event Name'
                        id="eventName"
                        autoComplete='eventName'
                        className='input_field'
                        required
                        onChange={handleChange}
                        value={form.eventName}
                    />
                </div>

                <div>
                    <label htmlFor="hostName" className='labels'>
                        Host Name
                    </label>
                    <input
                        type="text"
                        placeholder='Host Name'
                        id="hostName"
                        autoComplete='hostName'
                        className='input_field'
                        required
                        onChange={handleChange}
                        value={form.hostName}
                    />
                </div>

                <div>
                    <label htmlFor="date" className='labels'>
                        Start and End time/date
                    </label>
                    <input
                        type="date"

                        id="date"
                        autoComplete='date'
                        className='input_field'
                        required
                        onChange={handleChange}
                        value={form.date}
                    />
                </div>

                <div>
                    <label htmlFor="location" className='labels'>
                        Location
                    </label>
                    <input
                        type="text"
                        placeholder='New Yoir'
                        id="location"
                        autoComplete='location'
                        className='input_field'
                        required
                        onChange={handleChange}
                        value={form.location}
                    />
                </div>

                <div>
                    <label htmlFor="avatar" className='labels'>
                        Event photo               </label>
                    <input type="file"
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg"
                        onChange={changeHandler}
                    />
                </div>
                <button type="submit" className='create_button' onClick={handleSubmit}> Next</button>
            </form>
        </div>
    )
}

export default Create