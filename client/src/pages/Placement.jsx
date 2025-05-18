import React, { useState } from 'react'
import { PlacementSlider } from '../components/sliders/PeopleSlider'
import { HiringCompanies } from './Home'

const Placement = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    interest: "Data Science With Analytics and AI"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your brochure will be sent to your email shortly.");
    setShowPopup(false);
    setFormData({ ...formData, name: "", email: "", mobile: "" });
  };

  return (
    <div className='lg:overflow-hidden'>
      <div className='flex items-center justify-center'>
        <img src="./images/placement.svg" alt="" loading="lazy" />
      </div>
      <section className='mt-36 mb-18'>
        <h1
          className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] border-8 border-orange-500 lg:w-2/5 m-auto'
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          Top Hiring Companies
        </h1>
        <HiringCompanies />
      </section>
      <div className='flex items-center justify-center'>
        <img src="./images/placement2.svg" alt="" loading='lazy' />
      </div>
      <section>
        <PlacementSlider />
      </section>
      <div>
        <HiringCompanies />
      </div>
      <div className='flex items-center justify-center my-20'>
        <img src="./images/placement3.svg" alt="" />
      </div>
      <div className='flex items-center justify-center'>
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
                readOnly
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-300"
            >
              Join Now
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </div>
    </div >
  )
}

export default Placement