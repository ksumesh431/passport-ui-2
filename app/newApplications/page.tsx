const ApplicationsPage = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
        {/* Hero Section with Overlap */}
        <div className="relative mb-16">
          <div className="bg-indigo-900 text-white py-12 px-6 rounded-3xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">New Applications</h1>
              <p className="text-xl opacity-90">
                Expert guidance for all your document application needs
              </p>
            </div>
          </div>
          
          {/* Overlapping Introduction Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
            <p className="text-lg text-gray-700">
              At DocoAid, we understand that the process of applying for vital documents can be overwhelming. 
              Our expert team is here to guide you through every step, ensuring a smooth and efficient application process.
            </p>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Services Overview */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-indigo-800 text-white py-4 px-8">
              <h2 className="text-2xl font-bold">Our Application Services</h2>
            </div>
            <div className="p-8">
              <p className="text-lg text-gray-700">
                Whether you're applying for a visa, a police clearance certificate, or renewing your passport, 
                our expert team is here to guide you through every step. We provide comprehensive assistance 
                for a range of new applications, ensuring that you meet all the requirements and submit 
                everything on time.
              </p>
            </div>
          </div>
  
          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-indigo-800 text-white py-4 px-8">
              <h2 className="text-2xl font-bold">Why Choose DocoAid</h2>
            </div>
            <div className="p-8">
              <p className="text-lg text-gray-700">
                Our services are designed to simplify the application process, so you can focus on what 
                matters most. Trust DocoAid to handle your application needs with precision, professionalism, 
                and reliability. We ensure that all your documentation is complete, accurate, and submitted 
                according to the required guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ApplicationsPage;