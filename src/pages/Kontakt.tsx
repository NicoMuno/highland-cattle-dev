import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import kontakt_data from "../data/pages/kontakt.json";

const Kontakt = () => {
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
                {kontakt_data.address.anschrift}<br />
                {kontakt_data.address.post}<br />
                {kontakt_data.address.land}
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
                <a href={`mailto:${kontakt_data.mail}`} className="hover:text-accent-100 transition-colors">
                  {kontakt_data.mail}
                </a>
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
            
            {/* NEW: Clean Email Display Card */}
            <div className="farm-card flex flex-col items-center justify-center text-center p-12">
              <div className="bg-bg-200 p-6 rounded-full mb-6">
                <Send className="text-accent-100" size={48} />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-primary-100">Schreiben Sie uns!</h2>
              <p className="text-text-200 mb-8 max-w-sm">
                Wir freuen uns auf Ihre Nachricht. Klicken Sie einfach auf den Button unten, um uns eine E-Mail zu senden.
              </p>
              <a 
                href={`mailto:${kontakt_data.mail}`}
                className="rustic-button inline-flex items-center gap-2 px-8 py-4 text-lg"
              >
                <Mail size={20} />
                {kontakt_data.mail}
              </a>
            </div>

            {/* Info & Map Column */}
            <div>
              <div className="farm-card mb-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-100">
                  {kontakt_data.info.heading}
                </h3>
                {kontakt_data.info.sections.map((section, i) => (
                  <p key={i} className="text-text-200 mb-4">
                    {section.text}
                  </p>
                ))}
                <div className="bg-bg-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-100 mb-2">
                    {kontakt_data.info.subheading}
                  </h4>
                  <ul className="text-sm text-text-200 space-y-1">
                    {kontakt_data.info.list.map((element, i) => (
                      <li key={i}>
                        {element.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map Container */}
              <div className="farm-card">
                <h3 className="text-xl font-semibold mb-4 text-primary-100">
                  {kontakt_data.map.heading}
                </h3>
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