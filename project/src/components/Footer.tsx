import React from 'react';
import { Mail, Linkedin, Twitter, FileText } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Me. KATUALA GIZE Regis</h3>
            <p className="text-slate-300 mb-6">
              PhD & Avocat Expert en droit des conflits armés et droits de l'homme.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-slate-800 hover:bg-amber-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="#" 
                className="bg-slate-800 hover:bg-amber-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="bg-slate-800 hover:bg-amber-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-300 hover:text-amber-400 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Domaines d'expertise
                </a>
              </li>
              <li>
                <a href="#publications" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Documents</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/cv-katuala.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-amber-600 text-white rounded-lg shadow hover:bg-amber-700 transition-colors"
                >
                  Voir mon CV
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center">
                  <FileText size={16} className="mr-2" />
                  Liste des publications
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center">
                  <FileText size={16} className="mr-2" />
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Me. KATUALA GIZE Regis. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};