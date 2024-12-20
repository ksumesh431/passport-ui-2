const AffidavitsPage = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
        {/* Hero Section with Overlap */}
        <div className="relative mb-16">
          <div className="bg-indigo-900 text-white py-12 px-6 rounded-3xl">
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
  
      </div>
    );
  };
  
  export default AffidavitsPage;