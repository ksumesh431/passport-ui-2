import Link from 'next/link';

export default function PassportPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 text-white py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">New/Renewal Passport Application Services</h1>
          <p className="text-xl opacity-90">
            Your Trusted Partner for Smooth and Hassle-Free Passport Applications
          </p>
        </div>
      </div>

      {/* Overlapping Introduction Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
        <p className="text-lg text-gray-700">
          Whether you're applying for a new passport or need to renew your existing passport, DocoAid is here to make the process seamless, fast, and stress-free. With years of experience in handling passport applications, our expert team ensures that every detail is managed efficiently, from document preparation to submission. Trust us to guide you through the entire process, ensuring you meet all requirements and avoid unnecessary delays.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-8 mt-8 px-4">
        {/* Why Choose DocoAid Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-indigo-800 text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Why Choose DocoAid for Your Passport Application?</h2>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">1. Expertise You Can Rely On</h3>
                <p className="text-gray-700">Our team at DocoAid specializes in passport applications, both for first-time applicants and those looking to renew their passports. We are up-to-date with the latest government requirements and processing times to ensure your application is completed smoothly.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">2. Fast and Efficient Service</h3>
                <p className="text-gray-700">We understand that time is valuable, especially when you need to travel urgently. At DocoAid, we work with you to ensure that your passport application is processed quickly and efficiently, minimizing any waiting time.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">3. Comprehensive Guidance</h3>
                <p className="text-gray-700">Navigating the passport application process can be confusing. Our team will provide clear and easy-to-follow instructions on how to fill out forms, what documents you need, and how to prepare for your appointment. We're here to ensure you get it right the first time.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">4. End-to-End Support</h3>
                <p className="text-gray-700">From filling out the initial forms to submitting your documents, we assist you every step of the way. We even help you schedule appointments and ensure you're fully prepared for any interviews or additional requirements.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">5. Guaranteed Accuracy</h3>
                <p className="text-gray-700">With our thorough review process, we double-check every document, form, and detail to make sure everything is in order before submission. This reduces the chance of errors and delays that could result from incomplete or incorrect paperwork.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-indigo-800 text-white py-4 px-8">
            <h2 className="text-2xl font-bold">How the Process Works</h2>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">Step 1: Initial Consultation</h3>
                <p className="text-gray-700">We begin by discussing your needs, whether it's for a new passport or a renewal. Our experts will guide you through the specific requirements for your case.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">Step 2: Document Preparation</h3>
                <p className="text-gray-700">Next, we assist you in gathering all necessary documentation. This may include proof of identity, photos, address verification, and more. We ensure that your documents meet the exact specifications required by the authorities.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">Step 3: Application Submission</h3>
                <p className="text-gray-700">Once everything is in order, we help you submit your application. We'll guide you through the process of online submission or help schedule your appointment with the nearest passport office.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">Step 4: Tracking & Updates</h3>
                <p className="text-gray-700">After submission, we track your application and keep you updated on its progress. If any additional steps are required, we'll inform you promptly and provide the necessary assistance.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">Step 5: Passport Delivery</h3>
                <p className="text-gray-700">Once your passport is approved, we ensure it's delivered to your doorstep or you can collect it in person, depending on the chosen service.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Types Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-indigo-800 text-white py-4 px-8">
            <h2 className="text-2xl font-bold">New Passport vs. Passport Renewal: What You Need to Know</h2>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">New Passport Applications</h3>
                <p className="text-gray-700">If you are applying for a passport for the first time, you'll need to provide additional documentation, such as a birth certificate, proof of citizenship, and identity verification. Our team will ensure that all required documents are prepared and submitted properly.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">Passport Renewals</h3>
                <p className="text-gray-700">For a passport renewal, the process is generally quicker and more straightforward. However, we will still help verify that your current passport is eligible for renewal and ensure that all necessary documents are up to date.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Contact Us Today!</h2>
            <p className="text-lg text-gray-700 mb-8">
              Reach out to us via phone, email, or through our website to get started with your passport application. Let DocoAid help you get one step closer to your next adventure!
            </p>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">Start Your Application Now!</h3>
              <p className="text-lg font-medium text-indigo-900 mb-6">
                Ready to apply for your passport? Contact DocoAid for expert help and personalized support.
              </p>
              <Link
                href="/contactus"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg 
                  hover:bg-indigo-700 shadow-md hover:shadow-lg 
                  transition duration-200 ease-in-out cursor-pointer text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}