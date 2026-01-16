import React, { useState } from 'react';
import { Mail, Phone, Send, Check, AlertCircle, MessageCircle } from 'lucide-react';

// Liste des indicatifs téléphoniques par pays
const countryCodes = [
  { code: '+1', country: 'US/CA', flag: '🇺🇸' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+237', country: 'Cameroun', flag: '🇨🇲' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+49', country: 'Allemagne', flag: '🇩🇪' },
  { code: '+212', country: 'Maroc', flag: '🇲🇦' },
  { code: '+225', country: 'Côte d\'Ivoire', flag: '🇨🇮' },
  { code: '+221', country: 'Sénégal', flag: '🇸🇳' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+27', country: 'Afrique du Sud', flag: '🇿🇦' },
  { code: '+91', country: 'Inde', flag: '🇮🇳' },
  { code: '+86', country: 'Chine', flag: '🇨🇳' },
  { code: '+81', country: 'Japon', flag: '🇯🇵' },
  { code: '+7', country: 'Russie', flag: '🇷🇺' },
  { code: '+55', country: 'Brésil', flag: '🇧🇷' },
  { code: '+61', country: 'Australie', flag: '🇦🇺' },
  { code: '+241', country: 'Gabon', flag: '🇬🇦' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+237',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: 'Email',
      content: 'salihououmarou2005@gmail.com',
      link: 'mailto:salihououmarou2005@gmail.com'
    },
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: 'Phone',
      content: '+237 691-175-811',
      link: 'tel:+237691175811'
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCountryCodeChange = (e) => {
    setFormData(prev => ({
      ...prev,
      countryCode: e.target.value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Nom obligatoire
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est obligatoire';
    }

    // Message obligatoire
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est obligatoire';
    }

    // Email: si rempli, doit être valide
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    // Téléphone: si rempli, doit être valide (au moins 8 chiffres)
    if (formData.phone && !/^\d{8,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Numéro de téléphone invalide (minimum 8 chiffres)';
    }

    // Au moins email ou téléphone doit être rempli
    if (!formData.email && !formData.phone) {
      newErrors.contact = 'Veuillez remplir au moins l\'email ou le numéro de téléphone';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Préparer le contenu de l'email
    const emailSubject = encodeURIComponent(`Message de ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Nom: ${formData.name}\n` +
      `${formData.email ? `Email: ${formData.email}\n` : ''}` +
      `${formData.phone ? `Téléphone: ${formData.countryCode} ${formData.phone}\n` : ''}` +
      `\nMessage:\n${formData.message}`
    );

    // Ouvrir le client email
    window.location.href = `mailto:salihououmarou2005@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Réinitialiser le formulaire après 2 secondes
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          countryCode: '+237',
          phone: '',
          message: ''
        });
        setSubmitStatus(null);
      }, 2000);
    }, 500);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Préparer le message WhatsApp
    const whatsappNumber = '237691175811'; // Votre numéro WhatsApp (sans le +)
    const whatsappMessage = encodeURIComponent(
      `Bonjour! Je suis ${formData.name}.\n\n` +
      `${formData.email ? `Email: ${formData.email}\n` : ''}` +
      `${formData.phone ? `Téléphone: ${formData.countryCode} ${formData.phone}\n` : ''}` +
      `\nMessage:\n${formData.message}`
    );

    // Ouvrir WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Réinitialiser le formulaire après 2 secondes
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          countryCode: '+237',
          phone: '',
          message: ''
        });
        setSubmitStatus(null);
      }, 2000);
    }, 500);
  };

  return (
    <section id='contact' className='py-24 bg-gradient-to-b from-blue-900 to-black'>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in working together or discussing a project?
            I'm open to opportunities, collaborations, and meaningful conversations. <br />
            I’m open to internships, remote jobs, or freelance collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-transparent hover:border-blue-600 transition duration-300 shadow-lg p-4">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {info.title}
                    </h4>
                    <a 
                      href={info.link} 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-transparent hover:border-blue-600 transition duration-300 shadow-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            {/* Message de succès ou d'erreur */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-600 rounded-md flex items-center space-x-2">
                <Check className="text-green-400" size={20} />
                <p className="text-green-400">Message envoyé avec succès!</p>
              </div>
            )}

            {submitStatus === 'error' && Object.keys(errors).length > 0 && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-600 rounded-md flex items-start space-x-2">
                <AlertCircle className="text-red-400 mt-0.5" size={20} />
                <div className="flex-1">
                  <p className="text-red-400 font-medium mb-2">Veuillez corriger les erreurs suivantes:</p>
                  <ul className="text-red-300 text-sm space-y-1">
                    {Object.values(errors).filter(err => err).map((error, idx) => (
                      <li key={idx}>• {error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {errors.contact && (
              <div className="mb-4 p-3 bg-yellow-900/30 border border-yellow-600 rounded-md">
                <p className="text-yellow-400 text-sm">{errors.contact}</p>
              </div>
            )}

            <form className='space-y-6'>
              {/* Nom */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-300 font-medium">
                  Name 
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent bg-gray-800 text-gray-100 ${
                    errors.name ? 'border-red-600 focus:ring-red-400' : 'border-gray-700 focus:ring-blue-400'
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
              </div>

              {/* Email et Téléphone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-300 font-medium">
                    Email
                    {!formData.phone}
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent bg-gray-800 text-gray-100 ${
                      errors.email ? 'border-red-600 focus:ring-red-400' : 'border-gray-700 focus:ring-blue-400'
                    }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                </div>

                {/* Téléphone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-gray-300 font-medium">
                    Phone Number
                    {!formData.email}
                  </label>
                  <div className="flex min-w-0">
                    <select
                      value={formData.countryCode}
                      onChange={handleCountryCodeChange}
                      className="px-2 py-2 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-gray-100 text-sm max-w-[120px] shrink-0"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className={`flex-1 min-w-0 px-4 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:border-transparent bg-gray-800 text-gray-100 ${
                        errors.phone ? 'border-red-600 focus:ring-red-400' : 'border-gray-700 focus:ring-blue-400 border-l-0'
                      }`}
                      placeholder="Your Phone Number"
                    />
                  </div>
                  {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
                </div>
              </div>

              {/* Message */}
              <div className='space-y-2'>
                <label htmlFor="message" className="text-gray-300 font-medium">
                  Message 
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent bg-gray-800 text-gray-100 resize-none ${
                    errors.message ? 'border-red-600 focus:ring-red-400' : 'border-gray-700 focus:ring-blue-400'
                  }`}
                  placeholder="How can I help you?"
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
              </div>

              {/* Boutons d'envoi */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  type="button"
                  onClick={handleEmailSubmit}
                  disabled={isSubmitting}
                  className='flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center'  
                >
                  <Mail size={18} className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send by Email'}
                </button>
                
                <button 
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  disabled={isSubmitting}
                  className='flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:cursor-not-allowed text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center'  
                >
                  <MessageCircle size={18} className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send by WhatsApp'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
