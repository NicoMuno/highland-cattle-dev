import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

import kontakt_data from "../data/pages/kontakt.json";

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
              {kontakt_data.title}
            </h1>
            <p className="text-xl text-text-200">
              {kontakt_data.subtitle}
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="farm-card text-center">
              <MapPin className="text-accent-100 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold mb-2">Adresse</h3>
              <p className="text-text-200 text-sm">
                {kontakt_data.adress.anschrift}<br />
                {kontakt_data.adress.post}<br />
                {kontakt_data.adress.land}
              </p>
            </div>
            <div className="farm-card text-center">
              <Phone className="text-accent-100 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold mb-2">Telefon</h3>
              <p className="text-text-200 text-sm">
                {kontakt_data.phone}
              </p>
            </div>
            <div className="farm-card text-center">
              <Mail className="text-accent-100 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold mb-2">E-Mail</h3>
              <p className="text-text-200 text-sm">
                {kontakt_data.mail}
              </p>
            </div>
            <div className="farm-card text-center">
              <Clock className="text-accent-100 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold mb-2">
                {kontakt_data.visiting.heading}
              </h3>
              <p className="text-text-200 text-sm">
                {kontakt_data.visiting.subheading}<br />
                {kontakt_data.visiting.days}<br />
                {kontakt_data.visiting.hours}
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="farm-card relative"> {/* "relativ" was added for the blocker */}


              <div className="flex items-center mb-6">
                <MessageCircle className="text-accent-100 mr-3" size={28} />
                <h2 className="text-2xl font-semibold">Nachricht senden</h2>
              </div>

              {/* Overlay Blocker */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-md">
                <div className="text-center p-6">
                  <h3 className="text-xl font-semibold text-primary-100 mb-2">
                    Kontaktformular vorübergehend deaktiviert
                  </h3>
                  <p className="text-text-200">
                    Bitte schreiben Sie uns direkt eine E-Mail an&nbsp;
                    <a
                      href="mailto:die_kleins@gmx.de"
                      className="text-accent-100 underline"
                    >
                      {kontakt_data.mail}
                    </a>.
                    <br />
                    Vielen Dank für Ihr Verständnis!
                  </p>
                </div>
              </div>


              {/* <form onSubmit={handleSubmit} className="space-y-6">
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
              </form> */}
            </div>

            {/* Info & Map */}
            <div>
              <div className="farm-card mb-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-100">
                  {kontakt_data.info.heading}
                </h3>
                {
                  kontakt_data.info.sections.map(
                    (section, i) => (
                      <p key={i} className="text-text-200 mb-4">
                        {section.text}
                      </p>
                    )
                  )
                }
                {/* <p className="text-text-200 mb-4">
                  Gerne können Sie unseren Hof und unsere Highland Cattle besuchen. 
                  Vereinbaren Sie einfach einen Termin mit uns, damit wir uns genügend 
                  Zeit für Sie nehmen können.
                </p>
                <p className="text-text-200 mb-4">
                  Bei Interesse an unseren Tieren oder bei Fragen zur Highland Cattle 
                  Zucht beraten wir Sie gerne ausführlich. Wir freuen uns darauf, 
                  unsere Leidenschaft für diese wunderbaren Tiere mit Ihnen zu teilen.
                </p> */}
                <div className="bg-bg-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-100 mb-2">
                    {kontakt_data.info.subheading}
                  </h4>
                  <ul className="text-sm text-text-200 space-y-1">
                    {
                      kontakt_data.info.list.map(
                        (element, i) => (
                          <li key={i}>
                            {element.text}
                          </li>
                        )
                      )
                    }
                    {/* <li>• Bitte vereinbaren Sie immer einen Termin</li>
                    <li>• Feste Schuhe und wetterfeste Kleidung empfohlen</li>
                    <li>• Hunde bitte an der Leine führen</li>
                    <li>• Fotografieren mit Erlaubnis möglich</li> */}
                  </ul>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="farm-card">
                <h3 className="text-xl font-semibold mb-4 text-primary-100">
                      {kontakt_data.map.heading}
                </h3>
                {/* <div className="image-placeholder h-64 mb-4">
                  [Karte: Lage des Highland Hofs im Vogelsberg]
                </div> */}

                {/* Embedded Google Map */}
                <div className="rounded-md overflow-hidden mb-4 h-64 w-full">
                  <iframe
                    title="Karte zum Hof"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.6792259935253!2d9.204853515746546!3d50.59082737949406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd17a489b22211%3A0x2c5090f14bda0b58!2sM%C3%BChlweg%207%2C%2035327%20Ulrichstein!5e0!3m2!1sde!2sde!4v1694025887631!5m2!1sde!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                <p className="text-text-200 text-sm">
                  {kontakt_data.map.text}
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