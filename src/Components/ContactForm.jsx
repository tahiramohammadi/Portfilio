
// import ReCAPTCHA from "react-google-recaptcha";
// import React from "react";

// const ContactForm = ({ contacts, onInputChange, onSubmit }) => {
//   return (
          
//     <form onSubmit={onSubmit} className="p-4 space-y-4">
 
//     <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-3">
         
//        <div className="flex-1 lg:col-span-2 grid grid-cols-2 gap-8  bg-white rounded-sm shadow-xl py-15 px-8 ">
//        <div className="flex flex-col space-y-4">
//        <div className="flex flex-col">
//        <label htmlFor="name" className="font-medium text-gray-700  py-1">Name (Required)</label>
//     <input
//       type="text"
//       name="name"
//       value={contacts.name}
//       onChange={onInputChange}
//       placeholder="Your Full-Name"
//       required
//       className="border border-gray-400 outline-none focus:border-[#F8B400] rounded-lg p-2 w-full"
//     />
//     </div>
//     <div className="flex flex-col">
//     <label htmlFor="name" className="font-medium text-gray-700  py-1">Email (required)</label>
//     <input
//       type="email"
//       name="email"
//       required
//       value={contacts.email}
//       onChange={onInputChange}
//       placeholder="Your Email"
//       className="border  border-gray-400 outline-none focus:border-[#F8B400] rounded-lg p-2 w-full "
//     />
//     </div>
//     <div className="flex flex-col">
//     <label htmlFor="name" className="font-medium text-gray-700  py-1">Subject (required)</label>
//     <input
//       type="text"
//       name="subject"
//       required
//       value={contacts.subject}
//       onChange={onInputChange}
//       placeholder="Your Subject"
//       className="border border-gray-400 outline-none focus:border-[#F8B400] rounded-lg p-2 w-full"
//     />
//     </div>
//    </div>
//    <div className="flex flex-col h-full lg:col-span-1">
//    <label htmlFor="name" className="font-medium text-gray-700  py-1">Message (required)</label>
// <textarea
//       type="text"
//       name="message"
//       value={contacts.message}
//       onChange={onInputChange}
//       placeholder="Your Message"
//       className="border    border-gray-400  outline-none focus:border-[#F8B400] rounded-lg h-full p-2 w-full mb-4"
//     />
 
//     </div>
//     <div className="flex justify-center col-span-full items-center mt-3">
//     <ReCAPTCHA
//               sitekey="YOUR_SITE_KEY"
//               onChange={(value) => setCaptchaValue(value)}
//           /> 
//           </div>
//           <div className="flex justify-end col-span-full mt-6">
// <button

// className=" border-1 bg-[#F8B400] w-full rounded  text-white flex items-center justify-center border-dotted shadow   shadow hover:bg-black transition"

// >
// <span className=" font-bold text-lg p-3">Send Message </span>

// </button>
// </div>
// </div>
// </div>


//   </form>
//   );
// };

// export default ContactForm;
