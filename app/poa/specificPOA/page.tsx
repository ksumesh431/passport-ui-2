import React from 'react';
import Link from 'next/link';
import ContactUsButton from '@/components/contact-us-button-component';
const SpecificPOAPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
            {/* Hero Section */}
            <div className="relative mb-16">
                <div className="bg-primary text-white py-12 px-6 rounded-3xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">Specific Power of Attorney</h1>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
                    <p className="text-lg text-gray-700">
                        A Specific Power of Attorney is a legal document that grants someone (the agent or attorney-in-fact)
                        the authority to act on behalf of the person granting the power (the principal) for specific tasks
                        or matters, as outlined in the document. Unlike a general power of attorney, which gives broad
                        authority to the agent, a specific power of attorney limits the agent's powers to certain defined activities.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
                {/* Key Features */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-primary text-white py-4 px-8">
                        <h2 className="text-2xl font-bold">Key Features</h2>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Limited Scope",
                                    content: "The authority given is restricted to specific actions, such as managing financial accounts, selling property, making healthcare decisions, or handling a single legal matter."
                                },
                                {
                                    title: "Duration",
                                    content: "The power granted can be limited in time, for instance, only valid for a few days, months, or until a specific task is completed."
                                },
                                {
                                    title: "Explicit Instructions",
                                    content: "The document will clearly define what the agent is allowed to do, and what actions are beyond their scope."
                                },
                                {
                                    title: "Revocability",
                                    content: "Like most powers of attorney, a specific power of attorney can usually be revoked by the principal at any time as long as they are mentally competent."
                                }
                            ].map((feature, index) => (
                                <div key={index} className="p-6 border border-gray-200 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                                    <p className="text-gray-700">{feature.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Uses Section */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-primary text-white py-4 px-8">
                        <h2 className="text-2xl font-bold">Common Uses</h2>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Selling a car or house",
                                "Handling a business transaction",
                                "Managing an estate during a specific time",
                                "Managing medical or financial matters when principal is unavailable"
                            ].map((use, index) => (
                                <div key={index} className="p-4 border border-gray-200 rounded-lg flex items-start">
                                    <span className="text-indigo-600 mr-3">•</span>
                                    <span className="text-gray-700">{use}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Examples Section */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-primary text-white py-4 px-8">
                        <h2 className="text-2xl font-bold">Examples of Specific POA</h2>
                    </div>
                    <div className="p-8">
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Real Estate Transaction",
                                    content: "A person grants authority to someone to sign documents on their behalf for the sale of their house, but only for that specific transaction and no other activities."
                                },
                                {
                                    title: "Medical Decisions",
                                    content: "A person may give an agent the authority to make healthcare decisions if they are unable to do so themselves, but the document could limit the scope to only certain medical procedures or situations."
                                }
                            ].map((example, index) => (
                                <div key={index} className="p-6 border border-gray-200 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3 text-primary">{example.title}</h3>
                                    <p className="text-gray-700">{example.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Important Note */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-primary text-white py-4 px-8">
                        <h2 className="text-2xl font-bold">Important Note</h2>
                    </div>
                    <div className="p-8">
                        <p className="text-lg text-gray-700">
                            In drafting a specific power of attorney, it's crucial to detail the specific powers being
                            granted and any limitations to avoid confusion or potential abuse.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center py-8">
                    <p className="text-lg text-gray-800 mb-4">
                        Need assistance in creating a Specific Power of Attorney? Let our experts help you draft
                        a precise and legally sound document that meets your exact requirements.
                    </p>
                    <ContactUsButton />
                </div>
            </div>
        </div>
    );
};

export default SpecificPOAPage;