import { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "../data/siteData";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ContactNew = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const serviceID = "service_jjfan2a";
    const templateID = "template_8kz05ze";
    const userID = "KvkDEDZD3MYELZmfm";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
      to_email: personalInfo.email,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setIsSubmitting(false);
        navigate("/sucess", {
          state: { name: formData.name, email: formData.email },
        });
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitError(true);
      });
  };

  return (
    <SectionWrapper id="contact" className="bg-neutral-950 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-medium mb-2 tracking-wide">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-50 mb-4">
            Let's work together
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Have a project in mind? Send me a message and I'll get back to you
            as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-neutral-300 text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-neutral-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder-neutral-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-neutral-300 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-neutral-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder-neutral-600"
                placeholder="Your email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-neutral-300 text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-neutral-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder-neutral-600 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {submitError && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-lg text-sm">
              There was an error sending your message. Please try again later.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-4 bg-amber-500 text-neutral-950 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* WhatsApp */}
        <div className="flex justify-center mt-8">
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            <FaWhatsapp className="w-5 h-5" />
            Text me on WhatsApp
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-neutral-500 hover:text-amber-500 transition-colors text-sm"
          >
            {personalInfo.email}
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-amber-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-amber-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-amber-500 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactNew;
