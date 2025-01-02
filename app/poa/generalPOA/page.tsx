import React from 'react';
import Link from 'next/link';
import ContactUsButton from '@/components/contact-us-button-component';
const GeneralPOAPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="bg-primary text-white py-12 px-6 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">General Power of Attorney</h1>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
          <p className="text-lg text-gray-700">
            A General Power of Attorney (GPA) is a legal document that grants an individual (the "agent" or "attorney-in-fact")
            the authority to act on behalf of another person (the "principal") in a variety of financial, legal, or personal matters.
            The principal grants this authority to the agent, allowing them to make decisions and take actions on the principal's
            behalf when they are unable or unavailable to do so themselves.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Scope Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Scope of Powers</h2>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700">
              The scope of the powers granted in a General Power of Attorney can vary, but it is typically broad and allows
              the agent to handle tasks such as managing finances, signing documents, handling real estate transactions,
              managing business affairs, and dealing with legal matters. For broad, comprehensive powers covering various
              aspects such as property management, financial decisions, or business operations.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Powers Include:</h3>
              <ul className="space-y-2">
                {[
                  "Handling bank accounts and investments",
                  "Paying bills and taxes",
                  "Buying, selling, and managing real estate",
                  "Managing business operations",
                  "Making healthcare decisions (if included)"
                ].map((power, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span className="text-gray-700">{power}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* When to Consider Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">When Should You Consider a GPA?</h2>
          </div>
          <div className="p-8">
            <div className="space-y-4">
              {[
                {
                  title: "Travel or Extended Absences",
                  content: "If the principal is going to be away for a long period, they might grant a General Power of Attorney to someone they trust to manage their affairs."
                },
                {
                  title: "Health Concerns",
                  content: "If the principal is facing health issues that may lead to incapacity (such as a serious illness or accident), a GPA can ensure that their financial and legal matters continue to be managed without disruption."
                },
                {
                  title: "Business Needs",
                  content: "Business owners may use a General Power of Attorney to allow someone to manage their business interests while they are unavailable."
                }
              ].map((item, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Limitations Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Limitations and Risks</h2>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700">
              Potential for Abuse: Since the agent has broad powers, there is a risk of abuse.
              It is essential to choose an agent who is trustworthy and reliable.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-8">
          <p className="text-lg text-gray-800 mb-4">
            If you need assistance in creating a General Power of Attorney, DocoAid can help. We offer
            personalized guidance to ensure your document is legally sound, comprehensive, and meets your
            specific needs. Whether you need help drafting the document, understanding the scope of powers,
            or ensuring that the document is properly executed, our team of legal professionals is here to
            assist you every step of the way.
          </p>
          <ContactUsButton />
        </div>
      </div>
    </div>
  );
};

export default GeneralPOAPage;