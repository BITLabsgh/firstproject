import intro1 from "./images/intro1.jpg"
import appdev from "./images/appdev.jpg"
import webdev from "./images/webdev.jpg"
import ui from "./images/ui.jpg"
import graphics from "./images/graphics.jpg"
import data from "./images/data.jpg"
import cyber from "./images/cyber.jpg"
import { Link } from "react-router-dom"

const Courses = () => {
  return (
    <>
      <div className="cfirst-part">
        <img src={intro1} alt=""/>
        <div className="textonimage">
          <h2 className="title">Courses </h2>
        </div>
      </div>

      <div className="ccontainer">
        <div className="cbox1">
          <img src={appdev}/>
          <h2>App Development</h2>
          <p>
            Unlock your potential and master the art of app development with our
            comprehensive course. Join our community of passionate learners and
            experienced instructors to dive into the world of creating powerful
            and engaging mobile applications. Enroll now to kick-start your
            journey toward becoming a skilled app developer
          </p>
          <div className="fading"></div>
          <Link to="/Apply"><button>Apply</button></Link>
        </div>
        <div className="cbox1">
          <img src={webdev}/>
          <h2>Web Development</h2>
          <p>
            Ready to become a web development pro? Our dynamic course is
            designed to equip you with the latest tools and skills needed to
            craft stunning, responsive websites. Explore the fundamentals of
            HTML, CSS, and JavaScript while delving into the world of modern web
            development frameworks. Join us now and unleash your potential in
            the exciting realm of web development!
          </p>
          <div className="fading"></div>
          <Link to="/Apply"><button>Apply</button></Link>
        </div>
      </div>
      <div className="ccontainer1">
        <div className="cbox1">
          <img src={ui}/>
          <h2>UI/UX Development</h2>
          <p>
            Step into the captivating world of UI/UX design with our
            comprehensive course. Learn to create intuitive and visually
            stunning user interfaces that captivate audiences and enhance user
            experiences. Dive deep into the principles of user-centered design
            and master the art of crafting seamless, engaging digital
            experiences. Enroll today to embark on your journey toward becoming
            a skilled UI/UX designer and shaping the future of digital
            interaction!
                  </p>
          <div className="fading"></div>
          <Link to="/Apply"><button>Apply</button></Link>
        </div>
        <div className="cbox1">
          <img src={graphics}/>
          <h2>Graphics Design</h2>
          <p>
            Unleash your creativity with our cutting-edge graphics design
            course. Explore the art of visual communication and learn to craft
            captivating designs that leave a lasting impact. From mastering
            industry-standard software to understanding design principles and
            techniques, our course offers a comprehensive journey into the world
            of graphic design. Join us now to ignite your passion and transform
            your artistic vision into compelling visual masterpieces!
          </p>
          <div className="fading"></div>
          <Link to="/Apply"><button>Apply</button></Link>
        </div>
      </div>

      <div className="ccontainer2">
        <div className="cbox1">
          <img src={data}/>
          <h2>Data Analytics</h2>
          <p>
            Discover the power of data with our immersive data analytics course.
            Dive into the world of data-driven insights and learn to unlock the
            potential of raw information. From understanding data visualization
            to mastering statistical analysis and predictive modeling, our
            course equips you with the tools and skills necessary to make
            informed decisions and drive business success. Join us now and
            embark on your journey to becoming a proficient data analyst and
            strategic decision-maker!
          </p>
          <div className="fading"></div>
          <Link to="/Apply"><button>Apply</button></Link>
        </div>
        <div className="cbox1">
          <img src={cyber}/>
          <h2>CyberSecurity</h2>
          <p>
            Take the first step toward a secure digital future with our
            comprehensive cybersecurity course. Dive into the world of digital
            defense and learn to protect critical information from evolving
            cyber threats. From understanding network security to mastering
            encryption techniques and ethical hacking, our course equips you
            with the skills and knowledge needed to safeguard digital assets.
            Join us now and become a vital guardian of the digital realm,
            ensuring a safer and more secure online environment for all.
          </p>
          <div className="fading"></div>
          <Link to="/Apply"><button>Apply</button></Link>
        </div>
      </div>
    </>
  );
};

export default Courses;
