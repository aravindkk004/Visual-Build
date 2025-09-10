"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import RecentWorks from "./RecentWorks";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <>
      <div className="p-5">
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <Image
            src="/images/dashboard-banner.png"
            alt="Projects banner image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-8">
            <h1 className="text-3xl font-bold text-white">
              Welcome back, {user?.firstName || "Guest"} 👋
            </h1>
            <p className="text-white/80 mt-2">
              Continue where you left off or start something new today.
            </p>
          </div>
        </div>

        <div className="my-3">
          <h2 className="font-bold text-2xl">Recent Works</h2>
          <RecentWorks />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
