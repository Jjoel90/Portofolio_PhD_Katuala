import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-40 h-40 bg-amber-600 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute right-0 bottom-1/4 w-40 h-40 bg-amber-600 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 tracking-tight">
            <span className="block">Me. KATUALA GIZE Regis</span>
            <span className="text-amber-400 mt-2 block text-2xl md:text-3xl lg:text-4xl">PhD & Avocat</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mt-6">
            Expert en droit des conflits armés et droits de l'homme.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-md transition-colors shadow-lg"
            >
              Prendre Rendez-vous
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 bg-transparent border border-white hover:bg-white/10 text-white rounded-md transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};