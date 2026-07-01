import "./Contact.css";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
} from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="contact">

      <motion.div
        className="terminal"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <div className="terminal-header">

          <span className="dot red"></span>

          <span className="dot yellow"></span>

          <span className="dot green"></span>

          <h3>RAJ.OS TERMINAL v2.0</h3>

        </div>

        <div className="terminal-body">

          <p>&gt; connect</p>

          <p className="success">
            Connection Established...
          </p>

          <form>

            <input
              type="text"
              placeholder="Name"
            />

            <input
              type="email"
              placeholder="Email"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">

              <FiSend />

              Send Message

            </button>

          </form>

        </div>

      </motion.div>

      <div className="contact-links">

        <a
          href="https://github.com/Rajmaheta009"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/raj-maheta-8315652b6"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
          LinkedIn
        </a>

        <a href="mailto:rajmaheta2008@email.com">
          <FiMail />
          Email
        </a>

      </div>

    </section>
  );
}

export default Contact;