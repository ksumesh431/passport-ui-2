import React from 'react';

const PassportRenewal = () => {
  return (
    <section className="bg-indigo-900 text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">How to Renew Your Passport</h2>
        <p className="text-lg mb-4">
          If your passport is about to expire, it's important to renew it well in advance of any planned travels. Here’s how
          to renew your passport:
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>Check if your passport is eligible for renewal by reviewing the expiration date.</li>
          <li>Complete the passport renewal form online or at your nearest passport office.</li>
          <li>Submit your current passport, new passport photos, and any supporting documents.</li>
          <li>Pay the applicable renewal fees.</li>
          <li>Wait for your new passport to be processed and mailed to you.</li>
        </ul>
      </div>
    </section>
  );
};

export default PassportRenewal;
