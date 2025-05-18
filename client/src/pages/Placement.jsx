import React, { useState, useEffect } from 'react'
import { PlacementSlider } from '../components/sliders/PeopleSlider'
import { HiringCompanies } from './Home'
import FormfacadeEmbed from "@formfacade/embed-react";
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
    // console.log("Form submitted:", formData);
    // alert("Thank you! Your brochure will be sent to your email shortly.");
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
        setForm({ name: '', email: '', course: '' });
      } else {
        alert('Error submitting the form');
      }
    } catch (err) {
      console.error(err);
      alert('Submission failed');
    }

    // setShowPopup(false);
    // setFormData({ ...formData, name: "", email: "", mobile: "" });
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
        <PlacementSlider word={"Placement"} />
      </section>
      <div>
        <HiringCompanies />
      </div>
      <div className='flex items-center justify-center my-20'>
        <img src="./images/placement3.svg" alt="" />
      </div>
      <div className=' mt-60'>
        {/* <form onSubmit={handleSubmit}>
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

          <p className="text-xs text-gray-500 mt-4">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form> */}
        {/* <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/108273435865862627885/form/1FAIpQLSdOp8OreTIr0Bwruxhf4aUaJONNqSbtfzjy1AvllQp1aG0q7g/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log('Form submitted')}
        /> */}
        <h1 className='text-6xl text-center'>form coming soon</h1>
      </div>
    </div >
  )
}

export default Placement

const AnimatedForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    interest: 'Data Science With Analytics & A.I'
  });

  const [formStep, setFormStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [characterState, setCharacterState] = useState('idle');

  useEffect(() => {
    // Change character state based on form completion
    if (formStep === 0 && formData.name) {
      setCharacterState('happy');
    } else if (formStep === 1 && formData.email) {
      setCharacterState('excited');
    } else if (formStep === 2 && formData.mobile) {
      setCharacterState('jumping');
    } else if (isSubmitted) {
      setCharacterState('celebrate');
    } else {
      setCharacterState('idle');
    }
  }, [formStep, formData, isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Form submitted:", formData);
  };

  const nextStep = () => {
    if (formStep < 3) {
      setFormStep(formStep + 1);
    }
  };

  const prevStep = () => {
    if (formStep > 0) {
      setFormStep(formStep - 1);
    }
  };

  // Character animations
  const CharacterAnimation = ({ state }) => {
    const getCharacterStyle = () => {
      switch (state) {
        case 'idle':
          return 'animate-bounce';
        case 'happy':
          return 'animate-pulse';
        case 'excited':
          return 'animate-spin';
        case 'jumping':
          return 'animate-bounce';
        case 'celebrate':
          return 'animate-ping';
        default:
          return '';
      }
    };

    const getCharacterEmoji = () => {
      switch (state) {
        case 'idle':
          return '👋';
        case 'happy':
          return '😊';
        case 'excited':
          return '🎉';
        case 'jumping':
          return '🚀';
        case 'celebrate':
          return '🥳';
        default:
          return '👋';
      }
    };

    return (
      <div className="flex flex-col items-center mb-6">
        <div className={`text-6xl ${getCharacterStyle()}`}>
          {getCharacterEmoji()}
        </div>
        <div className="mt-2 text-center text-purple-700 font-medium">
          {state === 'idle' && 'Hi there! Ready to join us?'}
          {state === 'happy' && `Nice to meet you, ${formData.name}!`}
          {state === 'excited' && 'Great! We\'ll keep in touch!'}
          {state === 'jumping' && 'Almost there!'}
          {state === 'celebrate' && 'Welcome aboard!'}
        </div>
      </div>
    );
  };

  const renderFormStep = () => {
    switch (formStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.name}
                className={`px-4 py-2 rounded-md ${formData.name ? 'bg-purple-700 text-white' : 'bg-gray-300 text-gray-500'}`}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.email}
                className={`px-4 py-2 rounded-md ${formData.email ? 'bg-purple-700 text-white' : 'bg-gray-300 text-gray-500'}`}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.mobile}
                className={`px-4 py-2 rounded-md ${formData.mobile ? 'bg-purple-700 text-white' : 'bg-gray-300 text-gray-500'}`}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                Area of Interest
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {[
                  "Data Science With Analytics & A.I",
                  "Data Science with ML & A.I",
                  "Career Catalyst Pro With A.I",
                  "Mern/Java Full Stack Developer"
                ].map(el => (
                  <option key={el} value={el}>{el}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {isSubmitted ? (
          <div className="text-center py-8">
            <CharacterAnimation state={characterState} />
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Thank You!</h2>
            <p className="text-gray-700">Your application has been submitted successfully!</p>
            <button
              onClick={() => {
                setFormData({
                  name: '',
                  email: '',
                  mobile: '',
                  interest: 'Data Science With Analytics & A.I'
                });
                setFormStep(0);
                setIsSubmitted(false);
              }}
              className="mt-6 px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition duration-300"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <>
            <CharacterAnimation state={characterState} />
            <h2 className="text-xl font-bold text-center text-purple-700 mb-6">Join Our Program</h2>
            <div className="mb-4">
              <div className="flex items-center">
                {[0, 1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${step <= formStep ? 'bg-purple-700 text-white' : 'bg-gray-300 text-gray-700'
                        }`}
                    >
                      {step + 1}
                    </div>
                    {step < 3 && (
                      <div
                        className={`h-1 w-12 ${step < formStep ? 'bg-purple-700' : 'bg-gray-300'
                          }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-600">Personal</span>
                <span className="text-xs text-gray-600">Email</span>
                <span className="text-xs text-gray-600">Contact</span>
                <span className="text-xs text-gray-600">Interest</span>
              </div>
            </div>
            <form onSubmit={handleSubmit} action="https://formsubmit.co/vk.12894545@email.com" method="POST" className="border border-gray-200 rounded-md p-4 shadow-sm">
              {renderFormStep()}
            </form>
          </>
        )}
      </div>
    </div>
  );
};
