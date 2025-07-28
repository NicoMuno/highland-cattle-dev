import React from 'react';
import CowCard, { Cow } from './CowCard';

interface HerdSectionProps {
  title: string;
  cows: Cow[];
}

const HerdSection: React.FC<HerdSectionProps> = ({ title, cows }) => {
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
        {cows.map((cow) => (
          <CowCard key={cow.id} cow={cow} />
        ))}
      </div>
    </section>
  );
};

export default HerdSection;