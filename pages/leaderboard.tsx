import React from 'react';
import Head from 'next/head';

export default function Leaderboard() {
  return (
    <>
      <Head>
        <title>Leaderboard - Wordle1st</title>
        <meta name="description" content="Check out the top Wordle1st players" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Leaderboard
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <p className="text-gray-600 text-center">Leaderboard coming soon...</p>
        </div>
      </div>
    </>
  );
} 