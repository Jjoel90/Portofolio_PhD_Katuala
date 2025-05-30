import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  image: string;
}

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Me. KATUALA a représenté notre organisation avec une expertise juridique exceptionnelle. Sa connaissance approfondie du droit international a été décisive pour notre succès.",
      author: "Dr. Alain Dubois",
      position: "Directeur, Organisation Internationale des Droits Humains",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      content: "En tant que chercheur et praticien, Me. KATUALA apporte une perspective unique à ses analyses juridiques. Son travail sur la justice transitionnelle est une référence dans le domaine.",
      author: "Prof. Marie Lambert",
      position: "Chaire de Droit International, Université de Genève",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      content: "J'ai eu le privilège de collaborer avec Me. KATUALA sur plusieurs affaires complexes. Sa rigueur intellectuelle et son engagement pour la justice sont remarquables.",
      author: "Me. Jean-Pierre Moreau",
      position: "Avocat International, Cabinet Droit & Justice",
      image: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          <span className="inline-block pb-2 border-b-2 border-amber-600">Témoignages</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-slate-800 rounded-xl p-8 md:p-10 shadow-xl">
            <div className="absolute -top-6 left-10 text-amber-500">
              <Quote size={48} />
            </div>
            
            <div className="pt-4">
              <p className="text-lg md:text-xl italic mb-8">
                "{current.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={current.image} 
                    alt={current.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-amber-400">{current.author}</h4>
                  <p className="text-slate-400 text-sm">{current.position}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-slate-800 hover:bg-amber-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === currentIndex ? 'bg-amber-600' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-slate-800 hover:bg-amber-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};