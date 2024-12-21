// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

// function CustomFooter() {
//   return (

  
//     <footer className="bg-[#2D2D2D] text-gray-300 py-12 mt-auto  ">
//       <div className="container mx-auto px-4 ">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Social Media Section */}
//           <div className="space-y-4">
//             <h3 className="font-semibold mb-4">Follow SkillStone for Regular Updates</h3>
//             <div className="flex space-x-4">
//               <Link href="#" className="hover:text-white transition-colors">
//                 <FaFacebook size={24} />
//               </Link>
//               <Link href="#" className="hover:text-white transition-colors">
//                 <FaTwitter size={24} />
//               </Link>
//               <Link href="#" className="hover:text-white transition-colors">
//                 <FaYoutube size={24} />
//               </Link>
//               <Link href="#" className="hover:text-white transition-colors">
//                 <FaInstagram size={24} />
//               </Link>
//               <Link href="#" className="hover:text-white transition-colors">
//                 <FaLinkedin size={24} />
//               </Link>
//             </div>
//             <p className="text-sm mt-4">
//               Salesforce is a trademark of salesforce.com, Inc. and is used here with permission.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link href="#" className="hover:text-white transition-colors">Courses</Link></li>
//               <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
//               <li><Link href="#" className="hover:text-white transition-colors">Events and PR</Link></li>
//               <li><Link href="#" className="hover:text-white transition-colors">Quick Payment</Link></li>
//             </ul>
//           </div>

//           {/* Support & Information */}
//           <div>
//             <h3 className="font-semibold mb-4">Support & Information</h3>
//             <ul className="space-y-2">
//               <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
//               <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
//               <li><Link href="#" className="hover:text-white transition-colors">Refund Policy</Link></li>
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div>
//             <h3 className="font-semibold mb-4">Contact Us</h3>
//             <div className="space-y-2">
//               <p>Grazitti Interactive Inc.</p>
//               <p>#19B, Industrial Area Phase 2,</p>
//               <p>Panchkula, Haryana 134113</p>
//               <p className="mt-4">support@skillstone.in</p>
//               <div className="mt-2">
//                 <p>0172-5057200</p>
//                 <p>(+91) 9914843366</p>
//               </div>
//               <div className="mt-4">
//                 <p>09:00 AM - 7:00 PM</p>
//                 <p>SUNDAYS AND HOLIDAYS:</p>
//                 <p>CLOSED</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-gray-600 mt-8 pt-8 text-center">
//           <p>©2025 DocuAid. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>

//   );
// }

// export default CustomFooter;

'use client';
import React from 'react';

function CustomFooter() {
  return (
    <footer className="bg-gradient-to-b from-[#2D2D2D] to-[#1a1a1a] text-gray-200 py-10 mt-auto">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 backdrop-blur-sm">
          <h3 className="font-semibold text-xl tracking-wide text-white">
            DocoAid by Star Translation Group
          </h3>
          <div className="space-y-2 font-light">
            <p className="hover:text-white transition-colors">
              <span className="text-gray-400">Email:</span> info@DocoAid.com
            </p>
            <p className="hover:text-white transition-colors">
              <span className="text-gray-400">Phone:</span> 437-350-2555
            </p>
          </div>
          <div className="border-t border-gray-700/50 mt-6 pt-6">
            <p className="text-sm text-gray-400">©2024 DocoAid. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CustomFooter;