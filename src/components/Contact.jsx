import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        
        // Redirect to success page
        navigate('/sucess', { 
          state: { 
            name: formData.name,
            email: formData.email 
          } 
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setIsSubmitting(false);
        setSubmitError(true);
      });
  };

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-left">
            <h2 className="text-4xl font-bold text-gray-900">
              Hire <span className="text-amber-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 my-4"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left column - Content and WhatsApp */}
              <div className="bg-gray-900 text-white p-8 md:p-12">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
                    <p className="text-gray-300 mb-8 text-lg">
                      Interested in working together? Fill out the form to start a conversation about your project. 
                      I'll get back to you as soon as possible.
                    </p>
                    
                    {/* Contact info */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-amber-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="text-white">adeyemitaiwo24434@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* WhatsApp button */}
                  <div className="mt-auto">
                    <p className="text-lg font-medium mb-3">Need immediate assistance?</p>
                    <a 
                      href="https://wa.me/2348026151366" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center w-full py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <svg 
                        className="w-5 h-5 mr-2" 
                        fill="currentColor" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                      </svg>
                      Text me on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Right column - Form */}
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <p>There was an error sending your message. Please try again later.</p>
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 bg-amber-500 text-white font-medium rounded-lg shadow hover:bg-amber-600 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;