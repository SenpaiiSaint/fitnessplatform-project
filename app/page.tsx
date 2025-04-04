"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-extrabold text-white mb-4">
        Online Fitness Platform
      </h1>
      {!session ? (
        <>
          <p className="text-white mb-4">
            Sign in to track your workouts and progress.
          </p>
          <button
            onClick={() => signIn()}
            className="px-6 py-3 bg-white text-blue-600 rounded-full shadow hover:bg-gray-200 transition"
          >
            Sign In
          </button>
        </>
      ) : (
        <>
          <p className="text-white mb-4">
            Welcome, {session.user?.name || session.user?.email}!
          </p>
          <nav className="space-x-4">
            <a
              href="/workouts"
              className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200 transition"
            >
              View Workouts
            </a>
            <a
              href="/profile"
              className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200 transition"
            >
              Profile
            </a>
          </nav>
          <button
            onClick={() => signOut()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </>
      )}
    </motion.div>
  );
}
