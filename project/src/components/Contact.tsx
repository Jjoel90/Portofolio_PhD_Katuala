import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle form submission
    console.log('Form submitted:', formData);
    alert('Merci pour votre message. Nous vous contacterons dans les plus brefs délais.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-slate-800">
          <span className="inline-block pb-2 border-b-2 border-amber-600">Contact</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-slate-800">
              Prendre rendez-vous
            </h3>
            
            <p className="mb-8 text-slate-700">
              Pour toute consultation juridique ou demande de collaboration académique, veuillez remplir le formulaire ou nous contacter directement.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="consultation">Consultation juridique</option>
                  <option value="collaboration">Collaboration académique</option>
                  <option value="speaking">Invitation à intervenir</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-md transition-colors shadow-md"
              >
                Envoyer le message
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-slate-800">
              Informations de contact
            </h3>
            
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Mail className="text-amber-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Email</h4>
                    <a href="mailto:contact@katuala-gize.com" className="text-amber-700 hover:underline">
                      contact@katuala-gize.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Phone className="text-amber-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Téléphone</h4>
                    <a href="tel:+123456789" className="text-amber-700 hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPin className="text-amber-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Adresse</h4>
                    <p className="text-slate-600">
                      123 Avenue du Droit<br />
                      75000 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Clock className="text-amber-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Horaires de consultation</h4>
                    <p className="text-slate-600">
                      Lundi - Vendredi: 9h00 - 18h00<br />
                      Sur rendez-vous uniquement
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h4 className="font-bold text-slate-800 mb-2">Télécharger</h4>
              <div className="space-y-2">
                <a 
                  href="#" 
                  className="flex items-center text-amber-700 hover:text-amber-800"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L15 7l-5 5z"></path>
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z"></path>
                  </svg>
                  CV - KATUALA GIZE Regis
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-amber-700 hover:text-amber-800"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L15 7l-5 5z"></path>
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z"></path>
                  </svg>
                  Liste des publications
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};