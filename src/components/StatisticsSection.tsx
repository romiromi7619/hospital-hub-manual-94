
import React from "react";

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5000+</div>
            <div className="text-gray-600">Patients Served</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-gray-600">Medical Professionals</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600">Specializations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
