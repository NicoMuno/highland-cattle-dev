import React from 'react';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

import footer_data from "../data/components/footer.json";
import kontakt_data from "../data/pages/kontakt.json";

import { assetUrl } from "../utils/assets";

const Footer = () => {
  return (
    <footer className="bg-primary-100 text-primary-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-300">
              {footer_data.kontakt.heading}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>                
                  {kontakt_data.address.anschrift}<br />
                  {kontakt_data.address.post}<br />
                  {kontakt_data.address.land}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>{kontakt_data.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href={`mailto:${kontakt_data.mail}`} className="hover:text-accent-100 transition-colors">
                  {kontakt_data.mail}
                </a>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-300">
              {footer_data.about.heading}
            </h3>
            <p className="text-primary-200">
              {footer_data.about.text}
            </p>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-300">
              {footer_data.info.heading}
            </h3>
            <p className="text-primary-200">
              {footer_data.info.text}
            </p>
          </div>
        </div>

        {/* Certificate Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          <img
            src={assetUrl(footer_data.img.bio_certificate)}
            alt="EU-Bio-Zertifikat"
            className="h-12 md:h-16 object-contain"
          />
          <img
            src={assetUrl(footer_data.img.eu_certificate)}
            alt="DE-Bio-Zertifikat"
            className="h-12 md:h-16 object-contain"
          />
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-primary-200 pt-6 text-center">
          <p className="flex items-center justify-center space-x-2 text-primary-200">
            <span>© {footer_data.copyright_year} Highland Hof – Mit</span>
            <Heart size={16} className="text-accent-100" />
            <span>für unsere Highland Cattle</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
