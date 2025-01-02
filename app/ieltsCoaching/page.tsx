import React from 'react';
import Link from 'next/link';
import ContactUsButton from '@/components/contact-us-button-component';

const IELTSCoachingPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="bg-primary text-white py-12 px-6 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">IELTS Coaching</h1>
            <p className="text-xl opacity-90">
              At DocoAid, we understand the significance of the International English Language Testing System (IELTS) exam in shaping your future opportunities.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
          <p className="text-lg text-gray-700">
            Whether you're applying for higher education, immigration, or employment in English-speaking countries, excelling in the IELTS exam is a key step towards achieving your goals.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Types of IELTS Exam */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Types of IELTS Exam</h2>
          </div>
          <div className="p-8">
            <ul className="space-y-4">
              <li className="text-lg text-gray-700">
                <strong>IELTS Academic:</strong> This exam is required for students who are applying for postgraduate studies or professional programs.
              </li>
              <li className="text-lg text-gray-700">
                <strong>IELTS General Training:</strong> This exam is designed for individuals planning to relocate to English-speaking nations like Australia, Canada, the UK, or New Zealand. It’s also suitable for students seeking to participate in training or work overseas.
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Why Choose DocoAid for Your IELTS Preparation?</h2>
          </div>
          <div className="p-8 space-y-6">
            {[
              {
                title: "Comprehensive Study Material",
                content: "We offer a wide range of up-to-date study materials to help you understand the format of the IELTS exam. From practice tests to detailed explanations, our resources cover every aspect of the Listening, Reading, Writing, and Speaking sections."
              },
              {
                title: "Expert Tutors",
                content: "Our IELTS tutors are certified professionals with years of experience in coaching students for success. They offer personalized feedback, tips, and strategies that are tailored to your learning style and goals."
              },
              {
                title: "Practice Makes Perfect",
                content: "Success in the IELTS exam comes down to practice. We provide you with access to full-length mock tests and real-time assessments to simulate the actual exam experience. Our interactive practice exercises ensure that you feel confident on exam day."
              },
              {
                title: "Tailored Study Plans",
                content: "No two students are alike, and at DocoAid, we believe in customized learning. Our team works with you to create a study plan based on your current skill level, target band score, and exam date, ensuring a clear and structured path to success."
              },
              {
                title: "Progress Tracking and Support",
                content: "With our progress tracking tools, you’ll be able to monitor your improvement in each IELTS component. Our tutors will regularly assess your performance and provide the support you need to improve in areas where you need it most."
              },
              {
                title: "Flexible Online Learning",
                content: "Whether you're looking to study at your own pace or prefer a structured schedule, we offer flexible learning options. You can access our materials and attend live classes from anywhere, anytime."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                <p className="text-gray-700">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IELTS Exam Structure */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">IELTS Exam Structure</h2>
          </div>
          <div className="p-8 space-y-6">
            {[
              {
                title: "Listening (30 minutes)",
                content: "This section consists of 4 recordings of native English speakers, followed by questions to test your listening comprehension skills."
              },
              {
                title: "Reading (60 minutes)",
                content: "The reading section has three long passages, each followed by a series of questions designed to assess your reading skills, including understanding the main idea, details, and the writer’s opinions."
              },
              {
                title: "Writing (60 minutes)",
                content: "The writing section requires you to complete two tasks: Task 1 (describing a graph, table, chart, or diagram) and Task 2 (an essay in response to a point of view, argument, or problem)."
              },
              {
                title: "Speaking (11-14 minutes)",
                content: "The speaking section is a face-to-face interview with an examiner and consists of three parts: an introduction, a discussion of familiar topics, and a short speech on a given topic."
              }
            ].map((section, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">{section.title}</h3>
                <p className="text-gray-700">{section.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Our Services Include</h2>
          </div>
          <div className="p-8 space-y-4">
            <ul className="space-y-2">
              {[
                "IELTS Coaching Sessions: Tailored lessons focused on the sections that need the most attention.",
                "IELTS Mock Tests: Simulate real exam conditions to boost your confidence.",
                "Speaking Practice Sessions: Improve your fluency and pronunciation with live mock interviews.",
                "Writing Corrections: Get detailed feedback on your writing tasks to enhance your essay structure and grammar.",
                "Listening & Reading Practice: Sharpen your listening and reading skills with practice exercises and strategies to improve speed and accuracy."
              ].map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white py-4 px-8">
            <h2 className="text-2xl font-bold">Get Started Today</h2>
          </div>
          <div className="p-8 text-center space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Achieving your desired IELTS score is just a few steps away. With DocoAid, you'll have the resources, support, and personalized attention you need to succeed.
              </p>
              <p className="text-lg text-gray-700">
                Ready to take the first step? Contact us today to schedule a free consultation, or sign up for our IELTS preparation course. Let's unlock your future together!
              </p>
            </div>



            <ContactUsButton />

          </div>
        </div>
      </div>
    </div>
  );
};

export default IELTSCoachingPage;