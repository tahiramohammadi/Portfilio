
import { useState } from "react";
import { FaMapMarked, FaComment, FaPhoneVolume, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ReCAPTCHA_Site_KEY = "6Le2fNgrAAAAAPh9WJXneykMPfuQWQ_e7l-sjFPs";


const Contacts = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleCaptchaChange = (token) => {
    console.log("Captcha Token:", token);
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify the reCAPTCHA!");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/contacts", {
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
        "g-recaptcha-response": captchaToken, // if backend expects this
      });

      // Reset form
      setContact({ name: "", email: "", subject: "", message: "" });
      setCaptchaToken(null);

      console.log("Contact saved");
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error saving contact:", error);
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <section id="contacts" className="container py-10 mx-auto lg:px-35 md:px-35">
      <div className="flex flex-col items-center px-4 py-6">
        <h2 className="text-2xl font-bold mb-3">Get In Touch</h2>
        <p className="text-center w-180 text-gray-700">
          Feel free to get in touch with me. I am always open to discussing new projects,
          creative ideas, or opportunities to be part of your visions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:grid-cols-3">
        <div className="md:col-span-2 bg-white rounded-sm shadow-xl py-15 px-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left side */}
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-medium text-gray-700 py-1">
                    Name (Required)
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                    placeholder="Your Full-Name"
                    required
                    className="border border-gray-400 outline-none focus:border-[#F8B400] rounded-lg p-2 w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-medium text-gray-700 py-1">
                    Email (Required)
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={contact.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="border border-gray-400 outline-none focus:border-[#F8B400] rounded-lg p-2 w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject" className="font-medium text-gray-700 py-1">
                    Subject (Required)
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={contact.subject}
                    onChange={handleChange}
                    placeholder="Your Subject"
                    className="border border-gray-400 outline-none focus:border-[#F8B400] rounded-lg p-2 w-full"
                  />
                </div>
              </div>

              {/* Right side */}
              <div className="flex flex-col h-full lg:col-span-1">
                <label htmlFor="message" className="font-medium text-gray-700 py-1">
                  Message (Required)
                </label>
                <textarea
                  name="message"
                  value={contact.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="border border-gray-400 outline-none focus:border-[#F8B400] rounded-lg h-full p-2 w-full mb-4"
                />
              </div>

              {/* Captcha */}
              <div className="flex justify-center col-span-full items-center mt-3">
                <ReCAPTCHA sitekey={ReCAPTCHA_Site_KEY} onChange={handleCaptchaChange} />
              </div>

              {/* Submit button */}
              <div className="flex justify-end col-span-full mt-6">
                <button
                  type="submit"
                  className="border-1 bg-[#F8B400] w-full rounded text-white flex items-center justify-center shadow hover:bg-gray-900 transition"
                >
                  <span className="font-bold text-lg p-3">Send Message</span>
                </button>
              </div>
            </div>
          </form>
        </div>


    <div className="md:col-span-1 p-10 shadow-lg rounded-sm">
           <h2 className="font-bold  text-2xl py-2">What is your plan? <br/> Call me</h2>
              <p classname="text-gray-700 font-semibold">You can get my contact information here or you can see the urls of my pages on social networks from the top and the bottom of the page and find me there.</p>
        
              <div className="flex flex-col font-bold py-6">
              
                      <span className="flex py-2 "> <span className="text-[#F8B400]  text-xl  pr-2"><FaMapMarked/></span> Afghanistan, Kabul, 13 area</span>
            
                      <span className="flex  py-2 "> <span className="text-[#F8B400]  text-xl   pr-2"><FaComment /></span>tahiramohammadi2019@gamil.com</span>
                      <span className="flex  py-2"> <span className="text-[#F8B400]  text-xl  pr-2"><FaPhoneVolume /></span>+93748232511</span>
                
              </div>
          </div>

          </div>


    </section>
  );
};

export default Contacts;
