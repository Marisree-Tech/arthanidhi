"use client";
import React, { useState } from "react"; 
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Form Card */}
      <div className="max-w-6xl mx-auto flex justify-evenly bg-[#FFC839] rounded-3xl  rounded-tl-none p-12 relative">
        {/* Form Content */}

        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Take a 5-Minute
            <br />
            Survey!
          </h2>

          <p className="text-gray-700 mb-6 w-3/4 font-medium">
            ArthaNidhi is exploring the challenges businesses face in scaling
            up. Your feedback will help us design a fund and ecosystem that
            truly supports growth.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 rounded-xl shadow-xl  rounded-tl-none border border-gray-300"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="business">Business Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 rounded-xl shadow-xl  rounded-tl-none border border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="mt-5 rounded-xl shadow-xl float-right bg-[#FD8641]  rounded-tl-none text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-200"
          >
            TAKE SURVEY
          </button>
        </form>
      </div>

      {/* Additional Contact Info */}
      {/* <div className="mt-16 text-center">
        <Card className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="h-6 w-6 text-indigo-600" />
            <h3 className="text-xl font-semibold">
              Need Immediate Assistance?
            </h3>
          </div>
          <p className="text-gray-600">
            Our team is available Monday through Friday, 9:00 AM to 6:00 PM EST.
            We typically respond to all inquiries within 24 hours.
          </p>
        </Card>
      </div> */}
    </>
  );
};

export default ContactForm;
