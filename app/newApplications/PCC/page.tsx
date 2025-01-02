
import ContactUsButton from '@/components/contact-us-button-component';
const PCCPage = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
        {/* Hero Section with Overlap */}
        <div className="relative mb-16">
          <div className="bg-primary text-white py-12 px-6 rounded-3xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Police Clearance Certificate Services</h1>
              <p className="text-xl opacity-90">
                Your Trusted Partner for Obtaining Police Clearance Certificates
              </p>
            </div>
          </div>
  
          {/* Overlapping Introduction Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
            <p className="text-lg text-gray-700">
              Whether you’re immigrating, applying for a job, traveling abroad, or simply fulfilling a legal requirement, obtaining a Police Clearance Certificate (PCC) is often a crucial part of the process. At DocoAid, we specialize in assisting individuals with acquiring their PCC quickly and efficiently. We understand the importance of this document and ensure that your application is processed without unnecessary delays, guiding you through the entire process with ease.
            </p>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* What is a PCC? Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-primary text-white py-4 px-8">
              <h2 className="text-2xl font-bold">What is a Police Clearance Certificate (PCC)?</h2>
            </div>
            <div className="p-8">
              <p className="text-lg text-gray-700">
                A Police Clearance Certificate is an official document issued by a government authority that verifies whether you have any criminal records or pending legal matters. This certificate is often required for:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-4">
                <li>Immigration applications (permanent residency, citizenship)</li>
                <li>Employment (especially for positions that involve working with vulnerable populations)</li>
                <li>Visas (for certain countries or travel purposes)</li>
                <li>Adoption processes</li>
                <li>Financial or legal procedures (such as loans or legal cases)</li>
              </ul>
              <p className="text-lg text-gray-700 mt-4">
                If you need a Police Clearance Certificate for any of the above reasons, DocoAid is here to simplify the process and ensure you get the document you need with minimal hassle.
              </p>
            </div>
          </div>
  
          {/* Types of PCC Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-primary text-white py-4 px-8">
              <h2 className="text-2xl font-bold">Types of Police Clearance Certificates We Assist With</h2>
            </div>
            <div className="p-8">
              <p className="text-lg text-gray-700">
                DocoAid provides assistance with the following types of Police Clearance Certificates:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                <li><strong>Local Police Clearance:</strong> If you have lived in Canada for a specific period, you may need a local police clearance for various purposes, such as employment or legal matters within the country. We will help you apply for this certificate through the appropriate local authorities.</li>
                <li><strong>International Police Clearance:</strong> If you're applying for immigration or visas to other countries (e.g., the United States, the United Kingdom, Australia, or European Union countries), many of them require a PCC from your home country or any other countries where you've resided for a certain period. DocoAid helps you navigate the process for international requests, ensuring compliance with each country's unique requirements.</li>
                <li><strong>Employment Clearance:</strong> Certain employers may require a Police Clearance Certificate as part of their hiring process. This is often the case for positions involving trust, responsibility, or working with vulnerable populations. DocoAid can assist you in obtaining the clearance required by potential employers.</li>
                <li><strong>Immigration and Citizenship:</strong> For many immigration applications, including permanent residency, citizenship applications, or visa processing, a Police Clearance Certificate is a mandatory requirement. DocoAid helps you acquire the necessary documents for your immigration goals.</li>
              </ul>
              <p className="text-lg text-gray-700 mt-6">
                Each country in Asia and the Middle East has its own procedure for issuing a Police Clearance Certificate (PCC).
              </p>
            </div>
          </div>

          {/* Get Started Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Get Started with DocoAid Today!</h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you need a Police Clearance Certificate for immigration, employment, or other legal requirements, DocoAid is here to guide you through the process. Our team ensures that you meet all necessary documentation and legal requirements, making the process easy and efficient.
              </p>
  
              {/* Final CTA */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                <p className="text-lg font-medium text-primary mb-6">
                  Reach out to DocoAid for professional assistance with your Police Clearance Certificate application. Our team is ready to help you obtain the clearance you need, quickly and without hassle.
                </p>
                <ContactUsButton/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PCCPage;