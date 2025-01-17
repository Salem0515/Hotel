import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Bondi1 from '../../Assets/Bondi1.png'
import Bondi2 from '../../Assets/Bondi2.png'
import Bondi3 from '../../Assets/Bondi3.png'
import images1 from '../../Assets/images1.png'
import images2 from '../../Assets/images2.png'
import images3 from '../../Assets/images3.png'
import images4 from '../../Assets/images4.png'
import images5 from '../../Assets/images5.png'
import images6 from '../../Assets/images6.png'
import images7 from '../../Assets/images7.png'
import images8 from '../../Assets/images8.png'
import tech1 from '../../Assets/tech1.png'
import tech2 from '../../Assets/tech2.png'
import tech3 from '../../Assets/tech3.png'
import tech4 from '../../Assets/tech4.png'
import chiefteam from '../../Assets/chiefteam.png'
import housekeeper from '../../Assets/housekeeper.png'
import laptop from '../../Assets/laptop.png'
import logo from '../../Assets/logo.png'
import manager from '../../Assets/manager.png'
import Sec from '../../Assets/Sec.png'

const Home = () => {
  const handleRegistrationClick = () => {
    window.open('/signin-signup',); 
  };
  const handleBookingClick = () => {
    window.open('/rooms',); 
  };
  return (
    <div>
  
  <nav className="navbar navbar-expand-lg sticky top">
  <div className="container">
    <a className="navbar-brand" href="#Home">
      <img src={logo} alt="logo" />
    </a>
    <button
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="#Home" className="nav-link p-2 p-lg-3 active" >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#Services" className="nav-link p-2 p-lg-3 active" >
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#Portfolio" className="nav-link p-2 p-lg-3 active" >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#About" className="nav-link p-2 p-lg-3 active" >
            About
          </a>
        </li>
        <li className="nav-item">
          <a  href="#Contact" className="nav-link p-2 p-lg-3 active">
            Contact
          </a>
        </li>
      </ul>
      <div className="search ps-3 pe-3">
        <i className="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="Search" />
      </div>
      <a
      href="#Registration"
        className="btn btn-danger main-btn rounded-pill"
        onClick={handleRegistrationClick}
      >
        Registration
      </a>
    </div>
  </div>
</nav>



  <div  className="landing d-flix justify-content-center alighn-items-center">
    <div className="text-center text-light">
      <h1>
        Welcome to Bondi Hotel
        <i className="fa-regular fa-face-smile" />
      </h1>
      <p className="fs-5">
        We are very happy for your visit and We hope that you will visit again
      </p>
      <a
        className="btn btn-danger main-btn rounded-pill"
        href="#Book"
        onClick={handleBookingClick}
>
        Book your room
      </a>
    </div>
  </div>
  <div id="Home" className="featchers fade-in text-center pt-5 pb-5">
    <div className="container">
      <div className="main-title mt-5 mb-5 position-relative">
        <i className="fa-solid fa-hotel icon fa-4x fa-4x" />
        <h2>The city lacks a destination hotel.</h2>
        <p className="text-balck-50 text-uppercase">Some of our stuff under</p>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="feat">
            <div className="icon-holder position-relative">
              <i className="fa-solid fa-1 position-absolute buttom-0 number" />
              <i className="fa-solid fa-bed fa-4x position-absolute buttom-0 icon" />
            </div>
            <h4 className="mb-4 mt-3 text-uppercase">Very comfortable beds</h4>
            <p className="text-balck-50 lh-lg">
              Drift off to dreamland in our plush, cloud-like beds, designed for
              ultimate comfort and a rejuvenating sleep experience.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="feat">
            <div className="icon-holder position-relative">
              <i className="fa-solid fa-2 position-absolute buttom-0 number" />
              <i className="fa-solid fa-bowl-food fa-4x position-absolute buttom-0 icon" />
            </div>
            <h4 className="mb-4 mt-3 text-uppercase">
              Indulge in Culinary Excellence
            </h4>
            <p className="text-balck-50 lh-lg">
              Savor a symphony of global flavors and locally sourced ingredients
              at Bondi Hotel, where each dish is a testament to our commitment
              to exquisite dining.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="feat">
            <div className="icon-holder position-relative">
              <i className="fa-solid fa-3 position-absolute buttom-0 number" />
              <i className="fa-solid fa-water-ladder fa-4x position-absolute buttom-0 icon" />
            </div>
            <h4 className="mb-4 mt-3 text-uppercase">Dive into Luxury</h4>
            <p className="text-balck-50 lh-lg">
              Our sparkling pool beckons, offering a refreshing oasis beneath
              the sun. Immerse yourself in leisure, unwind by the poolside, and
              elevate your relaxation at Bondi Hotel..
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="Services" className="ourwork text-center pt-5 pb-5">
    <div className="container">
      <div className="main-title mt-5 mb-5 position-relative">
        <i className="fa-solid fa-hotel icon fa-4x fa-4x" />
        <h2>We provide this.</h2>
        <p className="text-balck-50 text-uppercase">Prepare To Be Amazed</p>
      </div>
      <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
        <li className="active rounded-pill">All</li>
        <li>Food</li>
        <li>View</li>
        <li>Hotel beach</li>
        <li>Parties</li>
      </ul>
    </div>
    <div className="row">
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div className="box mb-3 bg-white" data-work="The oceane view">
          <img src={images1} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div className="box mb-3 bg-white" data-work="Hotel Rooms">
          <img src={images2} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div className="box mb-3 bg-white" data-work="Sunset walk">
          <img src={images3} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div
          className="box mb-3 bg-white"
          data-work="Breakfast overlooking the sea"
        >
          <img src={images4} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div className="box mb-3 bg-white" data-work="Friendly staff">
          <img src={images5} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div className="box mb-3 bg-white" data-work="Wedding parties ">
          <img src={images6} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div className="box mb-3 bg-white" data-work="Family dinner">
          <img src={images7} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div className="box mb-3 bg-white" data-work="Windesurffing">
          <img src={images8} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center mt-5">
      <a
        className="btn btn-danger main-btn rounded-pill text-uppercase"
        href="#"
      >
        See more
      </a>
    </div>
  </div>
  <div id="Portfolio" className="stuff pt-5">
    <div className="container">
      <div className="main-title mt-5 mb-5 text-center position-relative">
        <i className="fa-solid fa-hotel icon fa-4x fa-4x" />
        <h2>Some Stuff About Us.</h2>
        <p className="text-balck-50 text-uppercase">The Great Team</p>
      </div>
      <p className="des text-center mb-5 text-balck-50 m-auto">
        Indulge in the epitome of luxury at Bondi Hotel, where comfort meets
        sophistication. Our plush bedrooms offer a haven of relaxation, ensuring
        a rejuvenating stay.
      </p>
      <div className="row alighn-items-center">
        <div className="col-lg-4 mb-4 text-center text-md-start">
          <div className="text">
            <h4>About our origins</h4>
            <p className="text-balck-50 fs-6">
              Immersed in the allure of sophistication, Bondi Hotel stands as a
              symbol of refined elegance. This haven of luxury harmoniously
              fuses contemporary opulence with a nod to its storied past,
              creating an atmosphere that transcends time. With meticulous
              attention to detail, the hotel's design pays homage to the
              cultural richness of its locale, capturing the essence of
              tradition while embracing the pulse of modernity.
            </p>
            <p className="text-balck-50 fs-6">
              At Bondi Hotel, each space whispers tales of history, inviting
              guests to unwind in a setting where every nuance tells a story.
              From the meticulously designed interiors to the warm ambiance, the
              hotel seamlessly weaves together the threads of heritage and
              innovation. It's more than a place to stay; it's a journey through
              the soul of a destination, where the allure of the past meets the
              comforts of the present, making every stay a timeless experience.
            </p>
            <a className="btn btn-danger main-btn rounded-pill" href="#">
              Find Out more
            </a>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="your-element slide-left">
            <img className="img-fluid" src={laptop} alt="see more" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="Team text-center pb-5 pt-5">
    <div className="container pb-5 pt-5">
      <h2 className="fw-bold">The Team</h2>
      <p className="text-balck-50 mb-5 lh-lg">
        Exceptional Team, Exceptional Service: Meet our dedicated team at Bondi
        Hotel, where hospitality is not just a profession but a passion. With a
        commitment to excellence, our team ensures your stay is marked by
        warmth, efficiency, and a touch of personalized care. Welcome to a home
        away from home, crafted by our extraordinary staff.
      </p>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="box bg-white">
            <img className="img-fluid" src={manager} alt="" />
            <h4 className="text-light p-3 ">Mohamed Hussein</h4>
            <blockquote className="text-balck-50 p-3 ">
              Meet Our Visionary Manager: At Bondi Hotel, our success is guided
              by the exceptional leadership of our manager. With a visionary
              approach and a keen eye for guest satisfaction, our manager
              ensures that every aspect of your stay reflects the pinnacle of
              hospitality. Experience unparalleled service and attention to
              detail under the thoughtful guidance of our esteemed manager.
            </blockquote>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box bg-white">
            <img className="img-fluid" src={Sec} alt="" />
            <h4 className="text-light p-3 ">Yasmin Iparhime</h4>
            <blockquote className="text-balck-50 p-3 ">
              Efficiency and Warmth in One: Meet our manager's right hand, our
              female secretary, who brings a perfect blend of efficiency and
              warmth to Bondi Hotel. With impeccable organizational skills and a
              friendly demeanor, she ensures that your requests are met with
              promptness and a welcoming smile. Experience a seamless stay with
              the dedicated support of our invaluable secretary.
            </blockquote>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box bg-white">
            <img className="img-fluid" src={chiefteam} alt="" />
            <h4 className="text-light p-3 ">
              Chief Sabry 
            </h4>
            <blockquote className="text-balck-50 p-3 ">
              Our Chief and the culinary artisans behind the scenes form a
              gastronomic dream team. Led by our visionary Chief, the kitchen
              transforms into a culinary canvas where each dish is a
              masterpiece. The team's dedication, creativity, and passion for
              perfection bring an unforgettable dining experience to our guests,
              making every meal a journey through exquisite flavors and culinary.
            </blockquote>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box bg-white">
            <img className="img-fluid" src={housekeeper} alt="" />
            <h4 className="text-light p-3 ">Naira Iprahim</h4>
            <blockquote className="text-balck-50 p-3 ">
              Head of Housekeeping: Meet the heart of our pristine sanctuary our
              Head of Housekeeping. With a meticulous eye for detail and a
              commitment to impeccable cleanliness, they lead a team dedicated
              to ensuring your stay is not just comfortable but a seamless blend
              of luxury and spotlessness. Their unwavering dedication turns
              every room into a haven of freshness.

            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="tecks pt-5 pb-5 text-center ">
    <div className="container">
      <div className="row alighn-items-center">
        <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
          <img className="img-fluid" src={tech1} alt="" />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
          <img className="img-fluid" src={tech2} alt="" />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
          <img className="img-fluid" src={tech3} alt="" />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
          <img className="img-fluid" src={tech4} alt="" />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
          <img className="img-fluid" src={tech1} alt="" />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
          <img className="img-fluid" src={tech2} alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="project text-center pt-5 pb-5 text-light">
    <h2>Book your room now</h2>
    <p className="text-white-50 ">
      Book Now and Elevate Your Stay: Embark on a journey of indulgence by
      booking your room now! Enjoy exclusive advantages, from discounted rates
      to complimentary amenities. Whether it's a room with a stunning view,
      additional perks, or priority services, reserving your stay in advance
      ensures you unlock a realm of benefits. Seize the opportunity to make your
      stay with us an extraordinary experience. Book today and let the
      anticipation of luxury begin!
    </p>
    <div className="d-flex justify-content-center mt-5 mb-5 rounded-pill">
      <a
        className="btn btn-danger main-btn rounded-pill text-uppercase"
        href="#"
        onclick={handleBookingClick}
      >
        Book room
      </a>
    </div>
  </div>
  <div id="About" className="blog-pt-5 pb-5">
    <div className="container">
      <div className="main-title mt-5 mb-5 text-center position-relative">
        <i className="fa-solid fa-hotel icon fa-4x" />
        <h2>Read more about our Hotel.</h2>
        <p className="text-balck-50 text-uppercase">
          See our Other hotel branches around the world
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Bondi3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bondi Oasis Egypt</h5>
              <p className="card-text">
                Bondi Oasis Egypt: Nestled along the pristine shores of Bondi
                Beach, our hotel stands as a beacon of luxury and
                sophistication. With panoramic views of the turquoise waters,
                each room is meticulously designed to provide a haven of comfort
                and style. Immerse yourself in the lap of luxury, where
                personalized service and attention to detail redefine the
                meaning of a perfect getaway. of the card's content.
              </p>
              <a
                href="#"
                className="btn btn-danger"
                onclick={handleBookingClick}
              >
                Book there
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Bondi1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bondi Elegance Rome</h5>
              <p className="card-text">
                Bondi Elegance Rome: At Bondi Hotel, we believe that an
                exquisite stay is complemented by culinary experiences to
                remember. Indulge your senses in our on-site restaurants, where
                world-class chefs craft culinary masterpieces. From
                international delicacies to locally inspired dishes, our dining
                options offer a symphony of flavors. Elegant ambiance, coupled
                with top-notch service, creates an unforgettable dining.
                              </p>
              <a
                href="#"
                className="btn btn-danger"
                onclick={handleBookingClick}
              >
                Book there{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Bondi2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bondi black Pearl Spain</h5>
              <p className="card-text">
                Bondi black Pearl Spain: Beyond the opulent interiors, Bondi
                Hotel presents a haven for wellness and recreation. Dive into
                our crystal-clear pools, rejuvenate at our spa, or maintain your
                fitness routine in our state-of-the-art gym. Whether you seek
                relaxation or an active escape, our hotel provides an
                unparalleled array of amenities. Every moment at Bondi Hotel is
                designed to elevate your stay, ensuring that your memories.
              </p>
              <a
                href="#"
                className="btn btn-danger"
                onclick={handleBookingClick}
              >
                Book there
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5 rounded-pill">
          <a
            className="btn btn-danger main-btn rounded-pill text-uppercase"
            href="https://www.travelweekly.com/Travel-News/Hotel-News/Articles"
          >
            More Articles
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="subscribe pt-5 pb-5 text-center text-md-start">
    <div className="container">
      <form className="row alighn-items-center">
        <div className="col-md-6 col-lg-3">
          <div className="fw-bold fs-5 mb-3">
            Subscribe to our Hotel Webpage:
          </div>
        </div>
        <div className="col-md-6 col-lg-7 mb-5">
          <input
            className="w-100 text-light p-2 pg-transparent"
            type="text-danger"
            placeholder="Enter your Email Address"
          />
        </div>
        <div className="col-md-6 col-lg-2">
          <input
            className="btn rounded-pill"
            type="submit"
            defaultValue="subscription"
          />
        </div>
      </form>
    </div>
  </div>
  <div id="Contact" className="footer pt-5 pb-5 text-white-50 text-center text-md-start">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="info mb-5">
            <img src={logo} alt="" className="mp-4" />
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellat, ipsam eos? Ut beatae facere odio non repudiandae earum
              obcaecati voluptatum? Ipsa necessitatibus repellat qui alias
              cupiditate eius itaque ab vel!
            </p>
            <div className="copyright">
              Created by <span>Mohamed Hussein </span>
              <div>
                © 2024 <span>Bondi inc</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-2">
          <div className="links">
            <h2 className="text-light" />
            <ul className="list-unstyled lh-lg">
              <li>Home</li>
              <li>Our Services</li>
              <li>Portfolio</li>
              <li>Testimonials</li>
              <li>Support</li>
              <li>Test and Conditions</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-2">
          <div className="links">
            <h2 className="text-light" />
            <ul className="list-unstyled lh-lg">
              <li>Sign In</li>
              <li>Register</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="contact">
            <h5 className="text-light">Contact Us</h5>
            <p className="lh-lg mt-3 mb-5">
              Get in touch with us via phone,email. we are waiting for your call
              or message{" "}
            </p>
            <a className="btn rounded-pill main-btn w-100" href="#">
              mohamadhussen565@gmail.com.com
            </a>
            <ul className="d-flex mt-5 list-unstyled gap-3">
              <li>
                <a href="#" className="d-block text-light">
                  <i className="fa-brands fa-facebook facebook rounded-circle p-2" />
                </a>
              </li>
              <li>
                <a href="#" className="d-block text-light">
                  <i className="fa-brands fa-square-x-twitter x-twitter rounded-circle p-2" />
                </a>
              </li>
              <li>
                <a href="#" className="d-block text-light">
                  <i className="fa-brands fa-youtube youtube rounded-circle p-2" />
                </a>
              </li>
              <li>
                <a href="#" className="d-block text-light">
                  <i className="fa-brands fa-instagram instagram rounded-circle p-2" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Home
