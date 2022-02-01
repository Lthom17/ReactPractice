import React from 'react';
import '../styles/NewEventForm.css';
import { useState } from 'react';

export default function NewEventForm({ eventId, addEvent }) {

    function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }



    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('Manchester');


    const resetForm = () => {
        setTitle('');
        setDate('');
        setLocation('Manchester')
    }

    const handleSubmit = (e) => {

        e.preventDefault();



        const event = {
            title: title,
            date: date,
            location: location,
            id: eventId
        }

        addEvent(event);

        console.log(event);

        resetForm();

    }



    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
            </label>
            <label>
                <span>Event Date:</span>
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date}></input>
            </label>
            <label>
                <span>Event Location</span>
                <select onChange={(e) => setLocation(e.target.value)}>
                    <option value='manchester'>Manchester</option>
                    <option value='london'>London</option>
                    <option value='cardiff'>Cardiff</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
}
