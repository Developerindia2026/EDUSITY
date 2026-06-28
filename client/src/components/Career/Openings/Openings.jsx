import Grid from "@mui/material/Grid";
import "./Openings.css";

function Openings() {
  return (
    <section className="openings">
      <div className="heading-container">
        <h2 className="career-heading" data-aos="fade-down" data-aos-delay="300">Current Openings</h2>
      </div>

      <Grid container spacing={8} className="opening-grid">

        {/* Job Card 1 */}
        <Grid size={{ xs: 12, md: 6 }} style={{overflow: "hidden"}}>
          <div className="job-card" data-aos="fade-right" >

            <div className="job-title">
              <h3>Senior Developer</h3>
            </div>

            <div className="short-info">
              <p>
                <strong>Location:</strong> Janakpuri, Delhi |
                <strong> Experience:</strong> 2+ Years |
                <strong> Employment Type:</strong> Full-Time
              </p>
            </div>

            <p className="description">
              <strong>Role Overview:</strong> We are looking for an experienced Senior Full Stack Developer to design, develop, and maintain scalable web applications for our educational platform. The ideal candidate should have strong expertise in React.js, Node.js, Express.js, and MongoDB along with experience in API integration, performance optimization, and deployment workflows.
            </p>

            <div className="button-container">
              <button className="apply-btn">Apply Now</button>
            </div>

          </div>
        </Grid>

        {/* Job Card 2 */}
        <Grid size={{ xs: 12, md: 6 }} style={{overflow: "hidden"}}>
          <div className="job-card" data-aos="fade-left">

            <div className="job-title">
              <h3>Academic Counselor</h3>
            </div>

            <div className="short-info">
              <p>
                <strong>Location:</strong> Uttam Nagar, Delhi |
                <strong> Experience:</strong> 3+ Years |
                <strong> Employment Type:</strong> Full-Time
              </p>
            </div>

            <p className="description">
              <strong>Role Overview:</strong> We are seeking an enthusiastic Academic Counselor to guide students and parents regarding courses, admissions, and career opportunities. The candidate should possess excellent communication skills and a student-first approach.
            </p>

            <div className="button-container">
              <button className="apply-btn">Apply Now</button>
            </div>

          </div>
        </Grid>

        
        {/* Job Card 1 */}
        <Grid size={{ xs: 12, md: 6 }} style={{overflow: "hidden"}}>
          <div className="job-card" data-aos="fade-right">

            <div className="job-title">
              <h3>Digital Marketing Executive</h3>
            </div>

            <div className="short-info">
              <p>
                <strong>Location:</strong> Janakpuri, Delhi |
                <strong> Experience:</strong> 2+ Years |
                <strong> Employment Type:</strong> Full-Time
              </p>
            </div>

            <p className="description">
              <strong>Role Overview:</strong> We are looking for an experienced Mathematics Faculty to deliver engaging lessons and help students build strong conceptual understanding and problem-solving skills for academic success.
            </p>

            <div className="button-container">
              <button className="apply-btn">Apply Now</button>
            </div>

          </div>
        </Grid>

        {/* Job Card 2 */}
        <Grid size={{ xs: 12, md: 6 }} style={{overflow: "hidden"}}>
          <div className="job-card" data-aos="fade-left">

            <div className="job-title">
              <h3>Mathematics Faculty</h3>
            </div>

            <div className="short-info">
              <p>
                <strong>Location:</strong> Uttam Nagar, Delhi |
                <strong> Experience:</strong> 3+ Years |
                <strong> Employment Type:</strong> Full-Time
              </p>
            </div>

            <p className="description">
              <strong>Role Overview:</strong> We are looking for a skilled and
              enthusiastic Mathematics Faculty to guide students and improve
              their conceptual understanding through engaging teaching methods.
            </p>

            <div className="button-container">
              <button className="apply-btn">Apply Now</button>
            </div>

          </div>
        </Grid>

      </Grid>
    </section>
  );
}

export default Openings;