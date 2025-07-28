import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Heart, Leaf } from 'lucide-react';

const Startseite = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bg-100 to-bg-200 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-primary-100 mb-6">
                Willkommen beim Highland Hof
              </h1>
              <p className="text-xl text-text-200 mb-8 leading-relaxed">
                Leidenschaftliche Züchter von Highland Cattle im Vogelsberg. 
                Wir setzen auf nachhaltige Landwirtschaft, artgerechte Haltung 
                und die Erhaltung dieser wunderschönen Rinderrasse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/unsere-herde" className="rustic-button inline-flex items-center justify-center">
                  Unsere Herde entdecken
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link to="/ueber-uns" className="rustic-button inline-flex items-center justify-center">
                  Über uns erfahren
                </Link>
              </div>
            </div>
            <div className="h-96 text-lg font-semibold">
                <img
                  src={`/images/pages/h_6.jpg`}
                  alt={`Bild von Herde`}
                  className="w-full h-full object-cover rounded"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-100 mb-12">
            Warum Highland Cattle?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="farm-card text-center">
              <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-bg-100" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Robust & Genügsam</h3>
              <p className="text-text-200">
                Highland Cattle sind perfekt an das deutsche Klima angepasst und 
                kommen mit wenig ertragreichen Weiden zurecht.
              </p>
            </div>
            <div className="farm-card text-center">
              <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-bg-100" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Gutmütig & Friedlich</h3>
              <p className="text-text-200">
                Diese Rasse zeichnet sich durch einen ausgeglichenen und ruhigen 
                Charakter aus, ideal für die Familienhaltung.
              </p>
            </div>
            <div className="farm-card text-center">
              <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-bg-100" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Herdbuch-Qualität</h3>
              <p className="text-text-200">
                Alle unsere Tiere sind im Herdbuch geführt und entsprechen höchsten 
                Zuchtstandards für Reinrassigkeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-bg-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-100 mb-12">
            Unsere Highland Cattle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-64">
              <img
                src={`/images/pages/h_11.jpg`}
                alt={`Bild von Herde`}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="h-64">
              <img
                src={`/images/pages/h_7.jpg`}
                alt={`Bild von Herde`}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="h-64">
              <img
                src={`/images/pages/h_5.jpg`}
                alt={`Bild von Herde`}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/unsere-herde" className="rustic-button inline-flex items-center">
              Alle Tiere ansehen
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-300 mb-6">
            Interessiert an unseren Highland Cattle?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für weitere Informationen über unsere Zucht, 
            verfügbare Tiere oder Besuche auf unserem Hof.
          </p>
          <Link to="/kontakt" className="rustic-button inline-flex items-center">
            Kontakt aufnehmen
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Startseite;