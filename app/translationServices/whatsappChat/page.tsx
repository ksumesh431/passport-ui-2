const WhatsappChatPage = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
        {/* Hero Section with Overlap */}
        <div className="relative mb-16">
          <div className="bg-indigo-900 text-white py-12 px-6 rounded-3xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Social Media Chat Translation</h1>
              <p className="text-xl opacity-90">
                Professional Translation Services for Digital Communications
              </p>
            </div>
          </div>
          
          {/* Overlapping Introduction Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
            <p className="text-lg text-gray-700">
              In today's digital age, communication often takes place over messaging platforms like WhatsApp. 
              For legal or immigration matters, the accurate translation of these conversations can be crucial.
            </p>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8 ">
          {/* Service Details */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-indigo-800 text-white py-4 px-8">
              <h2 className="text-2xl font-bold">Our Chat Translation Service</h2>
            </div>
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                Whether you need to translate a chat for legal or immigration matters, our team ensures that 
                the tone, context, and details are preserved, providing you with a reliable translation that 
                captures the essence of the original conversation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">Platforms We Cover</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">•</span>
                      WhatsApp
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">•</span>
                      Instagram
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">•</span>
                      Twitter
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">•</span>
                      Facebook Messenger
                    </li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">•</span>
                      Context Preservation
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">•</span>
                      Tone Accuracy
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">•</span>
                      Legal Compliance
                    </li>
                    <li className="flex items-center">
                      <span className="text-indigo-600 mr-2">•</span>
                      Certified Translations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhatsappChatPage;