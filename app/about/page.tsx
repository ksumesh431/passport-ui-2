const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
      {/* Hero Section with Overlap */}
      <div className="relative mb-16">
        <div className="bg-indigo-900 text-white py-12 px-6 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">About Us</h1>
            <p className="text-xl opacity-90">
              Welcome to DocoAid, your trusted partner in document authentication and legalization
            </p>
          </div>
        </div>
        
        {/* Overlapping Introduction Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
          <p className="text-lg text-gray-700">
            We are a private company with a team of highly experienced agents who specialize in navigating 
            the complex landscape of document verification, authentication, and legalization. With years 
            of expertise in the industry, we have built a reputation for providing reliable, efficient, 
            and secure services tailored to meet the diverse needs of our clients.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Services Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-indigo-800 text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Our Services</h2>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700">
              At DocoAid, we understand that the right documentation is more than just paperwork—it is 
              the key to unlocking opportunities, ensuring compliance, and safeguarding your personal 
              and professional interests. Whether you are an individual looking for help with translation 
              services, any kind of Notary services, need help with drafting of a Power of Attorney, 
              is not sure of how to do a new application for visa, PCC, a business needing to legalize 
              corporate documents, or an organization seeking to meet international regulatory standards, 
              DocoAid is here to guide you every step of the way.
            </p>
          </div>
        </div>

        {/* Documentation Matters Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-indigo-800 text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Why Proper Documentation Matters</h2>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700">
              In today's interconnected world, proper documentation is crucial. It serves as the 
              foundation for legal recognition, the validation of identity, and the establishment 
              of trust between parties. Whether you are applying for a visa, expanding your business 
              abroad, or formalizing agreements, having the correct and authenticated documents is essential. 
              Incorrect or missing documentation can lead to delays, legal complications, and missed opportunities.
            </p>
          </div>
        </div>

        {/* Mission Statement Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <p className="text-lg text-gray-700 mb-8">
              Our mission at DocoAid is to simplify the document authentication and legalization process 
              for our clients. We offer end-to-end solutions that are designed to be fast, transparent, 
              and hassle-free, so you can focus on what matters most to you. Our team is committed to 
              delivering exceptional service with attention to detail, ensuring that your documents meet 
              all necessary standards and requirements.
            </p>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
              <p className="text-lg font-medium text-indigo-900">
                With DocoAid, you can have peace of mind knowing that your documentation is in expert hands. 
                Let us help you navigate the complexities of documentation with confidence and ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;