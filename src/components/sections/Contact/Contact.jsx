import "./Contact.css";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">CONTACT</span>

        <h2>
          Let's <span>Connect</span>
        </h2>

        <p>
          Have an idea, project or opportunity? Feel free to reach out. I'm
          always excited to discuss AI, Full Stack Development and innovative
          software solutions.
        </p>
      </motion.div>

      <div className="contact-container">
        {/* LEFT */}

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Contact Information</h3>

          <div className="info-box">
            <FiMail />
            <div>
              <h4>Email</h4>
              <span>rajmaheta2008@gmail.com</span>
            </div>
          </div>

          <div className="info-box">
            <FiPhone />
            <div>
              <h4>Phone</h4>
              <span>+91 76002 30222</span>
            </div>
          </div>

          <div className="info-box">
            <FiMapPin />
            <div>
              <h4>Location</h4>
              <span>Gujarat, India</span>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Rajmaheta009"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/raj-maheta-8315652b6"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <input type="text" placeholder="Subject" />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            <FiSend />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
        //   href="https://www.linkedin.com/in/raj-maheta-8315652b6"
        // <a href="mailto:rajmaheta2008@email.com">