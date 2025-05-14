import React from 'react';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Wordle1st</title>
        <meta name="description" content="Learn more about Wordle1st and our mission" />
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Welcome to Wordle1st, a unique word-guessing game brought to you by Carry1st. Our mission is to bring engaging and entertaining gaming experiences to players across Africa and beyond.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Wordle1st was created as a special edition of the popular word game, designed to bring together gaming enthusiasts in a daily challenge that tests vocabulary and deduction skills. Each day presents a new word to guess, creating a shared experience for our growing community of players.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-6">
            We believe in the power of games to connect people and create meaningful experiences. Our goal is to continue developing and delivering high-quality gaming content that entertains, challenges, and brings people together.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6">
            Whether you're a casual player or a word game enthusiast, Wordle1st offers a daily opportunity to challenge yourself and compete with friends. Join our growing community and experience the joy of solving the daily word puzzle.
          </p>
        </div>
      </div>
    </>
  );
} 