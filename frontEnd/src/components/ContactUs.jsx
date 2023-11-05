import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 h-full py-10">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message here..."
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
              Send Message
            </button>
          </div>

          <div>
            <div className="bg-blue-500 text-white rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">
                Contact Information
              </h3>
              <p>
                If you have any questions or need assistance, please don't
                hesitate to contact us using the information below.
              </p>
              <div className="mt-4">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  contact@yourwebsite.com
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +1 (123)
                  456-7890
                </p>
                <p>
                  <span className="font-semibold">Address:</span> 123 Main St,
                  City, Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
