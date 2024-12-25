'use client'
import { ArrowPathIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { ContactForm } from "@/components/contactForm"

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        const payload = {
            name: formData.name,
            email: formData.email,
            query: formData.message,
        }

        try {
            // const response = await fetch("https://nowk6gpjo9.execute-api.ca-central-1.amazonaws.com/prod/queries", {
            const response = await fetch("https://testing nowk6gpjo9.execute-api.ca-central-1.amazonaws.com/prod/queries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            alert("Query submitted! We'll get back to you soon.")
            setFormData({
                name: "",
                email: "",
                message: "",
            })
        } catch (err) {
            console.error("Error submitting form:", err)
            setError("Failed to submit your query. Please try again later.")
        } finally {
            setIsSubmitting(false)
        }
    }

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