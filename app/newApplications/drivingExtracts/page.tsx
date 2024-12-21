import Link from 'next/link';

export default function DrivingExtractsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 text-white py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Driving Extract Services</h1>
          <p className="text-xl opacity-90">
            Professional Assistance in Obtaining Your Driving Records
          </p>
        </div>
      </div>

      {/* Overlapping Introduction Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
        <p className="text-lg text-gray-700">
          Driving Extracts refer to official documents that summarize an individual's driving history, including records of traffic violations, licenses held, accidents, and other relevant driving details. These documents are often requested for various purposes such as visa applications, insurance, legal matters, or when moving to a new country to apply for a local driving license.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-8 mt-8 px-4">
        {/* Services Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-indigo-800 text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Our Driving Extract Services</h2>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                DocoAid offers assistance with obtaining Driving Extracts, especially for individuals who need them for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Immigration purposes</li>
                <li>Visa applications</li>
                <li>Legal requirements</li>
                <li>Insurance matters</li>
                <li>Local driving license applications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-indigo-800 text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Why Choose DocoAid?</h2>
          </div>
          <div className="p-8">
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              <li><strong>Expert Guidance:</strong> We help navigate through bureaucratic processes</li>
              <li><strong>Language Support:</strong> We assist with documents in various languages</li>
              <li><strong>Complete Accuracy:</strong> We ensure all information is correct and complete</li>
              <li><strong>Time-Saving:</strong> We handle the entire process on your behalf</li>
              <li><strong>Compliance Assurance:</strong> We ensure your driving extract meets all requirements of the requesting authority, whether it's an embassy, government agency, or private entity</li>
              <li><strong>Error-Free Process:</strong> Your driving extract is obtained without errors or omissions</li>
            </ul>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Get Your Driving Extract Today!</h2>
            <p className="text-lg text-gray-700 mb-8">
              Obtaining a driving extract can be a stressful and confusing task, particularly if there are language barriers or bureaucratic hurdles. DocoAid takes care of all the details, helping you avoid confusion and frustration.
            </p>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">Contact Us Today!</h3>
              <p className="text-lg font-medium text-indigo-900 mb-6">
                Ready to get your driving extract? Contact DocoAid for professional assistance and get your quote today!
              </p>
              <Link
                href="/contactus"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg 
                  hover:bg-indigo-700 shadow-md hover:shadow-lg 
                  transition duration-200 ease-in-out cursor-pointer text-center"
              >
                Get Your Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}