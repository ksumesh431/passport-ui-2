'use client';

import { useState } from 'react';
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      query: formData.message,
    };

    try {
      const response = await fetch("https://nowk6gpjo9.execute-api.ca-central-1.amazonaws.com/prod/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      alert("Query submitted! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to submit your query. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
      {/* Hero Section with Overlap */}
      <div className="relative mb-16">
        <div className="bg-indigo-900 text-white py-12 px-6 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-400 text-lg mb-3">Your Trusted Partner in Documentation</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Expert Document Services<br />
              For Your Peace of Mind
            </h1>
            <p className="text-xl opacity-90">
              From authentication to legalization, we guide you every step of the way
            </p>
          </div>
        </div>

        {/* Overlapping Contact Info Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0">
            <div className="flex items-center w-full sm:w-auto justify-center">
              <div className="bg-indigo-600 p-2 sm:p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="ml-3 text-gray-700 text-sm sm:text-base">437-350-2555</span>
            </div>
            <div className="flex items-center w-full sm:w-auto justify-center">
              <div className="bg-indigo-600 p-2 sm:p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="ml-3 text-gray-700 text-sm sm:text-base">info@docoaid.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-indigo-800 text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Enquire Now</h2>
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Full Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Email Address*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Message*</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Query'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;