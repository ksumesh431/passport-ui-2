import Link from 'next/link';
import ContactUsButton from '@/components/contact-us-button-component';

const AffidavitsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
      {/* Hero Section with Overlap */}
      <div className="relative mb-16">
        <div className="bg-primary text-white py-12 px-6 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Affidavit Services</h1>
            <p className="text-xl opacity-90">
              Professional Drafting and Notarization of Legal Affidavits
            </p>
          </div>
        </div>

        {/* Overlapping Introduction Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
          <p className="text-lg text-gray-700">
            Whether you need an affidavit for personal or business purposes, our team can assist in 
            drafting clear and legally sound affidavits tailored to your needs. We ensure that each 
            document is properly notarized, providing the legal assurance you require.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Add other sections here as needed */}

        {/* Get Started Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Get Started with DocoAid Today!</h2>
            {/* <p className="text-lg text-gray-700 mb-8">
              Whether you need an affidavit for legal, personal, or business purposes, DocoAid is here to guide you through the process. Our team ensures that your affidavit is drafted accurately and notarized properly, making the process easy and efficient.
            </p> */}

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
              <p className="text-lg font-medium text-primary mb-6">
                Reach out to DocoAid for professional assistance with your affidavit needs. Our team is ready to help you draft and notarize the document you require, quickly and without hassle.
              </p>
              <ContactUsButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffidavitsPage;