import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS with Public Key
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setSubmitStatus("error");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">📩 Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to discussing new opportunities, collaborations, or just having a chat.
        </p>

        <div className="contact-content">
          {/* Left: Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Email: adhikariianup10@gmail.com</p>
            <p>Location: Youngstown, Ohio, USA</p>
          </div>

          {/* Right: Contact Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <p className="status-message success">✅ Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="status-message error">❌ Failed to send message. Try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}