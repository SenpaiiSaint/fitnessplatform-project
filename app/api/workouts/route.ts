import { NextResponse } from "next/server";
import workouts from "@/data/simulatedWorkouts.json";

export async function GET() {
    return NextResponse.json(workouts);
}