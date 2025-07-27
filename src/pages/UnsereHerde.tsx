import React from 'react';
import { Calendar, MapPin, Award, Heart } from 'lucide-react';

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
                <div className="text-3xl font-bold text-accent-100 mb-2">5+</div>
                <div className="text-text-200">Jahre Erfahrung</div>
              </div>
            </div>
          </div>

          {/* Main Herd Image */}
          <div className="image-placeholder h-96 mb-12 text-xl">
            [Hauptbild: Komplette Highland Cattle Herde auf der Weide]
          </div>

          {/* Bulls Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-100 mb-8">Unsere Bullen</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="farm-card">
                <div className="image-placeholder h-64 mb-4">
                  [Bild: Highland Deckbulle 1]
                </div>
                <h3 className="text-xl font-semibold mb-2">Deckbulle "Magnus"</h3>
                <div className="space-y-2 text-text-200">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>Geboren: 2019</span>
                  </div>
                  <div className="flex items-center">
                    <Award size={16} className="mr-2" />
                    <span>Herdbuch-Nr.: HC-2019-XXX</span>
                  </div>
                  <div className="flex items-center">
                    <Heart size={16} className="mr-2" />
                    <span>Charakteristik: Ruhig, ausgeglichen</span>
                  </div>
                </div>
              </div>
              <div className="farm-card">
                <div className="image-placeholder h-64 mb-4">
                  [Bild: Highland Deckbulle 2]
                </div>
                <h3 className="text-xl font-semibold mb-2">Jungbulle "Thor"</h3>
                <div className="space-y-2 text-text-200">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>Geboren: 2022</span>
                  </div>
                  <div className="flex items-center">
                    <Award size={16} className="mr-2" />
                    <span>Herdbuch-Nr.: HC-2022-XXX</span>
                  </div>
                  <div className="flex items-center">
                    <Heart size={16} className="mr-2" />
                    <span>Charakteristik: Lebhaft, freundlich</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cows Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-100 mb-8">Unsere Kühe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((cow) => (
                <div key={cow} className="farm-card">
                  <div className="image-placeholder h-48 mb-4">
                    [Bild: Highland Kuh {cow}]
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Kuh "Bella {cow}"</h3>
                  <div className="space-y-1 text-sm text-text-200">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      <span>Geboren: 201{cow + 5}</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={14} className="mr-2" />
                      <span>Herdbuch geführt</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Calves Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-100 mb-8">Unsere Kälber</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((calf) => (
                <div key={calf} className="farm-card">
                  <div className="image-placeholder h-40 mb-4">
                    [Bild: Highland Kalb {calf}]
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Kalb {calf}</h3>
                  <div className="space-y-1 text-sm text-text-200">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      <span>Geboren: 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Heart size={14} className="mr-2" />
                      <span>Gesund & munter</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Location */}
          <div className="farm-card">
            <div className="flex items-center mb-4">
              <MapPin className="text-accent-100 mr-3" size={28} />
              <h2 className="text-2xl font-semibold">Unsere Weiden</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-text-200 mb-4">
                  Unsere Highland Cattle leben das ganze Jahr über auf weitläufigen Weiden 
                  im Vogelsberg. Die natürliche Landschaft bietet ideale Bedingungen für 
                  eine artgerechte Haltung.
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