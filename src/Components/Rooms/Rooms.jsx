import React, { useState, useEffect } from 'react';
import './Rooms.css';
import room1 from '../../Assets/Room1.png';
import room2 from '../../Assets/Room2.png';
import room3 from '../../Assets/Room3.png';
import room4 from '../../Assets/Room4.png';
import room5 from '../../Assets/Room5.png';
import room6 from '../../Assets/Room6.png';
import room7 from '../../Assets/Room7.png';
import room8 from '../../Assets/Room8.png';
import room9 from '../../Assets/Room9.png';
import room10 from '../../Assets/Room10.png';
import room11 from '../../Assets/Room11.png';
import room12 from '../../Assets/Room12.png';

const Rooms = () => {
  const [roomType, setRoomType] = useState('single'); // State to track selected room type

  useEffect(() => {
    console.log('Component mounted or updated!');
  }, []);

  const handleRoomTypeChange = (event) => {
    setRoomType(event.target.value);
  };

  const handleRoomBooking = (event) => {
    event.preventDefault(); // Prevent form submission
    alert('Room Booked 😊. Thanks for visiting this site ❤️'); // Show alert
    window.location.href = '/'; // Redirect to Home (adjust the path if needed)
  };

  return (
    <div className="Rooms">
      <div className="container mt-5">
        <h1 className="text-center mb-4">
          Available Rooms
          <i className="fa fa-hotel" aria-hidden="true"></i>
          <i className="fa-regular fa-face-smile"></i>
        </h1>
        <div className="form-group">
          <label htmlFor="roomType">Select Room Type:</label>
          <select
            className="form-control"
            id="roomType"
            value={roomType}
            onChange={handleRoomTypeChange}
          >
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
          </select>
        </div>

        {roomType === 'single' && (
          <div id="singleRoomCarousel" className="carousel slide mt-4" data-ride="carousel">
            <h1 className="text-center mb-4">Single Rooms</h1>
            <ol className="carousel-indicators">
              <li data-target="#singleRoomCarousel" data-slide-to={0} className="active"></li>
              <li data-target="#singleRoomCarousel" data-slide-to={1}></li>
              <li data-target="#singleRoomCarousel" data-slide-to={2}></li>
              <li data-target="#singleRoomCarousel" data-slide-to={3}></li>
              <li data-target="#singleRoomCarousel" data-slide-to={4}></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={room1} className="d-block w-100" alt="Room 1" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Room 1 (200$ per night)</h5>
                  <p>
                    Cozy Retreat: Our single rooms offer a cozy retreat with all the essential
                    amenities for a comfortable stay. Perfect for solo travelers seeking peace and
                    relaxation.
                  </p>
                  <form onSubmit={handleRoomBooking}>
                    <button type="submit" className="btn btn-primary">
                      Book Now
                    </button>
                  </form>
                </div>
              </div>
              <div className="carousel-item">
                <img src={room2} className="d-block w-100" alt="Room 2" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Room 2 (200$ per night)</h5>
                  <p>
                    Modern Comfort: Experience modern comfort in our stylish single rooms.
                    Thoughtfully designed interiors and convenient facilities ensure a pleasant stay
                    for solo guests.
                  </p>
                  <form onSubmit={handleRoomBooking}>
                    <button type="submit" className="btn btn-primary">
                      Book Now
                    </button>
                  </form>
                </div>
              </div>
              {/* Add more carousel items for single rooms here */}
            </div>
            <a
              className="carousel-control-prev"
              href="#singleRoomCarousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#singleRoomCarousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        )}

        {roomType === 'double' && (
          <div id="doubleRoomCarousel" className="carousel slide mt-4" data-ride="carousel">
            <h1 className="text-center mb-4">Double Rooms</h1>
            <ol className="carousel-indicators">
              <li data-target="#doubleRoomCarousel" data-slide-to={0} className="active"></li>
              <li data-target="#doubleRoomCarousel" data-slide-to={1}></li>
              <li data-target="#doubleRoomCarousel" data-slide-to={2}></li>
              <li data-target="#doubleRoomCarousel" data-slide-to={3}></li>
              <li data-target="#doubleRoomCarousel" data-slide-to={4}></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={room6} className="d-block w-100" alt="Room 6" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Room 1 (300$ per night)</h5>
                  <p>
                    Spacious Retreat: Our double rooms provide a spacious retreat for couples or
                    small families. Enjoy ample room to relax and unwind in comfort.
                  </p>
                  <form onSubmit={handleRoomBooking}>
                    <button type="submit" className="btn btn-primary">
                      Book Now
                    </button>
                  </form>
                </div>
              </div>
              <div className="carousel-item">
                <img src={room7} className="d-block w-100" alt="Room 7" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Room 2 (200$ per night)</h5>
                  <p>
                    Charming Getaway: Experience a charming getaway in our double rooms, featuring
                    cozy furnishings and inviting ambiance. Perfect for romantic escapes or quality
                    family time.
                  </p>
                  <form onSubmit={handleRoomBooking}>
                    <button type="submit" className="btn btn-primary">
                      Book Now
                    </button>
                  </form>
                </div>
              </div>
              {/* Add more carousel items for double rooms here */}
            </div>
            <a
              className="carousel-control-prev"
              href="#doubleRoomCarousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#doubleRoomCarousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rooms; 