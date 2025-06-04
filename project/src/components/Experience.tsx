import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  isLeft?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  subtitle, 
  description, 
  isLeft = false 
}) => {
  return (
    <div className={`relative flex md:contents ${isLeft ? 'flex-row-reverse' : ''}`}>
      <div className="col-start-1 col-end-2 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-0.5 bg-amber-600 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 bg-amber-700 rounded-full shadow"></div>
      </div>
      
      <div className={`bg-white p-6 rounded-xl shadow-md my-4 ml-5 ${
        isLeft ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
      } w-full md:w-2/5`}>
        <span className="inline-block py-1 px-2 rounded bg-amber-100 text-amber-800 text-xs font-semibold mb-2">
          {year}
        </span>
        <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
        <h4 className="text-amber-700 font-medium">{subtitle}</h4>
        <p className="text-slate-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-slate-800">
          <span className="inline-block pb-2 border-b-2 border-amber-600">Parcours</span>
        </h2>
        
        <div className="flex flex-col md:grid grid-cols-1 mx-auto p-2 relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-600/20"></div>
          
          <TimelineItem 
            year="2024 - Présent"
            title="Professeur des Universités"
            subtitle="Université Internationale"
            description="Enseignement du droit international public, des droits des humains et encadrement des recherches doctorales."
          />

          <TimelineItem 
            year="2024"
            title="Docteur en Droit International Public"
            subtitle="Université de Kisangani"
            description="Thèse sur 'L'État congolais face à l'obligation de protéger les populations civiles victimes des conflits armés de l'Ituri et du Nord-Kivu.' - Mention grande distinction avec félicitations du jury."
          />

          <TimelineItem 
            year="2019"
            title="Inscription au Barreau"
            subtitle="Ordre des Avocats de la RDC"
            description="Admission à la pratique du droit avec spécialisation en droit international et droit des droits humains, libertés publiques."
            isLeft={true}
          />

          <TimelineItem 
            year="2019 - Présent"
            title="Coordonateur Provincial"
            subtitle="Organisation Non Gouvernementale"
            description="De l'association Renouveau pour la paix et l'ordre social dans la province de la Tshopo."
            isLeft={true}
          />
          
          <TimelineItem 
            year="2017"
            title="Formateur des formateurs"
            subtitle="Formations"
            description="En droit international humanitaire."
          />
        </div>
      </div>
    </section>
  );
};