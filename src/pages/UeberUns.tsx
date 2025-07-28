import React from 'react';
import { Users, Target, Tractor, Award } from 'lucide-react';

const UeberUns = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-100 mb-4">
              Über uns
            </h1>
            <p className="text-xl text-text-200">
              Unsere Geschichte und Leidenschaft für Highland Cattle
            </p>
          </div>

          {/* Hero Image */}
          <div className="h-64 mb-12">
            <img
              src={`/images/pages/Herde_1.jpg`}
              alt={`Bild von Herde`}
              className="w-full h-full object-cover rounded mb-4"
            />
          </div>

          {/* Story */}
          <div className="farm-card mb-12">
            <div className="flex items-center mb-6">
              <Users className="text-accent-100 mr-3" size={32} />
              <h2 className="text-2xl font-semibold">Unsere Geschichte</h2>
            </div>
            <div className="prose prose-lg max-w-none text-text-100">
              <p className="mb-6">
                Nach 10 Jahren landwirtschaftlicher Auszeit haben wir uns überlegt, als Ausgleich zu unserem „Bürojob" wieder etwas Landwirtschaft mit Viehhaltung zu betreiben. Maschinen, Geräte, Wiesen war alles noch vorhanden. Bei der Suche nach Rindern mit ganzjähriger Weidehaltung war es schnell klar - Highlands müssen es sein! Diese sind perfekt für unsere Vogelsberger Landschaft und sehen auch noch schön aus.
              </p>
              <p className="mb-6">
                In unserer Nähe gab es einen erfahrenen Highland-Züchter, der Herdbuch-Färsen zu verkaufen hatte. Dort kauften wir unsere ersten beiden Highland Cattle. Zu Beginn deckten wir noch mit einem Leihbullen, dann wurde die Herde größer und es lohnte sich einen eigenen Deckbullen zu kaufen.
              </p>
              <p className="mb-6">
                Nun züchten wir seit einigen Jahren Highlands und haben unsere Entscheidung nicht bereut. Vor allem macht uns der Umgang mit den Tieren und die dazugehörige Arbeit in der Landwirtschaft viel Spaß!
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="farm-card mb-12">
            <div className="flex items-center mb-6">
              <Target className="text-accent-100 mr-3" size={32} />
              <h2 className="text-2xl font-semibold">Unser Zuchtziel</h2>
            </div>
            <p className="text-text-100 text-lg">
              Unser Zuchtziel ist es, die Rasse „Highland Cattle" in Reinzucht zu erhalten. Daher werden in unserem Betrieb ausschließlich im Herdbuch geführte Tiere gehalten, die sich durch einen ausgeglichenen und ruhigen Charakter auszeichnen.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="farm-card">
              <div className="flex items-center mb-4">
                <Tractor className="text-accent-100 mr-3" size={28} />
                <h3 className="text-xl font-semibold">Moderne Landwirtschaft</h3>
              </div>
              <p className="text-text-200">
                Wir verbinden traditionelle Zuchtmethoden mit modernen landwirtschaftlichen Praktiken für optimale Tierhaltung.
              </p>
            </div>
            <div className="farm-card">
              <div className="flex items-center mb-4">
                <Award className="text-accent-100 mr-3" size={28} />
                <h3 className="text-xl font-semibold">Herdbuch-Zucht</h3>
              </div>
              <p className="text-text-200">
                Alle unsere Tiere sind im Herdbuch registriert und entsprechen höchsten Qualitätsstandards der Reinzucht.
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64">
              <img
                src={`/images/pages/h_1.jpg`}
                alt={`Bild von Herde`}
                className="w-full h-full object-cover rounded mb-4"
              />
            </div>
            <div className="h-64">
              <img
                src={`/images/pages/Herde_1.jpg`}
                alt={`Bild von Herde`}
                className="w-full h-full object-cover rounded mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UeberUns;