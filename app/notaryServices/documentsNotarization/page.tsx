import React from "react";
import ContactUsButton from '@/components/contact-us-button-component';

const DocumentNotarizationPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
      {/* Hero Section with Overlap */}
      <div className="relative mb-16">
        <div className="bg-primary text-white py-12 px-6 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Document Notarization</h1>
            <p className="text-xl opacity-90">
              Professional notarization services for all your important documents
            </p>
          </div>
        </div>

        {/* Overlapping Introduction Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
          <p className="text-lg text-gray-700">
            We offer notarization services for a wide range of documents, including contracts, agreements, 
            deeds, powers of attorney, and more. Our notary professionals are equipped to handle your 
            notarization needs with efficiency and accuracy.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Services Grid */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Our Notarization Services</h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Proof of Loss - for automobile",
                "Birth Certificate",
                "Certificate of Identification",
                "Certified Copies",
                "Consent to Travel Documents",
                "Deeds",
                "Mortgage Documents",
                "Photographs",
                "Power of Attorney",
                "Signatures",
                "Statutory Declarations",
                "Marriage certificate",
                "Adoption papers",
                "Passport",
                "PR Card"
              ].map((service, index) => (
                <div 
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  <p className="text-gray-700">Notarization of {service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Why Choose Our Notarization Services</h2>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700">
              Our experienced notary professionals ensure that your documents are properly notarized 
              according to all legal requirements. We understand the importance of accurate and timely 
              notarization in your personal and professional matters. With our service, you can trust 
              that your documents will be handled with the utmost care and precision.
            </p>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Get Started with DocoAid Today!</h2>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
              <p className="text-lg font-medium text-primary mb-6">
                Reach out to DocoAid for professional notarization services. Our team is ready to help you notarize your documents quickly and without hassle.
              </p>
              <ContactUsButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentNotarizationPage;