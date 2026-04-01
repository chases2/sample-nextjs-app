'use client';

import { motion } from 'motion/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-linear-to-b from-white to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl mb-6">
          Hello, World!
        </h1>
        <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Welcome to your new Next.js application. This is a simple demonstration of a production-ready build.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
            onClick={() => console.log('Hello clicked!')}
          >
            Get Started
          </button>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </motion.div>
    </main>
  );
}
