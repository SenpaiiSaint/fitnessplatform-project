"use client";

import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

export default function ProfilePage() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <motion.div
                className="min-h-screen flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ opacity: 0.5 }}
            >
                <p>Please sign in to access your profile</p>
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
            <h1 className="text-3xl font-bold mb-6">Profile</h1>
            <p className="mb-4">Name: {session.user?.name}</p>
            <p className="mb-4">Email: {session.user?.email}</p>

            {/* Extend with other user info like progress goals etc */}

        </motion.div>
    );
}