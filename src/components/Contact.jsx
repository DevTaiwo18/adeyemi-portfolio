import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    // EmailJS parameters
    const serviceID = 'service_jjfan2a'; 
    const templateID = 'template_8kz05ze'; 
    const userID = 'KvkDEDZD3MYELZmfm'; 
    
    // Create current time string
    const now = new Date();
    const timeString = now.toLocaleString();
    
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: timeString,
      to_email: 'adeyemitaiwo24434@gmail.com'
    };
    
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after success
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        }, 3000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setIsSubmitting(false);
        setSubmitError(true);
      });
  };

  return (
    <section className="py-12 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Hire <span className="text-amber-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Interested in working together? Drop me a message below.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitSuccess ? (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
              <p>Thanks for reaching out! I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 p-6 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {submitError && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
                  <p>There was an error sending your message. Please try again later.</p>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 bg-amber-500 text-white font-medium rounded shadow hover:bg-amber-600 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;