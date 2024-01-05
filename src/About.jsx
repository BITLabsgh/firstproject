import aestetic1 from "./images/aesthetic1.jpg"

const About = () => {
    return (
      <>
        <div className="afirst-part">
          <div className="overlay"></div>
          <div className="textonimage">
            <h3>OUR VISION</h3>
            <h2>
              Fostering innovation and creativity among the younger generation
               through STEM.
            </h2>
            <p>
              Our primary objective is to actively involve and inspire the
              younger <br /> generation through the dynamic lens of STEM
              innovation. By emphasizing <br />
              the development of their skill sets within this framework, we seek
              to cultivate <br /> a forward-thinking mindset that encourages
              practical application and hands-on <br /> learning experiences.
              Through this approach, we aim to instill in them a profound <br />{" "}
              appreciation for the real-world implications of their theoretical
              knowledge, <br /> thus empowering them to become the architects of
              tomorrow's technological <br /> advancements and societal <br />
              progress.
            </p>
          </div>
        </div>
        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M0,192L60,170.7C120,149,240,107,360,117.3C480,128,600,192,720,202.7C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="asecondpart">
          <>
            <img src={aestetic1} alt="" />
          </>
          <div className="imagetext">
            <h1>OUR MISSION</h1>
            <h2>
              Our mission is to empower young minds with STEM education,
              fostering innovation and critical thinking in future
              problem-solvers.
            </h2>
            <p>
              BITLabs is a technology-centric company committed to fostering and
              nurturing young minds through the implementation of cutting-edge
              STEM innovations and educational programs. We are dedicated to
              equipping the next generation with the skills and knowledge
              necessary to thrive in the ever-evolving technological landscape.
            </p>
          </div>
        </div>
        <div className="thirdpart">
          <div className="wave2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#d4d4d4"
                fillOpacity="1"
                d="M0,96L48,117.3C96,139,192,181,288,165.3C384,149,480,75,576,53.3C672,32,768,64,864,112C960,160,1056,224,1152,213.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="text1">
            <h1>OUR VALUES</h1>
            <p>
              These values underpin our operations and serve as guiding
              principles that steer us toward fulfilling our core mandate to our
              stakeholders. They illuminate our approach to achieving our goals.
            </p>
            <div className="container">
              <div className="box">
                <div className="img1"></div>
                <h2>Innovate</h2>
              </div>
              <div className="box">
                <div className="img2"></div>
                <h2>Build</h2>
              </div>
              <div className="box">
                <div className="img3"></div>
                <h2>Launch</h2>
              </div>
            </div>
          </div>
          <div className="wave3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#d4d4d4"
                fillOpacity="1"
                d="M0,160L48,176C96,192,192,224,288,245.3C384,267,480,277,576,250.7C672,224,768,160,864,160C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>

          <div className="forthsection">
            <h1>OUR JOURNEY</h1>
            <p>
              In 2022, BITLabs began its mission to democratize STEM education in schools, particularly for children with limited resources. The aim is to integrate STEM subjects seamlessly into the standard curriculum, closing educational gaps and fostering a genuine passion for science and technology. Through dynamic programs, BITLabs strives to make STEM as fundamental as other core subjects, creating a brighter and more inclusive educational landscape.
            </p>
          </div>
          <div className="wave4">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#dfdfdf"
                fill-opacity="1"
                d="M0,128L48,154.7C96,181,192,235,288,218.7C384,203,480,117,576,117.3C672,117,768,203,864,197.3C960,192,1056,96,1152,64C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg> */}
          </div>
          <div className="lastsection">
            <h1>TEAM MEMBERS</h1>
            <div className="boardmembers">
              <div className="boxA">
                <div className="image1"></div>
                <h2>Adriana Nimo</h2>
              </div>
              <div className="boxA">
                <div className="image2"></div>
                <h2>Adonai Addo</h2>
              </div>
              <div className="boxA">
                <div className="image3"></div>
                <h2>Dennis Frimpong</h2>
              </div>
              <div className="boxA">
                <div className="image4"></div>
                <h2>Charlie Beck</h2>
              </div>
              <div className="boxA">
                <div className="image5"></div>
                <h2>Jim Skon</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default About;