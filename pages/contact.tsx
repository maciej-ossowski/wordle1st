import React from 'react';
import Head from 'next/head';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <>
      <Head>
        <title>Contact Us - Wordle1st</title>
        <meta name="description" content="Get in touch with the Wordle1st team" />
      </Head>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <p className="text-gray-600 mb-6">
            Have a question or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-carry1st-blue focus:border-carry1st-blue"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-carry1st-blue focus:border-carry1st-blue"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-carry1st-blue focus:border-carry1st-blue"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-carry1st-blue focus:border-carry1st-blue"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-carry1st-blue text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h2>
          <div className="space-y-3">
            <p className="text-gray-600">
              <strong className="text-gray-700">Email:</strong>{' '}
              <a href="mailto:support@carry1st.com" className="text-carry1st-blue hover:underline">
                support@carry1st.com
              </a>
            </p>
            <p className="text-gray-600">
              <strong className="text-gray-700">Follow us:</strong>{' '}
              Find us on social media for the latest updates and announcements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 