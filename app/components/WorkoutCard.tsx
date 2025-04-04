"use client";

import { motion } from "framer-motion";

interface Workout {
    id: number;
    name: string;
    duration: string;
    trainer: string;
}

export default function WorkoutCard({ workout }: { workout: Workout }) {
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-xl font-semibold mb-2">{workout.name}</h2>
            <p className="text-gray-600">Duration: {workout.duration}</p>
            <p className="text-gray-600">Trainer: {workout.trainer}</p>
        </motion.div>
    );
}