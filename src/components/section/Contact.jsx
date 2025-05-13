import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';

export default function Contact(){

const contactInfo =[
    {
        icon: <Mail className="text-blue-600 " size={24} />,
        title: 'Email',
        content: 'salihououmarou2005@gmail.com',
        link: 'mailto:salihououmarou2005@gmail.com'
    },
    {
      icon: <Phone className="text-blue-600 " size={24} />,
      title: 'Phone',
      content: '+237 691-175-811',
      link: 'tel:+237 691-175-811'
    },
    {
      icon: <MapPin className="text-blue-600 " size={24} />,
      title: 'Location',
      content: 'City, Country',
      link: '#'
    }
]
    


    return(
        <section id='contact' className='py-24 bg-gradient-to-b from-blue-900 to-black '>
        {/* // <section id='contact' className='py-24 bg-gradient-to-br from-black via-black to-blue-900 '> */}
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <div className="h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss potential opportunities? 
                        Feel free to reach out. I'm always open to new challenges and collaborations.
                    </p>
                </div>

                <div  className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-transparent hover:border-blue-600 transition duration-300 shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-10">
                            {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-start space-y-10">
                                <div className="flex-shrink-0 mr-4">
                                    {info.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {info.title}
                                    </h4>
                                    <a href={info.link} 
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {info.content}
                                    </a>
                                </div>
                            </div>
                            ))}                
                        </div>
                    </div>

                    <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-transparent hover:border-blue-600 transition duration-300 shadow-lg p-8 ">
                        <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                        <form action="#" className='space-y-6'>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-gray-300 font-medium">Your name</label>
                                    <input type="text" name='name' className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"/>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-gray-300 font-medium">Your email</label>
                                    <input type="email" name='email' className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"/>
                                </div>
                                
                            </div>

                            <div className='space-y-2'>
                                <label htmlFor="message" className="text-gray-300 font-medium">Your message</label>
                                <textarea name="" id=""
                                 className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-800 text-gray-100 resize-none"
                                ></textarea>
                            </div>

                            <div>
                                <button type='submit' 
                                className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center'  
                                ><Send size={18} className="mr-2" />
                                Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}