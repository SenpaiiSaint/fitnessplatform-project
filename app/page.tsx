"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl font-bold mb-4">Online Fitness Platform</h1>

      {!session ? (
        <>
          <p className="mb-4">Sign in to track your workouts and progress</p>
          <button
            onClick={() => signIn("google")}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Sign In with Google
          </button>

          <button
            onClick={() => signIn("github")}
            className="ml-4 px-4 py-2 bg-gray-800 text-white rounded"
          >
            Sign In with GitHub
          </button>
        </>
      ) : (
        <>
          <p className="mb-4">
            Welcome, {session.user?.name || session.user?.email}!
          </p>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Sign Out
          </button>
        </>
      )}
    </motion.div>
  );
}
