import React, { useState } from 'react';
import { BookOpen, FileText } from 'lucide-react';

interface Publication {
  id: number;
  type: 'cours' | 'article';
  title: string;
  year: string;
  publisher: string;
  description: string;
}

export const Publications = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Cours' | 'articles'>('all');
  
  const publications: Publication[] = [
    {
      id: 1,
      type: 'cours',
      title: "Cours de Droits de l'homme",
      year: "2025",
      publisher: "Université Mapon L1 LMD",
      description: "Elle tend à protéger la vie et la santé, ainsi qu'à faire respecter la personne humaine."
    },
    {
      id: 2,
      type: 'article',
      title: "Analyse de régime juridique des sanctions en droit international et la protection des droits de l'homme: Regard sur la République Démocratique du Congo à",
      year: "2018",
      publisher: "International Journal of Innovation and Applied Studies",
      description: "Les sanctions sont l'un des moyens de pression à la disposition des Etats souverains ou des Organisations Iternationalles."
    },
    {
      id: 3,
      type: 'cours',
      title: "Droits et Devoirs des citoyens Humanitaire: Principes et Applications",
      year: "2025",
      publisher: "Université Mapon L1 LMD",
      description: "Tout citoyen doit aimer son pays, le protéger et être prêt à le défendre à tout prix."
    },
    {
      id: 4,
      type: 'cours',
      title: "La Responsabilité Internationale ",
      year: "2024",
      publisher: "Université Catholique la Sapientia de Goma M1",
      description: "Le droit international public de la responsabilité est encore très largement coutumier."
    },
    {
      id: 5,
      type: 'cours',
      title: "Notes de cours de droit de l'environnement",
      year: "2025",
      publisher: "Université Catholique de Graben L2 LMD Droit",
      description: "Présente l'évolution historique du droit de l'environnement, ses origines a nos jours montrant comment le droit de l'environnement est né ainsi que son développement."
    },
    {
      id: 6,
      type: 'Thèse',
      title: "L'état congolais face à l'obligation de protéger les populations civiles victimes des conflits armés de l'Ituri et du Nord-Kivu (2014 à 2023)",
      year: "2024",
      publisher: "Université Catholique de Graben L2 LMD Droit",
      description: "L'état congolais doit renforcer les mécanismes défensifs et préventifs de la RDC pour se prémunir contre les violations des droits de l'homme et du DIH pendant les conflits armés."
    },
    {
      id: 7,
      type: 'Mémoire',
      title: "Sanctions ciblées et souveraineté des états: Autopsie des actes unilateraux des états-unis d'amérique et de l'union européenne à l'encontre des autorités congolaise",
      year: "2020",
      publisher: "Université de Kisangani Faculté de Droit",
      description: "Ces sanctions ont suscité des réactions chez les autorités congolaises et ont généré une controverse juridique."
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
                  {pub.type === 'book' ? 'Livres' : 'Article'} • {pub.year}
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