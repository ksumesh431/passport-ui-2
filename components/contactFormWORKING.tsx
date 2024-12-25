'use client';
import { useState, useEffect } from 'react';

interface FormData {
    name: string;
    email: string;
    query: string;
    phone: string;
    countryCode: string;
    category: string;
    subCategory: string;
}

interface ServicesData {
    [key: string]: {
        [key: string]: null;
    } | {};
}

interface CountryCode {
    code: string;
    country: string;
}

// Update initial form state
const initialFormData: FormData = {
    name: '',
    email: '',
    query: '',
    phone: '',
    countryCode: '+1', // default to US
    category: '',
    subCategory: ''
};




const countryCodes: CountryCode[] = [
    { code: '+1', country: 'US/CA' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'IN' },
    { code: '+7', country: 'RU/KZ' },
    { code: '+20', country: 'EG' },
    { code: '+27', country: 'ZA' },
    { code: '+30', country: 'GR' },
    { code: '+31', country: 'NL' },
    { code: '+32', country: 'BE' },
    { code: '+33', country: 'FR' },
    { code: '+34', country: 'ES' },
    { code: '+36', country: 'HU' },
    { code: '+39', country: 'IT' },
    { code: '+40', country: 'RO' },
    { code: '+41', country: 'CH' },
    { code: '+43', country: 'AT' },
    { code: '+45', country: 'DK' },
    { code: '+46', country: 'SE' },
    { code: '+47', country: 'NO' },
    { code: '+48', country: 'PL' },
    { code: '+49', country: 'DE' },
    { code: '+51', country: 'PE' },
    { code: '+52', country: 'MX' },
    { code: '+53', country: 'CU' },
    { code: '+54', country: 'AR' },
    { code: '+55', country: 'BR' },
    { code: '+56', country: 'CL' },
    { code: '+57', country: 'CO' },
    { code: '+58', country: 'VE' },
    { code: '+60', country: 'MY' },
    { code: '+61', country: 'AU' },
    { code: '+62', country: 'ID' },
    { code: '+63', country: 'PH' },
    { code: '+64', country: 'NZ' },
    { code: '+65', country: 'SG' },
    { code: '+66', country: 'TH' },
    { code: '+81', country: 'JP' },
    { code: '+82', country: 'KR' },
    { code: '+84', country: 'VN' },
    { code: '+86', country: 'CN' },
    { code: '+90', country: 'TR' },
    { code: '+92', country: 'PK' },
    { code: '+94', country: 'LK' },
    { code: '+95', country: 'MM' },
    { code: '+98', country: 'IR' },
    { code: '+212', country: 'MA' },
    { code: '+213', country: 'DZ' },
    { code: '+216', country: 'TN' },
    { code: '+218', country: 'LY' },
    { code: '+220', country: 'GM' },
    { code: '+221', country: 'SN' },
    { code: '+222', country: 'MR' },
    { code: '+223', country: 'ML' },
    { code: '+224', country: 'GN' },
    { code: '+225', country: 'CI' },
    { code: '+226', country: 'BF' },
    { code: '+227', country: 'NE' },
    { code: '+228', country: 'TG' },
    { code: '+229', country: 'BJ' },
    { code: '+230', country: 'MU' },
    { code: '+231', country: 'LR' },
    { code: '+232', country: 'SL' },
    { code: '+233', country: 'GH' },
    { code: '+234', country: 'NG' },
    { code: '+235', country: 'TD' },
    { code: '+236', country: 'CF' },
    { code: '+237', country: 'CM' },
    { code: '+238', country: 'CV' },
    { code: '+239', country: 'ST' },
    { code: '+240', country: 'GQ' },
    { code: '+241', country: 'GA' },
    { code: '+242', country: 'CG' },
    { code: '+243', country: 'CD' },
    { code: '+244', country: 'AO' },
    { code: '+245', country: 'GW' },
    { code: '+246', country: 'IO' },
    { code: '+247', country: 'AC' },
    { code: '+248', country: 'SC' },
    { code: '+249', country: 'SD' },
    { code: '+250', country: 'RW' },
    { code: '+251', country: 'ET' },
    { code: '+252', country: 'SO' },
    { code: '+253', country: 'DJ' },
    { code: '+254', country: 'KE' },
    { code: '+255', country: 'TZ' },
    { code: '+256', country: 'UG' },
    { code: '+257', country: 'BI' },
    { code: '+258', country: 'MZ' },
    { code: '+260', country: 'ZM' },
    { code: '+261', country: 'MG' },
    { code: '+262', country: 'RE/YT' },
    { code: '+263', country: 'ZW' },
    { code: '+264', country: 'NA' },
    { code: '+265', country: 'MW' },
    { code: '+266', country: 'LS' },
    { code: '+267', country: 'BW' },
    { code: '+268', country: 'SZ' },
    { code: '+269', country: 'KM' },
    { code: '+290', country: 'SH' },
    { code: '+291', country: 'ER' },
    { code: '+297', country: 'AW' },
    { code: '+298', country: 'FO' },
    { code: '+299', country: 'GL' },
    { code: '+350', country: 'GI' },
    { code: '+351', country: 'PT' },
    { code: '+352', country: 'LU' },
    { code: '+353', country: 'IE' },
    { code: '+354', country: 'IS' },
    { code: '+355', country: 'AL' },
    { code: '+356', country: 'MT' },
    { code: '+357', country: 'CY' },
    { code: '+358', country: 'FI' },
    { code: '+359', country: 'BG' },
    { code: '+370', country: 'LT' },
    { code: '+371', country: 'LV' },
    { code: '+372', country: 'EE' },
    { code: '+373', country: 'MD' },
    { code: '+374', country: 'AM' },
    { code: '+375', country: 'BY' },
    { code: '+376', country: 'AD' },
    { code: '+377', country: 'MC' },
    { code: '+378', country: 'SM' },
    { code: '+379', country: 'VA' },
    { code: '+380', country: 'UA' },
    { code: '+381', country: 'RS' },
    { code: '+382', country: 'ME' },
    { code: '+383', country: 'XK' },
    { code: '+385', country: 'HR' },
    { code: '+386', country: 'SI' },
    { code: '+387', country: 'BA' },
    { code: '+389', country: 'MK' },
    { code: '+420', country: 'CZ' },
    { code: '+421', country: 'SK' },
    { code: '+423', country: 'LI' },
    { code: '+500', country: 'FK' },
    { code: '+501', country: 'BZ' },
    { code: '+502', country: 'GT' },
    { code: '+503', country: 'SV' },
    { code: '+504', country: 'HN' },
    { code: '+505', country: 'NI' },
    { code: '+506', country: 'CR' },
    { code: '+507', country: 'PA' },
    { code: '+508', country: 'PM' },
    { code: '+509', country: 'HT' },
    { code: '+590', country: 'GP/BL/MF' },
    { code: '+591', country: 'BO' },
    { code: '+592', country: 'GY' },
    { code: '+593', country: 'EC' },
    { code: '+594', country: 'GF' },
    { code: '+595', country: 'PY' },
    { code: '+596', country: 'MQ' },
    { code: '+597', country: 'SR' },
    { code: '+598', country: 'UY' },
    { code: '+599', country: 'CW/BQ' }
];

const servicesData: ServicesData = {
    "IELTS Coaching": {},
    "New Applications": {
        "New Passport (India/Canada)": null,
        "Passport Renewal (India/Canada)": null,
        "PCC (Middle-east/India/Canada)": null,
        "OCI Applications": null,
        "Surrender Certificate": null,
        "PR Card Renewal": null,
        "Visitor Visa Applications": null,
        "Driving Extract": null,
        "Child Travel Consent": null
    },
    "Translation Services": {
        "Documents": null,
        "Whatsapp Chat": null
    },
    "Notary Services": {
        "Affidavits": null,
        "Documents Notarization": null
    },
    "Power of Attorney (POA)": {
        "General POA": null,
        "Specific POA": null
    },
    "Run Away Marriages": {
        "Middle-East": null
    }
};

// Add these validation helpers at the top
const isValidName = (name: string): boolean => {
    return name.trim().length >= 2;
};

const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};


const isValidPhone = (phone: string): boolean => {
    return /^\d{10}$/.test(phone);
};



export const ContactForm = () => {




    const [countrySearch, setCountrySearch] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const filteredCodes = countryCodes.filter(code =>
        code.code.includes(countrySearch.startsWith('+') ? countrySearch : '+' + countrySearch) ||
        code.country.toLowerCase().includes(countrySearch.toLowerCase())
    );



    useEffect(() => {
        const handleClickOutside = () => setShowDropdown(false);
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Phone validation - only allow numbers
        if (name === 'phone') {
            const numbersOnly = value.replace(/[^\d]/g, '');
            setFormData(prev => ({ ...prev, [name]: numbersOnly }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case 'phone':
                if (!isValidPhone(value)) {
                    setError('Phone number must be 10 digits');
                } else {
                    setError(null);
                }
                break;

            case 'email':
                if (!isValidEmail(value)) {
                    setError('Please enter a valid email format');
                } else {
                    setError(null);
                }
                break;

            case 'name':
                if (!isValidName(value)) {
                    setError('Name must be at least 2 characters');
                } else {
                    setError(null);
                }
                break;
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        // Validation checks
        if (!isValidName(formData.name)) {
            setError('Name must be at least 2 characters');
            return;
        }

        if (!isValidEmail(formData.email)) {
            setError('Please enter a valid email address');
            return;
        }

        if (!isValidPhone(formData.phone)) {
            setError('Phone number must be 10 digits');
            return;
        }

        if (!formData.category) {
            setError('Please select a category');
            return;
        }

        // Only validate subCategory if the category has subcategories
        if (Object.keys(servicesData[formData.category] || {}).length > 0 && !formData.subCategory) {
            setError('Please select a sub-category');
            return;
        }

        const submissionData = {
            ...formData,
            subCategory: Object.keys(servicesData[formData.category] || {}).length === 0 ? 'N/A' : formData.subCategory
        };

        try {
            setIsSubmitting(true);
            const response = await fetch('https://nowk6gpjo9.execute-api.ca-central-1.amazonaws.com/prod/queries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submissionData)
            });

            if (!response.ok) throw new Error('Failed to send query');

            setSuccess(true);
            setFormData(initialFormData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
        } finally {
            setIsSubmitting(false);
        }
    };



    return (
        <div className="w-full min-w-[65%] max-w-[95%] sm:max-w-[85%] md:max-w-2xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden p-4 sm:p-6 md:p-8 mb-5">
            <h1 className="text-xl sm:text-2xl font-semibold text-white bg-indigo-900 -mx-4 sm:-mx-6 md:-mx-8 -mt-4 sm:-mt-6 md:-mt-8 p-4 sm:p-6 mb-4 sm:mb-6 md:mb-8">
                Raise a Query
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {error && <div className="text-red-500">{error}</div>}
                {success && <div className="text-green-500">Message sent successfully!</div>}

                <div>
                    <label className="block text-[#4A5568] text-base sm:text-lg mb-2">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div>
                    <label className="block text-[#4A5568] text-base sm:text-lg mb-2">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">



                    <div className="relative w-full sm:w-1/4">
                        <label className="block text-[#4A5568] text-base sm:text-lg mb-2">Country Code</label>
                        <input
                            type="text"
                            value={countrySearch || formData.countryCode}
                            onChange={(e) => {
                                setCountrySearch(e.target.value);
                                setShowDropdown(true);
                                const value = e.target.value.startsWith('+') ? e.target.value : '+' + e.target.value;
                                setFormData(prev => ({ ...prev, countryCode: value }));
                            }}
                            onFocus={() => setShowDropdown(true)}
                            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                        {showDropdown && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg max-h-48 overflow-y-auto">
                                {filteredCodes.map(code => (
                                    <div
                                        key={code.code}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            setFormData(prev => ({ ...prev, countryCode: code.code }));
                                            setCountrySearch('');
                                            setShowDropdown(false);
                                        }}
                                    >
                                        {code.code} ({code.country})
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>


                    <div className="w-full sm:w-3/4">
                        <label className="block text-[#4A5568] text-base sm:text-lg mb-2">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-[#4A5568] text-base sm:text-lg mb-2">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Select Category</option>
                        {Object.keys(servicesData).map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                {formData.category && Object.keys(servicesData[formData.category] || {}).length > 0 && (
                    <div>
                        <label className="block text-[#4A5568] text-base sm:text-lg mb-2">Sub Category</label>
                        <select
                            name="subCategory"
                            value={formData.subCategory}
                            onChange={handleChange}
                            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Select Sub Category</option>
                            {Object.keys(servicesData[formData.category] || {}).map(subCategory => (
                                <option key={subCategory} value={subCategory}>{subCategory}</option>
                            ))}
                        </select>
                    </div>
                )}

                <div>
                    <label className="block text-[#4A5568] text-base sm:text-lg mb-2">Your Query</label>
                    <textarea
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#6B63FF] text-white py-4 px-6 rounded-lg hover:bg-[#5A52E8] disabled:bg-gray-400 text-lg font-medium"
                >
                    {isSubmitting ? 'Sending...' : 'Submit Query'}
                </button>
            </form>

            {success && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4 animate-fade-in">
                        <div className="text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">Query Submitted Successfully!</h3>
                            <p className="mt-2 text-sm text-gray-500">We'll get back to you as soon as possible.</p>
                            <button
                                onClick={() => setSuccess(false)}
                                className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}



        </div>
    );
}


export const ExpertServices = () => {
    return (

        <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
            {/* Hero Section with Overlap */}
            <div className="relative mb-16">
                <div className="bg-indigo-900 text-white py-12 px-6 rounded-3xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">
                            Expert Services<br />
                            For Your Peace of Mind
                        </h1>
                        <p className="text-xl opacity-90">
                            From authentication to legalization, we guide you every step of the way
                        </p>
                    </div>
                </div>

                {/* Overlapping Contact Info Card */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 mx-4 md:mx-auto max-w-3xl -mt-8 relative z-10">
                    <div className="flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0">
                        <div className="flex items-center w-full sm:w-auto justify-center">
                            <div className="bg-indigo-600 p-2 sm:p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <span className="ml-3 text-gray-700 text-sm sm:text-base">+1 (437) 350-2555</span>
                        </div>


                        <div className="flex items-center w-full sm:w-auto justify-center">
                            <div className="bg-indigo-600 p-2 sm:p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                                </svg>
                            </div>
                            <span className="ml-3 text-gray-700 text-sm sm:text-base">+1 (437) 350-2555</span>
                        </div>


                        <div className="flex items-center w-full sm:w-auto justify-center">
                            <div className="bg-indigo-600 p-2 sm:p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="ml-3 text-gray-700 text-sm sm:text-base">info@docoaid.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
