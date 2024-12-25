'use client'
import { ContactForm } from "@/components/contactForm"

const Contacts = () => {

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
            {/* Hero Section */}
            <div className="relative mb-16">
                <div className="bg-indigo-900 text-white py-12 px-6 rounded-3xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
                        <p className="text-xl opacity-90">
                            Get in touch with our team for any inquiries or assistance
                        </p>
                    </div>
                </div>

                {/* Overlapping Contact Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-indigo-900">DOCUMENT SERVICES – ONTARIO</h2>
                        <p className="text-lg mt-2">Phone: +1 (437) 350-2555</p>
                        <p className="text-lg">Email: info@docoaid.com</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <ContactForm/>
        </div>
    )
}

export default Contacts