import React from 'react';
import { Shield, Heart, Star, Award, Eye, Mountain, Beef } from 'lucide-react';

const HighlandCattle = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-100 mb-4">
              Highland Cattle
            </h1>
            <p className="text-xl text-text-200">
              Alles über die faszinierende Rinderrasse aus Schottland
            </p>
          </div>

          {/* Hero Image */}
          <div className="h-96 mb-12 text-xl">
            <img
              src={`/images/pages/h_3.jpg`}
              alt={`Bild von Herde`}
              className="w-full h-full object-cover rounded mb-4"
            />
          </div>

          {/* History */}
          <div className="farm-card mb-12">
            <div className="flex items-center mb-6">
              <Mountain className="text-accent-100 mr-3" size={32} />
              <h2 className="text-2xl font-semibold">Geschichte & Herkunft</h2>
            </div>
            <div className="prose prose-lg max-w-none text-text-100">
              <p className="mb-6">
                Das schottische Hochlandrind wird in Schottland seit über 200 Jahren in Reinzucht gezüchtet. Grund hierfür sind seine besonderen Eigenschaften. Es handelt sich hierbei um eine sehr genügsame und robuste Rinderrasse, die im Sommer mit wenig ertragreichen Weiden und in langen, nassen Wintern auch ohne Stall gut klar kommt.
              </p>
              <p className="mb-6">
                Ihre Robustheit verdanken diese Tiere den Lebensbedingungen im schottischen Hochland. Die Herdbuch-Zucht existiert seit 1884. Im Jahr 1978 wurden die schottischen Hochlandrinder erstmals nach Deutschland eingeführt und fanden in den letzten Jahren eine explosionsartige Verbreitung.
              </p>
            </div>
          </div>

          {/* Special Properties */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary-100 mb-8 text-center">
              Besondere Eigenschaften
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="farm-card text-center">
                <Shield className="text-accent-100 mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold mb-2">Robustheit</h3>
                <p className="text-text-200 text-sm">
                  Perfekt angepasst an raue Wetterbedingungen
                </p>
              </div>
              <div className="farm-card text-center">
                <Star className="text-accent-100 mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold mb-2">Langlebigkeit</h3>
                <p className="text-text-200 text-sm">
                  Können bis zu 20 Jahre alt werden
                </p>
              </div>
              <div className="farm-card text-center">
                <Heart className="text-accent-100 mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold mb-2">Gutmütigkeit</h3>
                <p className="text-text-200 text-sm">
                  Ruhiger und ausgeglichener Charakter
                </p>
              </div>
              <div className="farm-card text-center">
                <Award className="text-accent-100 mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold mb-2">Muttereigenschaften</h3>
                <p className="text-text-200 text-sm">
                  Exzellente Mutterkühe mit starken Instinkten
                </p>
              </div>
            </div>
          </div>

          {/* Characteristic Appearance */}
          <div className="farm-card mb-12">
            <div className="flex items-center mb-6">
              <Eye className="text-accent-100 mr-3" size={32} />
              <h2 className="text-2xl font-semibold">Charakteristisches Aussehen</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-100">Kopf</h3>
                <p className="text-text-200 mb-4">
                  Als besonders eindrucksvoll und einzigartig stellt sich der malerische Kopf dieser Rinderrasse dar. Der eher kurze aber breite Kopf mit dem buschigen, langen Haarschopf, der die lebhaften Augen überdeckt, ähnelt der Form eines gleichschenkligen Dreiecks.
                </p>
                <p className="text-text-200">
                  Die Hörner, die dem Hochlandrind sein majestätisches Aussehen verleihen, sind meist symmetrisch ausgeprägt. Beim Bullen sind sie eher waagrecht aus der Hornwurzel kommend nach vorne gebogen. Die Hörner der Kühe sind in der Regel deutlich länger und weniger stark ausgeprägt und mit Ausladung nach oben gebogen.
                </p>
              </div>
              <div className="h-64">
                <img
                  src={`/images/pages/h_7.jpg`}
                  alt={`Bild von Herde`}
                  className="w-full h-full object-cover rounded mb-4"
                />
              </div>
            </div>
          </div>

          {/* Body Characteristics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="farm-card">
              <h3 className="text-xl font-semibold mb-4 text-primary-100">Körper</h3>
              <p className="text-text-200 mb-4">
                Der Körperbau der Tiere ist kräftig, stämmig mit einem geraden und gut bemuskelten Rücken. Der muskulöse Rücken ist verhältnismäßig lang, breit und gerade.
              </p>
              <div className="h-48">
                <img
                  src={`/images/pages/h_0.jpg`}
                  alt={`Bild von Herde`}
                  className="w-full h-full object-cover rounded mb-4"
                />
              </div>
            </div>
            <div className="farm-card">
              <h3 className="text-xl font-semibold mb-4 text-primary-100">Haare</h3>
              <p className="text-text-200 mb-4">
                Das dichte Fell der Tiere setzt sich aus einem dichten Unterhaar und dem langen Oberhaar zusammen. Es schützt die Tiere vor Kälte, Regen, Hitze und Parasiten und gibt dem Highland Cattle sein charakteristisches und urwüchsiges Erscheinungsbild.
              </p>
              <div className="h-48">
                <img
                  src={`/images/pages/h_2.jpg`}
                  alt={`Bild von Herde`}
                  className="w-full h-full object-cover rounded mb-4"
                />
              </div>
            </div>
          </div>

          {/* Meat Quality */}
          <div className="farm-card mb-12">
            <div className="flex items-center mb-6">
              <Beef className="text-accent-100 mr-3" size={32} />
              <h2 className="text-2xl font-semibold">Fleischqualität</h2>
            </div>
            <div className="prose prose-lg max-w-none text-text-100">
              <h3 className="text-xl font-semibold mb-4 text-accent-100">
                  Gesunde Zucht und Haltung - das schmeckt man!
              </h3>
              <p className="mb-6">
                Die Besonderheit des Fleisches ist neben dem sehr guten Geschmack sein geringer Fett- und Cholesterinanteil. Im Vergleich zu anderen Rinderrassen besitzt es nur 30% des Fett- und 75% des Cholesterinanteils.
              </p>
              <p className="mb-6">
                Ein weiteres Qualitätsmerkmal ist sein wesentlich höherer Eiweißgehalt. Die Struktur und Marmorierung des Fleisches ist feinfaserig beschaffen wodurch sich das Fleisch als sehr zart und saftig auszeichnet.
              </p>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default HighlandCattle;