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
            <div className="form-container">
            <form>
                <div>
                    <label htmlFor="eventName" className='labels'>
                        Event Name
                    </label>
                    <input
                        type="text"
                        placeholder='Event Name'
                            name="eventName"
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
                            name="hostName"
                        autoComplete='hostName'
                        className='input_field'
                        required
                        onChange={handleChange}
                        value={form.hostName}
                    />
                </div>

                    <div className='date-fields'>
                        <div>
                    <label htmlFor="date" className='labels'>
                                Start time/date
                    </label>
                    <input
                        type="date"

                                name="date"
                        autoComplete='date'
                        className='input_field'
                        required
                        onChange={handleChange}
                        value={form.date}
                    />
                        </div>
                        <div>
                            <label htmlFor="endDate" className='labels'>
                                End time/date
                            </label>
                            <input
                                type="date"

                                name="endDate"
                                autoComplete='date'
                                className='input_field'
                                required
                                onChange={handleChange}
                                value={form.endDate}
                            />
                        </div>
                    </div>
                <div>
                    <label htmlFor="location" className='labels'>
                        Location
                    </label>
                    <input
                        type="text"
                            placeholder='New York'
                            name="location"
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
                            name="avatar" id="avatar"
                        accept="image/png, image/jpeg"
                        onChange={changeHandler}
                    />
                </div>
                <button type="submit" className='create_button' onClick={handleSubmit}> Next</button>
            </form>
            </div>
        </div>
    )
}

export default Create