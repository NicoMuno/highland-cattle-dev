import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Heart, Leaf } from 'lucide-react';

import hero_data from "../data/pages/hero.json"
import hero_images from "../data/images/hero.json"

import { assetUrl } from "../utils/assets";

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bg-100 to-bg-200 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-primary-100 mb-6">
                {hero_data.hero_Title}
              </h1>
              <p className="text-xl text-text-200 mb-8 leading-relaxed">
                {hero_data.hero_text}
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
                  src={assetUrl(hero_images.main.path)}
                  alt={hero_images.main.description}
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
            {hero_data.hero_card_heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="farm-card text-center">
              <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-bg-100" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4"> {hero_data.hero_card_0.heading}</h3>
              <p className="text-text-200">
                {hero_data.hero_card_0.text}
              </p>
            </div>
            <div className="farm-card text-center">
              <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-bg-100" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4"> {hero_data.hero_card_1.heading}</h3>
              <p className="text-text-200">
                {hero_data.hero_card_1.text}
              </p>
            </div>
            <div className="farm-card text-center">
              <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-bg-100" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4"> {hero_data.hero_card_2.heading}</h3>
              <p className="text-text-200">
                {hero_data.hero_card_2.text}
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
            {
              hero_images.samples.map(
                (sample,i) => (
                  <div key={i} className="h-64">
                  <img
                    src={assetUrl(sample.path)}
                    alt={sample.description}
                    className="w-full h-full object-cover rounded"
                  />
                </div>                  
                )
              )
            }
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
            {hero_data.hero_footer.heading}
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            {hero_data.hero_footer.text}
          </p>
          <Link to="/kontakt" className="rustic-button inline-flex items-center">
            {hero_data.hero_footer.button}
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;