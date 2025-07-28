import React from 'react';
import { MapPin } from 'lucide-react';
import cowData from '../data/cows.json';
import HerdSection from '../components/HerdSection';

const UnsereHerde = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-100 mb-4">
              Unsere Herde
            </h1>
            <p className="text-xl text-text-200">
              Lernen Sie unsere Highland Cattle Familie kennen
            </p>
          </div>

          {/* Herd Overview */}
          <div className="farm-card mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-100 mb-2">15+</div>
                <div className="text-text-200">Tiere in der Herde</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-100 mb-2">100%</div>
                <div className="text-text-200">Herdbuch-geführt</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-100 mb-2">10+</div>
                <div className="text-text-200">Jahre Erfahrung</div>
              </div>
            </div>
          </div>

          {/* Main Herd Image */}
          <div className="image-placeholder h-96 mb-12 text-xl">
            [Hauptbild: Komplette Highland Cattle Herde auf der Weide]
          </div>

          <HerdSection title="Unsere Bullen" cows={cowData.bulls.map((c) => ({ ...c, category: 'bulls' }))} />
          <HerdSection title="Unsere Kühe" cows={cowData.cows.map((c) => ({ ...c, category: 'cows' }))} />
          <HerdSection title="Unsere Kälber" cows={cowData.calves.map((c) => ({ ...c, category: 'calves' }))} />

          {/* Location */}
          <div className="farm-card">
            <div className="flex items-center mb-4">
              <MapPin className="text-accent-100 mr-3" size={28} />
              <h2 className="text-2xl font-semibold">Unsere Weiden</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-text-200 mb-4">
                  Unsere Highland Cattle leben das ganze Jahr über auf weitläufigen
                  Weiden im Vogelsberg. Die natürliche Landschaft bietet ideale
                  Bedingungen für eine artgerechte Haltung.
                </p>
                <ul className="space-y-2 text-text-200">
                  <li>• Ganzjährige Weidehaltung</li>
                  <li>• Natürliche Vogelsberger Landschaft</li>
                  <li>• Artgerechte Haltung ohne Stallzwang</li>
                  <li>• Stressfreie Umgebung</li>
                </ul>
              </div>
              <div className="image-placeholder h-48">
                [Bild: Weidelandschaft Vogelsberg]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnsereHerde;