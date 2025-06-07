import React, { useState } from 'react';
import { BookOpen, FileText } from 'lucide-react';

interface Publication {
  id: number;
  link: string;
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
      link: "project/public/Cours droits de l'homme.pdf",
      title: "Cours de Droits de l'homme",
      year: "2025",
      publisher: "Université Mapon L1 LMD",
      description: "Elle tend à protéger la vie et la santé, ainsi qu'à faire respecter la personne humaine."
    },
    {
      id: 2,
      type: 'article',
      link: "project/public/Cours droits de l'homme.pdf",
      title: "Analyse de régime juridique des sanctions en droit international et la protection des droits de l'homme: Regard sur la République Démocratique du Congo à",
      year: "2018",
      publisher: "International Journal of Innovation and Applied Studies",
      description: "Les sanctions sont l'un des moyens de pression à la disposition des Etats souverains ou des Organisations Iternationalles."
    },
    {
      id: 3,
      type: 'cours',
      link: "project/public/DROITS-ET-DEVOIRS-DES-CITOYENS-PDF.pdf",
      title: "Droits et Devoirs des citoyens humanitaire: Principes et Applications",
      year: "2025",
      publisher: "Université Mapon L1 LMD",
      description: "Tout citoyen doit aimer son pays, le protéger et être prêt à le défendre à tout prix."
    },
    {
      id: 4,
      type: 'cours',
      link: "project/public/COURS-DE-LA-RESPONSABILITE-INTERNATIONAL.pdf", 
      title: "La Responsabilité Internationale ",
      year: "2024",
      publisher: "Université Catholique la Sapientia de Goma M1",
      description: "Le droit international public de la responsabilité est encore très largement coutumier."
    },
    {
      id: 5,
      type: 'cours',
      link: "project/public/DROIT-DE-L'ENVIRONNEMENT-GRABEN-TRAITE.pdf", 
      title: "Notes de cours de droit de l'environnement",
      year: "2025",
      publisher: "Université Catholique de Graben L2 LMD Droit",
      description: "Présente l'évolution historique du droit de l'environnement, ses origines à nos jours montrant comment le droit de l'environnement est né ainsi que son développement."
    },
    {
      id: 6,
      type: 'cours',
      link: "project/public/DEONTOLOGIE_DES-FONCTIONNAIRES-INTERNATIONAUX-GRABEN-PDF.pdf", 
      title: "Notes de cours des fonctionnaires internationaux",
      year: "2025",
      publisher: "A l'usage des étudiants en Droit",
      description: "Permet à l'étudiant de découvrir les concepts fondamentaux qui influent sur l'enseignement de la déontologie des Fonctionnaires Internationaux."
    },
    {
      id: 7,
      type: 'cours',
      link: "project/public/DROIT-INTERNATIONAL-ET-QUESTION-APPROFONDIES-DE-L'ENVIRONNEMENT-TRAITE.pdf", 
      title: "Droit international de l'environnement: Questions approfondies de l'environnement",
      year: "2025",
      publisher: "Université Catholique de Graben M1 Droit",
      description: "Le droit de l'environneme est l'ensemble  des règles qui ont pour objet de protéger l'environnement contre les nuisances et les pollutions."
    },
    {
      id: 8,
      type: 'cours',
      link: "project/public/COURS-DE-CRITIQUES-DE-LA-JURISPRUDENCE-DE-LA-CIJMA.pdf", 
      title: "Notes de cours de critiques de la jurisprudence de la cour internationale de justice",
      year: "2024",
      publisher: "Université Catholique la Sapientia de Goma M1",
      description: "Ensemble des règles de droit qui se dégagent des décisions rendues par les cours et tribunaux ..."
    },
    {
      id: 9,
      type: 'article',
      link: "project/public/MEMOIRE-MASTER-KATUALA-GIZE.pdf", 
      title: "L'état congolais face à l'obligation de protéger les populations civiles victimes des conflits armés de l'Ituri et du Nord-Kivu (2014 à 2023)",
      year: "2024",
      publisher: "Université Catholique de Graben L2 LMD Droit",
      description: "L'état congolais doit renforcer les mécanismes défensifs et préventifs de la RDC pour se prémunir contre les violations des droits de l'homme et du DIH pendant les conflits armés."
    },
    {
      id: 10,
      type: 'article',
      link: "project/public/THESE-REGIS-KATUALA-2024-PDF-Copie-.pdf", 
      title: "Sanctions ciblées et souveraineté des états: Autopsie des actes unilateraux des états-unis d'amérique et de l'union européenne à l'encontre des autorités congolaise",
      year: "2020",
      publisher: "Université de Kisangani Faculté de Droit",
      description: "Ces sanctions ont suscité des réactions chez les autorités congolaises et ont généré une controverse juridique."
    }
  ];
  
  const filteredPublications = publications.filter(pub => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'Cours') return pub.type === 'cours';
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
              onClick={() => setActiveFilter('Cours')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === 'Cours' 
                  ? 'bg-amber-600 text-white' 
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              Cours
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
                {pub.type === 'cours' ? (
                  <BookOpen className="text-amber-700 mr-2\" size={20} />
                ) : (
                  <FileText className="text-amber-700 mr-2" size={20} />
                )}
                <span className="text-sm font-medium text-amber-700">
                  {['Cours', 'Article'].includes(pub.type) ? 'Cours' : 'Article'} • {pub.year}
                </span>

              </div>
              
              <h3 className="text-lg font-bold mb-2 text-slate-800">{pub.title}</h3>
              <p className="text-amber-800 text-sm mb-3">{pub.publisher}</p>
              <p className="text-slate-600 text-sm">{pub.description}</p>

              <a href={pub.link} className='border py-1 px-4 rounded border-orange-800 text-black mb-4'>
                Télécharger
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#publications" 
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