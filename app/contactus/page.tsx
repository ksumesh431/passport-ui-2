'use client'
import { ArrowPathIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

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
            const response = await fetch("https://nowk6gpjo9.execute-api.ca-central-1.amazonaws.com/prod/queries", {
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
                        <p className="text-lg mt-2">Phone: 437-350-2555</p>
                        <p className="text-lg">Email: info@docoaid.com</p>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-indigo-800 text-white py-4 px-8">
                        <h2 className="text-2xl font-bold">Raise a Query</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="p-8">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Query</label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-2 w-full border rounded-lg p-3 min-h-[150px] focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        {error && (
                            <p className="text-red-500 mb-4">{error}</p>
                        )}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <>
                                    <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                'Submit Query'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts