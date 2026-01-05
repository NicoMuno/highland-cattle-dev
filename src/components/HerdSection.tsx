import React from 'react';
import CattleCard, { Cattle } from './CattleCard';

interface HerdSectionProps {
  title: string;
  cattle: Cattle[];
}

const HerdSection: React.FC<HerdSectionProps> = ({ title, cattle }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-primary-100 mb-8">{title}</h2>
      <div
        className={`grid gap-6 ${
          title.includes('Kälber')
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {cattle.map((cattle,i) => (
          <CattleCard key={i} cattle={cattle} />
        ))}
      </div>
    </section>
  );
};

export default HerdSection;