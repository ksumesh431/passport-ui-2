import React from 'react';

const TravelTips = () => {
  return (
    <section className="bg-indigo-900 text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Essential Travel Tips for Beginners</h2>
        <p className="text-lg mb-4">
          Traveling can be overwhelming if you're new to it. Here are some essential tips to make your travel more
          enjoyable and stress-free:
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>Always carry a photocopy of important documents.</li>
          <li>Use local transportation apps for convenience.</li>
          <li>Book your accommodations in advance during peak seasons.</li>
          <li>Learn basic phrases of the local language.</li>
          <li>Pack light and smart to avoid excess baggage fees.</li>
        </ul>
      </div>
    </section>
  );
};

export default TravelTips;
