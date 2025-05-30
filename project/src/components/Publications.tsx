import React, { useState } from 'react';
import { BookOpen, FileText } from 'lucide-react';

interface Publication {
  id: number;
  type: 'book' | 'article';
  title: string;
  year: string;
  publisher: string;
  description: string;
}

export const Publications = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'books' | 'articles'>('all');
  
  const publications: Publication[] = [
    {
      id: 1,
      type: 'book',
      title: "Les Mécanismes de Justice Transitionnelle en Droit International",
      year: "2021",
      publisher: "Éditions Juridiques Internationales",
      description: "Une analyse approfondie des mécanismes de justice transitionnelle et leur impact sur la reconstruction post-conflit."
    },
    {
      id: 2,
      type: 'article',
      title: "L'évolution de la responsabilité des États pour violations graves des droits humains",
      year: "2020",
      publisher: "Revue Internationale de Droit",
      description: "Article examinant les développements récents dans la jurisprudence internationale concernant la responsabilité étatique."
    },
    {
      id: 3,
      type: 'book',
      title: "Droit International Humanitaire: Principes et Applications",
      year: "2019",
      publisher: "Presses Universitaires",
      description: "Manuel de référence sur les principes fondamentaux du droit humanitaire et leur mise en œuvre pratique."
    },
    {
      id: 4,
      type: 'article',
      title: "La Cour Pénale Internationale face aux défis contemporains",
      year: "2018",
      publisher: "Journal de Droit International",
      description: "Analyse critique des obstacles actuels à l'efficacité de la Cour Pénale Internationale."
    },
    {
      id: 5,
      type: 'article',
      title: "Protection des minorités en droit international: avancées et limites",
      year: "2017",
      publisher: "Revue des Droits de l'Homme",
      description: "Étude comparative des mécanismes de protection des minorités dans différents systèmes juridiques."
    }
  ];
  
  const filteredPublications = publications.filter(pub => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'books') return pub.type === 'book';
    if (activeFilter === 'articles') return pub.type === 'article';
    return true;
  });

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 text-slate-800">
          <span className="inline-block pb-2 border-b-2 border-amber-600">Publications</span>
        </h2>
        
        <p className="text-center text-slate-700 max-w-3xl mx-auto mb-10">
          Découvrez les contributions académiques de Me. KATUALA GIZE Regis à l'avancement du droit international.
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-100 rounded-lg">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-amber-600 text-white' 
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tout
            </button>
            <button 
              onClick={() => setActiveFilter('books')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === 'books' 
                  ? 'bg-amber-600 text-white' 
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              Livres
            </button>
            <button 
              onClick={() => setActiveFilter('articles')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === 'articles' 
                  ? 'bg-amber-600 text-white' 
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              Articles
            </button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPublications.map((pub) => (
            <div key={pub.id} className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {pub.type === 'book' ? (
                  <BookOpen className="text-amber-700 mr-2\" size={20} />
                ) : (
                  <FileText className="text-amber-700 mr-2" size={20} />
                )}
                <span className="text-sm font-medium text-amber-700">
                  {pub.type === 'book' ? 'Livre' : 'Article'} • {pub.year}
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-slate-800">{pub.title}</h3>
              <p className="text-amber-800 text-sm mb-3">{pub.publisher}</p>
              <p className="text-slate-600 text-sm">{pub.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
          >
            Voir toutes les publications
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};