import React from 'react';
import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Wordle1st</title>
        <meta name="description" content="Terms and conditions for using Wordle1st" />
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Welcome to Wordle1st. By accessing or using our website and game, you agree to be bound by these terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing and using Wordle1st, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Game Rules</h2>
          <p className="text-gray-600 mb-6">
            Wordle1st is a daily word game where players have six attempts to guess a five-letter word. The game resets every 24 hours, providing a new word for all players. Each player gets one game per day.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Conduct</h2>
          <p className="text-gray-600 mb-6">
            Users must not attempt to cheat, hack, or manipulate the game in any way. Any attempt to compromise the integrity of the game will result in immediate termination of access.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            All content, including but not limited to the game mechanics, design, and code, is the property of Carry1st and is protected by intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these terms at any time. Continued use of the service after any modifications indicates your acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these terms, please contact us through our support channels.
          </p>
        </div>
      </div>
    </>
  );
} 