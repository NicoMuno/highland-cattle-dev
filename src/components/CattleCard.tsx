import React from 'react';
import { Calendar, Heart } from 'lucide-react';

import { assetUrl } from "../utils/assets";

export interface Cattle {
  name: string;
  birthYear: number;
  character: string;
  category: 'bulls' | 'cows' | 'calves';
  path: string
}

const CattleCard: React.FC<{ cattle: Cattle }> = ({ cattle }) => {
  return (
    <div className="farm-card">
      <img
        src={assetUrl(cattle.path)}
        alt={`Bild von ${cattle.name}`}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{cattle.name}</h3>
      <div className="space-y-1 text-sm text-text-200">
        <div className="flex items-center">
          <Calendar size={14} className="mr-2" />
          <span>Geboren: {cattle.birthYear}</span>
        </div>
        <div className="flex items-center">
          <Heart size={14} className="mr-2" />
          <span>{cattle.character}</span>
        </div>
      </div>
    </div>
  );
};

export default CattleCard;