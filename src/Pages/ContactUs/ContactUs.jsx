import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting form data goes here
    console.log(formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-us-page py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <h1 className="text-4xl text-center font-bold mb-8">Contact Us</h1>
      <hr className="lg:w-[30%] mx-auto border-1 mt-4" />

      {/* Flex container for contact info and form */}
      <div className="flex flex-col lg:flex-row gap-8 mt-20">
        {/* Contact Info Section */}
        <div className="contact-info w-full lg:w-1/2 text-center mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
          <p className="text-lg mb-2">1234 Business Road, Suite 500</p>
          <p className="text-lg mb-2">Chittagong, Pachlaish, 4232</p>
          <p className="text-lg mb-4">
            <span className="font-bold">Email:</span>{" "}
            tanjid.ahammed.01@gmail.com
          </p>
          <p className="text-lg mb-4">
            <span className="font-bold">Phone:</span> +8801844854013
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Send Us a Message
          </h3>

          {isSubmitted && (
            <div className="mb-4 text-center text-green-500">
              <p>Thank you for contacting us! We will get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="name" className="block text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="email" className="block text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="message" className="block text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-8 rounded-full hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
