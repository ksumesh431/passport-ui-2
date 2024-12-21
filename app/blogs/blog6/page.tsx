import React from 'react';

const CulturalEtiquette = () => {
  return (
    <section className="bg-indigo-800 text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Cultural Etiquette When Traveling</h2>
        <p className="text-lg mb-4">
          Understanding and respecting local customs is key to having a positive travel experience. Here are a few cultural
          etiquette tips for travelers:
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>Always greet locals with a friendly smile and handshake.</li>
          <li>Be respectful of religious sites and practices.</li>
          <li>Dress modestly, especially in conservative countries.</li>
          <li>Learn a few key phrases in the local language to show respect.</li>
          <li>Ask permission before taking photos of people or their property.</li>
        </ul>
      </div>
    </section>
  );
};

export default CulturalEtiquette;
