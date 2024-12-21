import React from 'react';

const TravelInsurance = () => {
  return (
    <section className="bg-indigo-900 text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Why You Need Travel Insurance</h2>
        <p className="text-lg mb-4">
          Travel insurance is an important part of any trip. It provides peace of mind in case of unexpected events. Here's
          why you should consider it:
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>Coverage for trip cancellations due to unforeseen events.</li>
          <li>Medical coverage for unexpected illness or accidents abroad.</li>
          <li>Protection against lost luggage and personal belongings.</li>
          <li>Assistance with emergency travel and accommodation needs.</li>
          <li>Financial support in case of trip delays or interruptions.</li>
        </ul>
      </div>
    </section>
  );
};

export default TravelInsurance;
