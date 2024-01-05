import Slider from "./slideshow";
import './index.css'
import robotics from './images/robotics.png'
import stem from './images/stemcafe4.JPG'
import maker from './images/maker.png'
import entrepreneurship from './images/entrepreneurship.png'
import goodSheperd from './images/Good Shepherd RC logo.png'
import hilltop from './images/hilltop.png'
import MountOlivet from './images/Mount Olivet School Logo.png'
import nagies from './images/nagies school.png'
import { Link } from "react-router-dom";


const Homepage = () => {
  return (
    <div className="Home">
      <div className="first-part">
        {/* <img src="/intro1.jpg" alt="" /> */}
        <div className="textonimage">
          <h2>Empowering Young Minds Through STEM Innovation</h2>
          <p>
            Through the power of STEM innovation, we inspire and enable young{" "}
            <br></br>minds to explore, create, and overcomee challenges,
            equipping them with the <br /> kills and mindset to become future
            problem solvers and trailblazers
          </p>
          <Link to="/Apply">
            <button className="availableCourses">APPLY</button>
          </Link>
          {/* <div className="innersection">
                  
              </div> */}
        </div>
      </div>
      <>
        <div className="second-part">
          <h1>Virtual or In-person Training</h1>

          <h2>
            <span>Build.</span> <span>Code.</span> <span>Innovate</span>
          </h2>
          <br />
          <br />
          <p>
            At BITLabs, our mission is to ignite a passion for learning in young
            minds through engaging and interactive STEM (Science, Technology,
            Engineering, and Mathematics) innovations. We are dedicated to
            providing hands-on, practical experiences that not only nurture
            creativity and critical thinking but also aim to cultivate a strong
            foundation of essential skill sets necessary for navigating the
            challenges of the modern world. Our holistic approach to education
            fosters an environment where students can explore, experiment, and
            develop a deep understanding of various scientific and technological
            concepts, empowering them to become confident problem-solvers and
            innovative thinkers.
          </p>
        </div>
      </>
      <div className="grid">
        {/* <div className="  box-1">
          <div className="text">
            <h2>Robotics Workshop</h2>
          </div>
        </div>
        <div className=" box-2">
          <div className="text">
            <h2>Collaborative Challenges</h2>
          </div>
        </div>
        <div className=" box-3">
          <div className="text">
            <h2>Maker Activities</h2>
          </div>
        </div>
        <div className="box-4">
          <div className="text">
            <h2>Entrepreneurship</h2>
          </div>
        </div> */}
        <div className="boxes">
          <img src={robotics} alt="" />
          <h2>Robotics Workshop</h2>
        </div>
        <div className="boxes">
          <img src={stem} alt="" />
          <h2>Collaborative Challenges</h2>
        </div>
        <div className="boxes">
          <img src={maker} alt="" />
          <h2>Maker Activities</h2>
        </div>
        <div className="boxes">
          <img src={entrepreneurship} alt="" />
          <h2>Entrepreneurship</h2>
        </div>
      </div>
      <div className="kids">
        {/* <button className="forkids">FOR KIDS</button> */}
      </div>

      <div className="third-part">
        <div className="grid2">
          <div className="video"></div>
          <div className="video-text">
            <p>
              The effectiveness of our programs and how they influence learners
              directly mirrors our identity and our consistent capability to
              achieve the goals we establish for our students.
            </p>
            <>
              <div className="values">
                <div className="value1">
                  <img src={goodSheperd} alt="" />
                </div>
                <div className="value2">
                  <img src={hilltop} alt="" />
                </div>
                <div className="value3">
                  <img src={MountOlivet} alt="" />
                </div>
                <div className="value4">
                  <img src={nagies} alt="" />
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
      <div className="forth-part">
        <div className="slideshow-bg">
          <div className="slideshow-overlay">
            <Slider />
          </div>
        </div>
      </div>
      {/* <div className="fifth-part">
        <p>
          Market-aligned Courses Curated for Your <br />
          Career Success
        </p>
        <div className="slideshow2">
          <Slider />
        </div>
      </div> */}

      <div className="sixth-part">
        <p>
          BITLabs, with its highly qualified and experienced trainers, is
          dedicated to guiding individuals to become exceptional programmers in{" "}
          their chosen courses. The institution emphasizes a dynamic and
          supportive learning environment, offering personalized instruction to{" "}
          cater to varying skill levels. BITLabs is committed to empowering{" "}
          learners, ensuring their success through comprehensive training and{" "}
          individualized attention. Join BITLabs to embark on a transformative{" "}
          journey toward excellence in programming.
        </p>
      </div>
      <div className="seventh-part">
        <div className="firsthalf">
          <h1>
            {" "}
            <span>WOMEN</span> <span>in</span> <span>STEM </span>
          </h1>
          <h2>
            BITLabs promotes inclusivity for aspiring programmers. With a focus
            on encouraging women in programming, we offer a supportive space.
            Committed to breaking barriers, we empower individuals, regardless
            of gender, in coding and software development. Join BITLabs for a
            diverse, welcoming, and empowering experience. Thrive in the dynamic
            field of programming excellence with us.
          </h2>
        </div>
        <div className="secondhalf"></div>
      </div>
    </div>
  );
};

export default Homepage;
