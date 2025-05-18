import React, { useState } from 'react';
import { PlacementSlider } from '../components/sliders/PeopleSlider';
import { HiringCompanies } from './Home';

const Placement = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    interest: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      data: [
        {
          Name: formData.name,
          Email: formData.email,
          Course: formData.interest,
          Mobile: formData.mobile
        }
      ]
    };

    try {
      const res = await fetch(
        'https://v1.nocodeapi.com/vijay1128/google_sheets/jqmEFeAmDaoWoCQi?tabId=Inquries%20Details',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', mobile: '', interest: '' });
      } else {
        alert('Error submitting the form');
      }
    } catch (err) {
      console.error(err);
      alert('Submission failed');
    }
  };

  return (
    <div className='w-full overflow-x-hidden'>
      {/* Hero section */}
      <div className='flex items-center justify-center px-4 sm:px-6 md:px-8'>
        <img
          src="./images/placement.svg"
          alt="Placement Hero"
          loading="lazy"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
        />
      </div>

      {/* Top Hiring Companies section */}
      <section className='mt-10 sm:mt-16 md:mt-24 lg:mt-36 mb-6 sm:mb-10 md:mb-14 lg:mb-18 px-4 sm:px-6 md:px-8'>
        <h1
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-5 sm:mt-8 md:mt-10 
                     font-[agrandir] border-4 sm:border-6 md:border-8 border-orange-500 
                     w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mx-auto py-3 md:py-4 lg:py-5'
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          Top Hiring Companies
        </h1>
        <div className="mt-6 sm:mt-8 md:mt-10">
          <HiringCompanies />
        </div>
      </section>

      {/* Second image section */}
      <div className='flex items-center justify-center px-4 sm:px-6 md:px-8'>
        <img
          src="./images/placement2.svg"
          alt="Placement Information"
          loading='lazy'
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
        />
      </div>

      {/* Placement slider section */}
      <section className="my-6 sm:my-10 md:my-12 lg:my-16">
        <PlacementSlider word={"Placement"} />
      </section>

      {/* Additional hiring companies section */}
      <div className="px-4 sm:px-6 md:px-8 my-6 sm:my-10 md:my-12 lg:my-16">
        <HiringCompanies />
      </div>

      {/* Third image section */}
      <div className='flex items-center justify-center my-8 sm:my-12 md:my-16 lg:my-20 px-4 sm:px-6 md:px-8'>
        <img
          src="./images/placement3.svg"
          alt="Placement Benefits"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
        />
      </div>

      {/* Form section */}
      <div className='mt-10 sm:mt-20 md:mt-40 lg:mt-60 px-4 sm:px-6 md:px-8 pb-10 sm:pb-16 md:pb-20'>
        {/* Form placeholder */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-medium'>Form coming soon</h1>

        {/* Uncomment this section to use the form */}
        {/*
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Download Our Brochure</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {["name", "email", "mobile"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                    {field === "name" ? "Full Name" : field === "email" ? "Email Address" : "Mobile Number"}
                  </label>
                  <input
                    type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={`Enter your ${field === "name" ? "full name" : field === "email" ? "email address" : "mobile number"}`}
                    required
                  />
                </div>
              ))}

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
                <input
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={handleChange}
                  placeholder="What are you interested in learning?"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-300"
              >
                Download Now
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        </div>
        */}
      </div>
    </div>
  );
};

export default Placement;