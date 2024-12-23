import Link from 'next/link';

export default function OCIPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
      {/* Hero Section with Overlap */}
      <div className="relative mb-16">
        <div className="bg-indigo-900 text-white py-12 px-6 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">OCI Application Assistance by DocoAid</h1>
            <p className="text-xl opacity-90">
              Secure Your Overseas Citizenship of India (OCI) with DocoAid's Expert Help
            </p>
          </div>
        </div>

        {/* Overlapping Introduction Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
          <p className="text-lg text-gray-700">
            The Overseas Citizenship of India (OCI) card is an important document for people of Indian origin who have acquired citizenship in a foreign country. The OCI provides several benefits, including visa-free travel to India, ease of business, and the ability to own property. However, the process of applying for an OCI can be complex and requires accurate documentation and careful attention to detail.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            At DocoAid, we specialize in providing professional assistance for OCI applications. Whether you're applying for the first time or renewing your OCI, we guide you through every step of the process, ensuring your application is complete, correct, and submitted on time.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-8 mt-8 px-4">
        {/* How DocoAid Helps Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-indigo-800 text-white py-4 px-8">
            <h2 className="text-2xl font-bold">How DocoAid Helps with OCI Applications</h2>
          </div>
          <div className="p-8">
            <ul className="list-disc list-inside text-gray-700 space-y-6">
              <li><strong>Guidance on Eligibility:</strong> DocoAid helps determine whether you are eligible for an OCI card. This is particularly important for people of Indian origin who hold foreign citizenship, or for foreign nationals married to Indian citizens or OCI holders.</li>
              <li><strong>Document Verification:</strong> One of the most crucial steps in the OCI application is ensuring that all documents are accurate and complete. DocoAid can review and verify your documents such as birth certificates, proof of Indian origin, foreign passports, and any other required paperwork.</li>
              <li><strong>Assistance with Online Application:</strong> DocoAid assists you in filling out the online OCI application form. This includes helping with the completion of required personal details and ensuring that the application is submitted properly.</li>
              <li><strong>Document Submission:</strong> DocoAid helps applicants gather the necessary documents and submit them to the correct Indian consulate or embassy. This ensures that the application reaches the appropriate authorities without errors or delays.</li>
              <li><strong>Application Tracking:</strong> After submission, DocoAid assists in tracking the progress of your OCI application, ensuring that it is processed smoothly and that you receive updates on the status.</li>
              <li><strong>Consultation and Support:</strong> DocoAid provides consultation services to answer questions about the OCI application process, including any complexities or special cases.</li>
              <li><strong>OCI Card Delivery:</strong> Once the OCI card is approved, DocoAid can assist in arranging the delivery of the card to the applicant or facilitate the collection process from the relevant embassy or consulate.</li>
            </ul>
          </div>
        </div>

        {/* Our OCI Application Services */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-indigo-800 text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Our OCI Application Services</h2>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">1. New OCI Applications</h3>
                <p className="text-gray-700 mb-3">If you or your family members are applying for the OCI card for the first time, we will guide you through the entire process:</p>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>Verify eligibility based on Indian origin</li>
                  <li>Complete and submit the application forms</li>
                  <li>Ensure all required supporting documents are gathered and in the correct format</li>
                  <li>Help you track the application status and follow-up on any necessary actions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">2. OCI Renewals</h3>
                <p className="text-gray-700">OCI cards are valid for a lifetime, but they may need to be renewed if certain information changes (such as your passport details). DocoAid helps with OCI renewals, ensuring that your documents are up-to-date and your application is submitted smoothly.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">3. OCI for Minor Children</h3>
                <p className="text-gray-700">For minor children of Indian origin, the OCI application process may include additional documentation, such as proof of the parent's Indian origin and the child's birth certificate. DocoAid ensures that your child's application is completed correctly and without hassle.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">4. Miscellaneous OCI Services</h3>
                <p className="text-gray-700">We also offer assistance with other OCI-related services, including:</p>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>Changing details (passport, address, name, etc.)</li>
                  <li>OCI card re-issue if your card is lost, stolen, or damaged</li>
                  <li>OCI status tracking and follow-up on applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Is the OCI Card Important? */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-indigo-800 text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Why Is the OCI Card Important?</h2>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 mb-4">The Overseas Citizenship of India card provides several benefits, including:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Multiple-entry, multi-purpose visa: You can travel to India without the need to apply for a visa each time</li>
              <li>No restrictions on the length of stay: OCI holders can stay in India for extended periods</li>
              <li>Ability to own property: OCI holders can purchase property in India, subject to specific regulations</li>
              <li>Employment and business opportunities: OCI holders can apply for employment in India and open businesses</li>
              <li>Cultural and educational benefits: OCI holders have access to certain educational, cultural, and social benefits</li>
              <li>Ease of travel: OCI cardholders can enter India without needing to apply for an Indian visa each time they travel</li>
            </ul>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Get Started with DocoAid Today!</h2>
            <p className="text-lg text-gray-700 mb-8">
              Navigating the OCI application process can be complex, but with DocoAid by your side, you'll have expert support to ensure everything goes smoothly. We provide fast, efficient, and reliable assistance with both new and renewal OCI applications.
            </p>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">Contact Us Today!</h3>
              <p className="text-lg font-medium text-indigo-900 mb-6">
                Ready to apply for your Overseas Citizenship of India (OCI) card? Reach out to DocoAid for expert help, and let us guide you through the application process seamlessly.
              </p>
              <Link
                href="/contactus"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg 
                  hover:bg-indigo-700 shadow-md hover:shadow-lg 
                  transition duration-200 ease-in-out cursor-pointer text-center"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}