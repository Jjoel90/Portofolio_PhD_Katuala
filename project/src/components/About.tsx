import React from 'react';
import { BookOpen, Scale, GraduationCap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-slate-800">
          <span className="inline-block pb-2 border-b-2 border-amber-600">À propos</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://res.cloudinary.com/dkvtklfki/image/upload/v1749059149/Img-Katuala_kcowxg.jpg" 
                alt="Me. KATUALA GIZE Regis" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-50 rounded-lg -z-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-slate-800">
              Un parcours d'excellence au service de la justice
            </h3>
            
            <p className="mb-6 text-slate-700 leading-relaxed">
              Me. KATUALA GIZE Regis est un avocat de renom et chercheur académique, combinant expertise juridique et rigueur intellectuelle au plus haut niveau.
            </p>
            
            <p className="mb-8 text-slate-700 leading-relaxed">
              Titulaire d'un doctorat en droit international public de L'Université de Kisangani et inscrit à l'Ordre National des Avocats de la République Démocratique du Congo sur le numéro 18186. Proffesseur et enseignant visiteur dans plusieurs Universités de la RDC dont l'Université Libre de Kisangani, Université Catholique de Kisangani, Université de Goma, Université Catholique de la Sapientia de Goma, Université Catholique du Graben Butembo, Université Mapon, Université de Kindu ...  
            </p>
            <p className="mb-8 text-slate-700 leading-relaxed">
              Son approche combine une solide formation théorique avec une expérience pratique substantielle.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Scale className="text-amber-700" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Expertise Juridique</h4>
                  <p className="text-slate-600">Conseil juridique et expert en droit internal pénal, assistance juridique devant les juridictions civiles, pénales, administratives et militaires de la RDC.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <GraduationCap className="text-amber-700" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Excellence Académique</h4>
                  <p className="text-slate-600">Recherche de pointe et publications reconnues internationalement</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <BookOpen className="text-amber-700" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Enseignement</h4>
                  <p className="text-slate-600">Formation de la prochaine génération de juristes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};