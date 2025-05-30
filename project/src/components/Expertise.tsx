import React from 'react';
import { Globe, Scale, BookOpen, Building, Gavel, Users } from 'lucide-react';

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
      <div className="text-amber-700 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 text-slate-800">
          <span className="inline-block pb-2 border-b-2 border-amber-600">Domaines d'Expertise</span>
        </h2>
        
        <p className="text-center text-slate-700 max-w-3xl mx-auto mb-16">
          Me. KATUALA GIZE Regis combine expertise académique et pratique juridique dans plusieurs domaines spécialisés du droit.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
        <ExpertiseCard 
            icon={<Users size={40} />}
            title="Professeur des Universités"
            description="Enseignant de droit internal public, de droits de l'homme et encadrement des recherches doctorales."
          />
        
          <ExpertiseCard 
            icon={<Globe size={40} />}
            title="Doctorat en Droit International Public Université de Kisangani"
            description="These sur: l'Etat congolais face a l'obligation de protéger les populations ciles victimes des conflits armés de l'Ituri et du Nord-Kivu. Mention grande distinction."
          />
          
          <ExpertiseCard 
            icon={<Scale size={40} />}
            title="Justice Transitionnelle"
            description="Expert en mécanismes de justice après des périodes de conflit ou de violations massives des droits humains."
          />
          
          <ExpertiseCard 
            icon={<Building size={40} />}
            title="Inscription au Barreau"
            description="Ordre des Avocats de la République Dvmocratique du Congo. Admission a la pratique du droit avec spvcialisation droit international pénal et droits humains, libertés publiques."
          />
          
          <ExpertiseCard 
            icon={<Gavel size={40} />}
            title="Droit International Public"
            description="Spéciaiste de droit international pénal et droit des conflits armés. Avec une plus value sur les relations enre Etats, des traités internationaux et du fonctionnement des organisations internationales."
          />
          
          <ExpertiseCard 
            icon={<BookOpen size={40} />}
            title="Recherche Juridique"
            description="Analyse approfondie des développements juridiques internationaux et contribution à l'évolution du droit."
          />
        </div>
      </div>
    </section>
  );
};