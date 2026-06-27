import "./Contact.css";

import { useState } from "react";
import axios from "axios";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import { API_URL } from "../../../Config/api";

import messageIcon from "../../../assets/msg-icon.png";
import mailIcon from "../../../assets/mail-icon.png";
import phoneIcon from "../../../assets/phone-icon.png";
import locationIcon from "../../../assets/location-icon.png";
import whiteArrow from "../../../assets/white-arrow.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleForm = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleBackend = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      await axios.post(`${API_URL}/contact`, formData);

      setStatus({
        type: "success",
        message: "✅ Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      setStatus({
        type: "error",
        message: "❌ Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="contact-section"
      id="contact"
      style={{ overflow: "hidden" }}
    >
      <Grid container spacing={4}>
        {/* LEFT SECTION */}

        <Grid size={{ xs: 12, md: 6 }}>
          <div
            className="contact-details"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3>
              Send us a message
              <img src={messageIcon} alt="Message Icon" />
            </h3>

            <p>
              Feel free to reach out through our contact form or use the details
              below. We would love to hear from you.
            </p>

            <div className="icon-section">
              <h4>
                <img src={mailIcon} alt="Mail Icon" />
                Deepanshuarya80@gmail.com
              </h4>

              <h4>
                <img src={phoneIcon} alt="Phone Icon" />
                +91 9999536528
              </h4>

              <h4>
                <img src={locationIcon} alt="Location Icon" />
                West Delhi, India
              </h4>
            </div>
          </div>
        </Grid>

        {/* RIGHT SECTION */}

        <Grid size={{ xs: 12, md: 6 }}>
          <form
            onSubmit={handleBackend}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              required
              value={formData.name}
              onChange={handleForm}
            />

            <TextField
              fullWidth
              label="Phone Number"
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleForm}
            />

            <TextField
              fullWidth
              label="Your Email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleForm}
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              name="message"
              required
              value={formData.message}
              onChange={handleForm}
            />

            {status.message && (
              <p className={`form-status ${status.type}`}>{status.message}</p>
            )}

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit Now"}

              {!loading && <img src={whiteArrow} alt="Arrow Icon" />}
            </button>
          </form>
        </Grid>
      </Grid>
    </section>
  );
}

export default Contact;
