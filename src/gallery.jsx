import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"
import img4 from "./images/4.jpg"
import img5 from "./images/5.jpg"
import img6 from "./images/6.jpg"
import img7 from "./images/7.jpg"
import img8 from "./images/8.jpg"
import img9 from "./images/9.jpg"
import img10 from "./images/10.jpg"
import img11 from "./images/11.jpg"
import img12 from "./images/12.jpg"
import img13 from "./images/13.jpg"
import img14 from "./images/14.jpg"
import img15 from "./images/15.jpg"
import img16 from "./images/16.jpg"
import img17 from "./images/17.jpg"
import img18 from "./images/18.jpg"
import img19 from "./images/19.jpg"
import img20 from "./images/20.jpg"
import img21 from "./images/21.jpg"
import img22 from "./images/22.jpg"
import img23 from "./images/23.jpg"
import img24 from "./images/24.jpg"
// import img25 from "./images/25.jpg"


const Gallery = () => {
    return (
      <>
        {/* <div className="parent">
            <div className="top">
                <h1>Gallery</h1>
                <p>We have captured a lot of stuff that has happened in BITLabs so far. Have a peek at our achievements
                </p>
                </div>
                </div> */}
        <div className="page">
          <div className="heading">
            <h3>
              Photo <span>Gallery</span>
            </h3></div>
            <div className="container">
              <div className="picture">
                <div className="column1">
                  <img src={img1} />
                  <img src={img2} />
                  <img src={img3} />
                  <img src={img4} />
                  <img src={img5} />
                  <img src={img6} />
                  <img src={img7} />
                  <img src={img8} />
                </div>
                <div className="column1">
                  <img src={img9} />
                  <img src={img10} />
                  <img src={img11} />
                  <img src={img12} />
                  <img src={img13} />
                  <img src={img14} />
                  <img src={img15} />
                  <img src={img16} />
                </div>{" "}
                <div className="column1">
                  <img src={img17} />
                  <img src={img18} />
                  <img src={img19} />
                  <img src={img20} />
                  <img src={img21} />
                  <img src={img22} />
                  <img src={img23} />
                  <img src={img24} />
                </div>
              </div>
            </div>
          </div>
        
      </>
    );
}
 
export default Gallery;