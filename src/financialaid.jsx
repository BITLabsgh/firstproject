import yafa from "./images/YAF1.png"
import bismuth from "./images/Bismuth.png"

const Financial = () => {
    return (
      <div>
        <div className="ffirstpart">
          <div className="fcontent">
            <h1>BITLabs Financial Aid</h1>
            <p>
              BITLabs sponsors students, especially those facing challenges, to
              participate in STEM projects, providing financial aid, mentorship,
              and resource access. This initiative aligns with BITLabs' goal of
              fostering diversity in STEM education to create a more innovative
              future workforce. For detailed information, contact BITLabs
              directly or refer to official communications.
            </p>
          </div>
          <div className="image"></div>
        </div>
        <div className="blimage"></div>
        <div className="appealforsponsors">
          <p>
            BITLabs actively seeks external sponsorship to fuel its growth and
            strategic partnerships, emphasizing collaboration with entities
            sharing compatible values. A meticulously crafted sponsorship
            proposal highlights BITLabs' mission, achievements, and the impact
            of past support, establishing credibility and showcasing the
            tangible benefits sponsors can gain.
            <br />
            <br />
            Using a personalized strategy, BITLabs tailors pitches to align with
            potential sponsors' values and actively engages in networking both
            physically and virtually. A robust online presence, including a
            professional website and active social media profiles, amplifies
            BITLabs' visibility. Committed to ongoing communication, BITLabs
            aims to build lasting partnerships, extending beyond financial
            support to collaborative ventures that contribute substantively to
            its sustained growth and success.
          </p>
        </div>
        <div className="contact">
          <p>
            If you have inquiries about our sponsorship program, please contact
            us at info@bismuthinc.com Schedule an appointment with one of our
            admissions advisors for personalized information and guidance on the
            program's benefits and how it can support your educational goals. We
            are here to help make the sponsorship process clear and tailored to
            your needs.
          </p>
          <div className="sponsors">
            <h1>CURRENT SPONSORS</h1>

            <div className="currrentsponsors">
              <img src={yafa} alt="" />
              <img className="bb" src={bismuth} alt="" />
            </div>
            <div className="click">
              <h2><u>BECOME A SPONSOR</u></h2>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Financial;