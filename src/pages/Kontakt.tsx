import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-100 mb-4">
              Kontakt
            </h1>
            <p className="text-xl text-text-200">
              Nehmen Sie Kontakt mit uns auf - wir freuen uns auf Sie!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="farm-card text-center">
              <MapPin className="text-accent-100 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold mb-2">Adresse</h3>
              <p className="text-text-200 text-sm">
                Highland Hof<br />
                Mustergasse 123<br />
                36304 Vogelsberg<br />
                Deutschland
              </p>
            </div>
            <div className="farm-card text-center">
              <Phone className="text-accent-100 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold mb-2">Telefon</h3>
              <p className="text-text-200 text-sm">
                +49 (0) 6641 12345<br />
                Mobil: +49 (0) 170 123456
              </p>
            </div>
            <div className="farm-card text-center">
              <Mail className="text-accent-100 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold mb-2">E-Mail</h3>
              <p className="text-text-200 text-sm">
                info@highland-hof.de<br />
                zucht@highland-hof.de
              </p>
            </div>
            <div className="farm-card text-center">
              <Clock className="text-accent-100 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold mb-2">Besuchszeiten</h3>
              <p className="text-text-200 text-sm">
                Nach Terminvereinbarung<br />
                Montag - Samstag<br />
                9:00 - 18:00 Uhr
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="farm-card">
              <div className="flex items-center mb-6">
                <MessageCircle className="text-accent-100 mr-3" size={28} />
                <h2 className="text-2xl font-semibold">Nachricht senden</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-100 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-100 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-100 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-100 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-100 mb-2">
                    Betreff
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-100 focus:border-transparent"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="tiere-kaufen">Tiere kaufen</option>
                    <option value="besuch">Hof besuchen</option>
                    <option value="zucht">Zucht & Beratung</option>
                    <option value="allgemein">Allgemeine Anfrage</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-100 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-100 focus:border-transparent"
                    placeholder="Ihre Nachricht..."
                  />
                </div>
                <button
                  type="submit"
                  className="rustic-button w-full"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Info & Map */}
            <div>
              <div className="farm-card mb-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-100">
                  Wir freuen uns auf Ihren Besuch!
                </h3>
                <p className="text-text-200 mb-4">
                  Gerne können Sie unseren Hof und unsere Highland Cattle besuchen. 
                  Vereinbaren Sie einfach einen Termin mit uns, damit wir uns genügend 
                  Zeit für Sie nehmen können.
                </p>
                <p className="text-text-200 mb-4">
                  Bei Interesse an unseren Tieren oder bei Fragen zur Highland Cattle 
                  Zucht beraten wir Sie gerne ausführlich. Wir freuen uns darauf, 
                  unsere Leidenschaft für diese wunderbaren Tiere mit Ihnen zu teilen.
                </p>
                <div className="bg-bg-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-100 mb-2">Wichtige Hinweise:</h4>
                  <ul className="text-sm text-text-200 space-y-1">
                    <li>• Bitte vereinbaren Sie immer einen Termin</li>
                    <li>• Feste Schuhe und wetterfeste Kleidung empfohlen</li>
                    <li>• Hunde bitte an der Leine führen</li>
                    <li>• Fotografieren mit Erlaubnis möglich</li>
                  </ul>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="farm-card">
                <h3 className="text-xl font-semibold mb-4 text-primary-100">
                  Anfahrt
                </h3>
                <div className="image-placeholder h-64 mb-4">
                  [Karte: Lage des Highland Hofs im Vogelsberg]
                </div>
                <p className="text-text-200 text-sm">
                  Unser Hof liegt im wunderschönen Vogelsberg in Hessen. 
                  Die genaue Anfahrtsbeschreibung erhalten Sie bei der Terminvereinbarung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;