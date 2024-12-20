const DocumentsPage = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
        {/* Hero Section with Overlap */}
        <div className="relative mb-16">
          <div className="bg-indigo-900 text-white py-12 px-6 rounded-3xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Documentation Services</h1>
              <p className="text-xl opacity-90">
                Expert Translations for Immigration Documents
              </p>
            </div>
          </div>
          
          {/* Overlapping Introduction Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
            <p className="text-lg text-gray-700">
              Immigration forms, legal documents, and personal papers must be translated with precision to ensure 
              that your application is processed smoothly. DocoAid offers accurate translation services that 
              maintain the integrity and meaning of your original content.
            </p>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Documents We Translate */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-indigo-800 text-white py-4 px-8">
              <h2 className="text-2xl font-bold">Documents We Translate</h2>
            </div>
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                We understand the importance of precision in document translation, especially when it comes 
                to legal and official documents where even minor errors can lead to misunderstandings or 
                legal complications. Our professional translators specialize in the translation of:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span>Birth Certificates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span>Marriage Certificates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span>Passport Documents</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span>Court Orders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span>Academic Transcripts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span>Employment Records</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span>Visa Application Forms</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Languages Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-indigo-800 text-white py-4 px-8">
              <h2 className="text-2xl font-bold">Languages We Support</h2>
            </div>
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                Our translation services cover a wide range of languages, including but not limited to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span>Punjabi to English</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span>Hindi to English</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span>Spanish to English</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span>Italian to English</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-indigo-600">•</span>
                  <span>Portuguese to English</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DocumentsPage;