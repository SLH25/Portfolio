import React from 'react';
// import { ChevronUp, Github, Instagram, PhoneCall,MessageCircleCode} from 'lucide-react';

export default function Footer(){



//         const socialIcon= [
//     {
//         icon: <Github />,
//         link: '#git'
//     },
//     {
//         icon: <Instagram />,
//         link: '#instagram'
//     },
//     {
//         icon: <MessageCircleCode />,
//         link: '#instagram'
//     }
// ]

    return(
        <footer className="bg-gradient-to-br from-black via-gray-900 to-black border-t text-white">
            <div  className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">SALIHOU</h3>
                        <p className="text-gray-400 mb-4">
                        I build smart digital solutions focused on real-world problems.
                        From web platforms and automation tools to custom software, I focus on building practical and scalable solutions.
                        </p>
                        {/* <div className="flex space-x-4">
                            {socialIcon.map((social, index) => (
                            <a key={index} href={social.link}
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                <span className="sr-only">{social.icon}</span>
                                {social.icon}
                            </a>
                            ))}
                        </div> */}
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Skills', 'Capabilities', 'Contact'].map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`}
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    {link}
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
                        <ul className="space-y-3 text-gray-400">
                        <li>
                <span className="block">Email:</span>
                <a href="salihououmarou2005@gmail.com" className="hover:text-blue-400 transition-colors">
                  salihououmarou2005@gmail.com
                </a>
              </li>
              <li>
                <span className="block">Phone:</span>
                <a href="+237 691-175-811" className="hover:text-blue-400 transition-colors">
                  +237 691-175-811
                </a>
              </li>
              {/* <li>
                <span className="block">Location:</span>
                <span>City, Country</span>
              </li> */}
                        </ul>
                    </div>

                </div>
                   
                <div className="w-full border-t border-gray-800" />
                <p className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} SALIHOU. All rights reserved.
                </p>
            </div>
        </footer>
    )
}