import "./About.css";

import { useState } from "react";

import aboutImg from "../../../assets/about.png";
import aboutVideo from "../../../assets/about-video.mp4";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function About() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="about" id="about" style={{ overflow: "hidden" }}>
        <div
          className="about-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src={aboutImg} alt="About Edusity" className="about-img" />

          <PlayCircleIcon
            className="play-icon"
            sx={{ fontSize: 90 }}
            onClick={() => setShowVideo(true)}
          />
        </div>

        <div
          className="about-right"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <p className="about-subtitle">ABOUT UNIVERSITY</p>

          <h2>Nurturing Tomorrow's Leaders Today</h2>

          <p>
            We provide a supportive learning environment that encourages
            curiosity, creativity, and critical thinking.
          </p>

          <p>
            Our experienced faculty and modern facilities ensure students
            receive a world-class education and practical exposure.
          </p>

          <p>
            Through academic excellence and innovation, we prepare students for
            successful careers and meaningful contributions to society.
          </p>
        </div>
      </section>

      {showVideo && (
        <div className="video-container" onClick={() => setShowVideo(false)}>
          <div
            className="video-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <video controls autoPlay>
              <source src={aboutVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
