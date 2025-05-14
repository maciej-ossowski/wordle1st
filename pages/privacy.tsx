import React from 'react';
import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Wordle1st</title>
        <meta name="description" content="Privacy policy for Wordle1st users" />
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            At Wordle1st, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-6">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Game statistics and progress</li>
            <li>Account information (if you choose to create an account)</li>
            <li>Communication preferences</li>
            <li>Device and browser information</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Provide and improve our services</li>
            <li>Track game statistics and leaderboard rankings</li>
            <li>Communicate with you about updates and changes</li>
            <li>Ensure the security of our platform</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Storage</h2>
          <p className="text-gray-600 mb-6">
            Your information is stored securely and we implement appropriate measures to protect it from unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Cookies</h2>
          <p className="text-gray-600 mb-6">
            We use cookies to enhance your gaming experience and remember your preferences. You can control cookie settings through your browser.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Third-Party Services</h2>
          <p className="text-gray-600 mb-6">
            We may use third-party services to analyze game usage and improve our services. These providers have their own privacy policies.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
          <p className="text-gray-600 mb-6">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Access your personal information</li>
            <li>Request corrections to your data</li>
            <li>Delete your account and associated data</li>
            <li>Opt-out of communications</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have questions about this Privacy Policy or your personal information, please contact our privacy team through our support channels.
          </p>
        </div>
      </div>
    </>
  );
} 