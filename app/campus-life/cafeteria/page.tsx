"use client";

import LocomotiveScrollWrapper from "../../../components/LocomotiveScrollWrapper";

export default function CafeteriaPage() {
  return (
    <LocomotiveScrollWrapper>
      <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
        <h1 className="text-4xl font-bold text-linkedin mb-6 text-center">Cafeteria</h1>
        <h2 className="text-2xl font-semibold text-linkedin mb-4 mt-10">Mess</h2>
        <p className="mb-6">
          The institute has its huge mess, which serves healthy and nutritious cuisines to its students. The college takes extra care of the hygiene and quality of food. The mess serves both meals and evening snacks. The hygienic mess provides all the vegetarian meals.
        </p>
        <h2 className="text-2xl font-semibold text-linkedin mb-4 mt-10">Canteen</h2>
        <p className="mb-6">
          The institute has its own canteen, which serves healthy and nutritious food to its students at subsidized rates.
        </p>
      </div>
    </LocomotiveScrollWrapper>
  );
} 