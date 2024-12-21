import React from 'react';
import Link from 'next/link';
const PowerOfAttorneyPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
            {/* Hero Section */}
            <div className="relative mb-16">
                <div className="bg-indigo-900 text-white py-12 px-6 rounded-3xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">Power of Attorney Drafting</h1>
                        <p className="text-xl opacity-90">
                            Expert POA drafting services for overseas clients
                        </p>
                    </div>
                </div>

                {/* Overlapping Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
                    <p className="text-lg text-gray-700">
                        At DocoAid, we specialize in drafting precise and legally sound Powers of Attorney (POA)
                        tailored to meet the diverse needs of our overseas clients. Whether you need a general POA
                        granting broad powers or a specific POA for a particular transaction, our experts ensure
                        that every document is meticulously crafted to safeguard your interests.
                    </p>
                </div>
            </div>

            {/* Why Essential Section */}
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-indigo-800 text-white py-4 px-8">
                        <h2 className="text-2xl font-bold">Why a Properly Drafted Power of Attorney is Essential</h2>
                    </div>
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Legal Validity Across Jurisdictions",
                                content: "Each country has specific legal requirements for a POA to be recognized. A properly drafted POA ensures compliance with relevant legal standards."
                            },
                            {
                                title: "Clarity and Precision",
                                content: "An accurate POA explicitly outlines the scope of powers granted to the agent, avoiding ambiguity in managing property, financial transactions, or specific legal matters."
                            },
                            {
                                title: "Protection of Interests",
                                content: "A precisely drafted document includes safeguards to protect your interests, minimize risks, and prevent misuse of power."
                            },
                            {
                                title: "Convenience and Peace of Mind",
                                content: "A correctly prepared POA enables seamless management of your affairs when you're overseas, offering peace of mind."
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-6 border border-gray-200 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-indigo-800">{item.title}</h3>
                                <p className="text-gray-700">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-indigo-800 text-white py-4 px-8">
                        <h2 className="text-2xl font-bold">Why Choose DocoAid for Your POA Drafting?</h2>
                    </div>
                    <div className="p-8">
                        <ul className="space-y-4">
                            {[
                                "Expertise in International Legal Standards: Our team understands the nuances of drafting POAs that comply with international laws.",
                                "Tailored Solutions: We craft each POA to suit your unique requirements.",
                                "Attention to Detail: From defining scope to including specific security clauses, we ensure a robust POA."
                            ].map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    <span className="text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center py-8">
                    <p className="text-xl text-gray-800 mb-4">
                        Secure your interests and simplify the management of your affairs with a professionally drafted Power of Attorney.
                    </p>
                    <Link
                        href="/contactus"
                        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg 
    hover:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5
    transition-all duration-300 ease-in-out cursor-pointer text-center
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PowerOfAttorneyPage;