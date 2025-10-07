
import { useState } from "react";
import { FaMapMarked, FaComment, FaPhoneVolume } from "react-icons/fa";
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
        "g-recaptcha-response": captchaToken,
      });

      setContact({ name: "", email: "", subject: "", message: "" });
      setCaptchaToken(null);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error saving contact:", error);
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <section id="contacts" className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Feel free to get in touch with me. I am always open to discussing new projects,
          creative ideas, or opportunities to be part of your visions.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Two Column Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Name (Required)
                </label>
                <input
                  type="text"
                  name="name"
                  value={contact.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                  className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-md p-2 focus:border-[#F8B400] outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Email (Required)
                </label>
                <input
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-md p-2 focus:border-[#F8B400] outline-none"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="font-medium text-gray-700 dark:text-gray-200 mb-1">
                Subject (Required)
              </label>
              <input
                type="text"
                name="subject"
                value={contact.subject}
                onChange={handleChange}
                placeholder="Your Subject"
                required
                className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-md p-2 w-full focus:border-[#F8B400] outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="font-medium text-gray-700 dark:text-gray-200 mb-1">
                Message (Required)
              </label>
              <textarea
                name="message"
                value={contact.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
                className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-md p-2 w-full focus:border-[#F8B400] outline-none"
              ></textarea>
            </div>

            {/* Captcha */}
            <div className="flex justify-center">
              <ReCAPTCHA sitekey={ReCAPTCHA_Site_KEY} onChange={handleCaptchaChange} />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#F8B400] text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="font-bold text-2xl mb-3 text-gray-900 dark:text-gray-100">
            What’s your plan? <br /> Call me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            You can get my contact information here or find me on my social networks.
          </p>
          <div className="space-y-4 text-gray-800 dark:text-gray-200 font-medium">
            <p className="flex items-center">
              <FaMapMarked className="text-[#F8B400] text-xl mr-2" /> Afghanistan, Kabul, 13 area
            </p>
            <p className="flex items-center break-words">
              <FaComment className="text-[#F8B400] text-xl mr-2" /> mohammadit578@gmail.com
            </p>
            <p className="flex items-center">
              <FaPhoneVolume className="text-[#F8B400] text-xl mr-2" /> +93 748 232 511
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;