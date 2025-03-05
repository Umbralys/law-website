import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'Select a service'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you shortly.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      service: 'Select a service'
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="bg-slate-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Reach out to schedule a consultation or learn more about how we can assist with your legal needs.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option disabled>Select a service</option>
                    <option>Corporate Law</option>
                    <option>Contract Law</option>
                    <option>Mergers & Acquisitions</option>
                    <option>Business Litigation</option>
                    <option>Intellectual Property</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
                </div>

                <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition duration-300"
                >
                Send Message
                </button>
                </form>
                </div>

                {/* Contact Information */}
                <div>
                <div className="bg-slate-900 text-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Our Office</h2>
                <div className="space-y-4">
                <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div>
                    <p className="font-medium text-lg text-blue-400">Address</p>
                    <address className="not-italic">
                        One Financial Plaza, Suite 2000<br />
                        New York, NY 10004
                    </address>
                    </div>
                </div>

                <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <div>
                    <p className="font-medium text-lg text-blue-400">Phone</p>
                    <p>(212) 555-1234</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                    <p className="font-medium text-lg text-blue-400">Email</p>
                    <p>info@morgan-associates.com</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                    <p className="font-medium text-lg text-blue-400">Office Hours</p>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                    </div>
                </div>
                </div>
                </div>

                {/* Map Placeholder - In a real app, you'd integrate Google Maps or another mapping service */}
                <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 font-medium">Map will be integrated here</p>
                </div>
                </div>
                </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white py-16">
                <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">What should I bring to my initial consultation?</h3>
                <p className="text-gray-700">For your first meeting, please bring any relevant documents such as contracts, business records, correspondence, or any other materials related to your legal matter. This will help us assess your situation more effectively.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">How are your legal fees structured?</h3>
                <p className="text-gray-700">Our fee structure varies depending on the type of legal service required. We offer hourly rates, flat fees for specific services, and retainer arrangements. During your initial consultation, we'll discuss the best payment structure for your needs.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">How quickly can I expect a response?</h3>
                <p className="text-gray-700">We strive to respond to all inquiries within 24 business hours. For urgent matters, please indicate this in your message or call our office directly.</p>
                </div>
                </div>
                </div>
                </div>
                </div>
                );
                };

                export default Contact;