import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })

    handleClose();
  }

  const subtitle = "All the latest events in Mario Kingdom";

  const handleClose = () => {
    setShowModal(!showModal);
  }

  const handleClick = (id) => {

    setEvents(events.filter((event) => {

      return id !== event.id;
    }))

  }


  return (
    <div className="App">

      <Title title="Events in Mario Land" subtitle={subtitle} />
      {showEvents && <div>
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      </div>}
      {!showEvents &&
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>}
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {!showModal && <Modal isSalesModel={true}>
        <NewEventForm eventId={events.length} addEvent={addEvent} />
      </Modal>}

      <div>
        <br />
        <button onClick={handleClose}>Add New Event</button>
      </div>

    </div>
  );
}

export default App;
