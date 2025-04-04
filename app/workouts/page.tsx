"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import WorkoutCard from "../components/WorkoutCard";

interface Workout {
  id: number;
  name: string;
  duration: string;
  trainer: string;
}

export default function WorkoutsPage() {
  const { data: session } = useSession();
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    fetch("/api/workouts")
      .then((res) => res.json())
      .then(setWorkouts);
  }, []);

  if (!session) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: 0.5 }}
      >
        <p>Please sign in to view workouts.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="p-8 bg-gray-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ opacity: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Workouts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{workouts.map((w) => (
        <WorkoutCard key={w.id} workout={w} />
      ))}
      </div>
    </motion.div>
  );
}
