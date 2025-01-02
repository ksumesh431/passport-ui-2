import Link from 'next/link';
import ContactUsButton from '@/components/contact-us-button-component';

export default function VisaPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
      {/* Hero Section with Overlap */}
      <div className="relative mb-16">
        <div className="bg-primary text-white py-12 px-6 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Visa Application Assistance</h1>
            <p className="text-xl opacity-90">
              Simplify Your Visa Application Process with DocoAid
            </p>
          </div>
        </div>

        {/* Overlapping Introduction Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
          <p className="text-lg text-gray-700">
            Planning to travel abroad for business, study, vacation, or family matters? Navigating the visa application process can be complex and time-consuming, but DocoAid is here to guide you every step of the way. Whether you're applying for a tourist visa, business visa, student visa, or any other type, our team of experts is ready to provide personalized support and ensure your application is accurate, complete, and submitted on time.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-8 mt-8 px-4">
        {/* Visa Types Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Our Visa Application Services</h2>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">1. Tourist Visas</h3>
                <p className="text-gray-700">Planning to explore a new country? A tourist visa allows you to visit your destination for vacation, sightseeing, or leisure. DocoAid helps you navigate the specific requirements for tourist visas, ensuring you have the correct documentation and a clear itinerary.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">2. Business Visas</h3>
                <p className="text-gray-700">Whether you're attending meetings, conferences, or expanding your business internationally, a business visa is essential. We help prepare your business visa application, making sure you provide all required documents.</p>
              </div>


              <div>
                <h3 className="text-xl font-bold text-primary mb-3">3. Student Visas</h3>
                <p className="text-gray-700">If you're planning to study abroad, a student visa is essential for entering most countries. DocoAid helps you understand and meet the requirements, including proof of acceptance into a recognized institution, financial support, and more.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">4. Work Visas</h3>
                <p className="text-gray-700">For professionals moving abroad for employment, a work visa is necessary. DocoAid assists with gathering the required employment documents, work contracts, and sponsorship letters to help streamline your visa application process.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">5. Family Visas</h3>
                <p className="text-gray-700">If you're visiting or joining family members abroad, DocoAid can help with family reunification visas. We ensure all required documentation is in place to prove your relationship and meet the specific requirements for the country you are applying to.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">6. Transit Visas</h3>
                <p className="text-gray-700">If you're passing through a country on your way to a final destination, a transit visa might be required. DocoAid helps you gather the necessary documents to apply for a short-term transit visa, ensuring a smooth stopover in your travel.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Process Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">How DocoAid Helps with Your Visa Application</h2>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              <div className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Step 1: Initial Consultation</h3>
                  <p className="text-gray-700">We start with an in-depth consultation to understand your travel purpose, destination country, and any specific visa requirements. Our team helps identify which visa you need and provides an overview of the application process.</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Step 2: Document Checklist and Preparation</h3>
                  <p className="text-gray-700">We provide a personalized checklist based on the specific visa type you're applying for. DocoAid will guide you on how to gather all necessary documents, such as financial statements, travel itineraries, proof of accommodation, employment letters, and more. We ensure that all documents are in the correct format and meet the embassy's standards.</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Step 3: Application Form Filling</h3>
                  <p className="text-gray-700">Our experts assist you with filling out your visa application form, ensuring that all information is accurate and complete. We double-check every detail to avoid common errors that could lead to delays or rejections.</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Step 4: Review and Submission</h3>
                  <p className="text-gray-700">Once everything is prepared, DocoAid carefully reviews your entire application, documents, and forms. After confirming all requirements are met, we submit your visa application to the appropriate embassy or consulate on your behalf, ensuring timely submission.</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Step 5: Interview Preparation and Appointment Scheduling</h3>
                  <p className="text-gray-700">Some visa applications require an interview or biometric appointment. DocoAid helps schedule and prepare you for your interview, ensuring you know what to expect and how to present yourself for a smooth and successful process.</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Step 6: Follow-up and Tracking</h3>
                  <p className="text-gray-700">After submission, we track your visa application's progress and provide updates as necessary. If any additional information or documentation is required, we assist you promptly to ensure everything is on track.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Countries Supported Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Visa Types and Countries Supported</h2>
          </div>
          <div className="p-8">
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li><strong>Schengen Visa (Europe):</strong> For travel to multiple European countries in the Schengen Area.</li>
              <li><strong>United States (U.S.) Visa:</strong> For tourist, business, or student visas to the U.S.</li>
              <li><strong>United Kingdom (UK) Visa:</strong> For UK tourist, work, or study visas.</li>
              <li><strong>Canadian Visa:</strong> For Canadian tourist, work, or permanent residence visas.</li>
              <li><strong>Australian Visa:</strong> For travel, student, or work visas to Australia.</li>
              <li><strong>Tourist and Business Visas:</strong> For countries like Dubai, Saudi Arabia, Japan, India, and many others.</li>
            </ul>
          </div>
        </div>

        {/* Post-Visa Services Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Post-Visa Services</h2>
          </div>
          <div className="p-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-3">Extended Stay or Visa Renewals</h3>
              <p className="text-gray-700">
                If you need help extending your visa or applying for a renewal, DocoAid can guide you through the process.
              </p>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Start Your Visa Application Today!</h2>
            <p className="text-lg text-gray-700 mb-8">
              No matter where you're planning to travel, DocoAid is here to help make your visa application process simple, efficient, and stress-free.
            </p>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
              <p className="text-lg font-medium text-primary mb-6">
                Ready to start your visa application? Reach out to DocoAid for expert help and personalized support.
              </p>
              <ContactUsButton/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}