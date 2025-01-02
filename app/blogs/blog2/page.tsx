import React from 'react';

const VisaApplication = () => {
  return (
    <section className="bg-primary text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">How to Apply for a Visa: A Step-by-Step Guide</h2>
        <p className="text-lg mb-4">
          Applying for a visa can be a daunting process, but with the right guidance, it becomes a manageable task. Here's a
          step-by-step guide:
        </p>
        <ol className="list-decimal pl-6 text-lg">
          <li>Determine the type of visa you need based on your purpose of travel.</li>
          <li>Prepare all required documents, such as proof of finances, passport-sized photos, etc.</li>
          <li>Schedule an appointment at the embassy or consulate.</li>
          <li>Pay the visa application fee and submit your documents.</li>
          <li>Wait for your visa approval and collect your passport with the visa stamp.</li>
        </ol>
      </div>
    </section>
  );
};

export default VisaApplication;
