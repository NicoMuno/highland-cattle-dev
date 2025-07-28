import React from 'react';
import { Calendar, Award, Heart } from 'lucide-react';

export interface Cow {
  id: number;
  name: string;
  birthYear: number;
  herdBookNumber?: string;
  character: string;
  category: 'bulls' | 'cows' | 'calves';
}

const CowCard: React.FC<{ cow: Cow }> = ({ cow }) => {
  return (
    <div className="farm-card">
      <img
        src={`/images/cattle/${cow.id}.jpg`}
        alt={`Bild von ${cow.name}`}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{cow.name}</h3>
      <div className="space-y-1 text-sm text-text-200">
        <div className="flex items-center">
          <Calendar size={14} className="mr-2" />
          <span>Geboren: {cow.birthYear}</span>
        </div>
        {cow.herdBookNumber && (
          <div className="flex items-center">
            <Award size={14} className="mr-2" />
            <span>Herdbuch-Nr.: {cow.herdBookNumber}</span>
          </div>
        )}
        <div className="flex items-center">
          <Heart size={14} className="mr-2" />
          <span>{cow.character}</span>
        </div>
      </div>
    </div>
  );
};

export default CowCard;