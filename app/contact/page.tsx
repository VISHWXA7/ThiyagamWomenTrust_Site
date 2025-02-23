import React from 'react';

const ContactPage = () => {
  return (
<div className="w-full">
      {/* Get in Touch Section */}
      <section className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center w-full">
        <div className="max-w-7xl w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-center">Get in touch</h2>
          <p className="text-lg text-gray-300 text-center mt-3">
            Want to get in touch? We'd love to hear from you. Here's how you can reach us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Talk to Sales */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="text-3xl">📞</div>
              <h3 className="text-lg font-semibold mt-3">Talk to the Trust</h3>
              <p className="text-gray-800 font-medium mt-1">Phone / Email</p>
              <p className="text-gray-600 mt-1">Landline: 0452 - 2602195</p>
              <p className="text-gray-600 mt-1">+91 - 9629625517, +91 - 7092590095</p>
              <p className="text-gray-600 mt-1">Email: challengedwomen@gmail.com</p>
            </div>

            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
  <div className="text-3xl">💬</div>
  <h3 className="text-lg font-semibold mt-3">Help Us Make a Difference</h3>
  
  {/* Volunteer Option */}
  <p className="text-gray-600 text-center mt-4">
    Want to volunteer? We would love to have you! 
  </p>

  {/* Volunteer Button */}
  <a href="https://forms.gle/your-google-form-link-for-volunteers" target="_blank" rel="noopener noreferrer">
    <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">
      Volunteer Now
    </button>
  </a>
</div>
        </div>
      </div>
      </section>

      {/* Map and Global Office Section */}
      <section className="py-20 px-6 flex flex-col items-center mb-10">
        <h2 className="text-xl text-purple-80 md:text-5xl font-bold text-center mb-16">
          Our Location
        </h2>
          {/* Map */}
          <div className="w-full h-[500px] bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.112020989982!2d78.0979579!3d9.924627800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf6fbfdc409b%3A0xbe87273d6e81b216!2sThiyagam%20Women%20Trust!5e0!3m2!1sen!2sin!4v1740239970784!5m2!1sen!2sinhttps://maps.google.com/maps?q=HubSpot,%202%20Canal%20Park,%20Cambridge,%20MA%2002141&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
