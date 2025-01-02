import React from 'react'
import Link from 'next/link'
const ContactUsButton = () => {
    return (
        <>
            <Link
                href="/contactus"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg
  hover:bg-blue-600 shadow-md hover:shadow-lg hover:scale-105
  transition duration-200 ease-in-out cursor-pointer text-center"
            >
                Contact Us Today
            </Link>
        </>
    )
}

export default ContactUsButton