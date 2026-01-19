import React from 'react';
import { Users, Target, Tractor, Award } from 'lucide-react';

import ueberUns_data from "../data/pages/ueberUns.json";
import ueberUns_images from "../data/images/ueberUns.json";
import { assetUrl } from "../utils/assets";

const UeberUns = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-100 mb-4">
              {ueberUns_data.title}
            </h1>
            <p className="text-xl text-text-200">
              {ueberUns_data.subtitle}
            </p>
          </div>

          {/* Hero Image */}
          <div className="h-64 mb-12">
            <img
              src={assetUrl(ueberUns_images.main.path)}
              alt={ueberUns_images.main.description}
              className="w-full h-full object-cover rounded mb-4"
            />
          </div>

          {/* Story */}
          <div className="farm-card mb-12">
            <div className="flex items-center mb-6">
              <Users className="text-accent-100 mr-3" size={32} />
              <h2 className="text-2xl font-semibold">
                {ueberUns_data.story.heading}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-text-100">
              {ueberUns_data.story.sections.map(
                (section,i) => (
                  <div key={i}>
                    <p className="mb-6">
                      {section.text}
                    </p>
                  </div>
              )
              )}
            </div>
          </div>

          {/* Mission */}
          <div className="farm-card mb-12">
            <div className="flex items-center mb-6">
              <Target className="text-accent-100 mr-3" size={32} />
              <h2 className="text-2xl font-semibold">
                {ueberUns_data.mission.heading}
              </h2>
            </div>
            <p className="text-text-100 text-lg">
              {ueberUns_data.mission.text}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="farm-card">
              <div className="flex items-center mb-4">
                <Tractor className="text-accent-100 mr-3" size={28} />
                <h3 className="text-xl font-semibold">
                  {ueberUns_data.feature_0.heading}
                </h3>
              </div>
              <p className="text-text-200">
                {ueberUns_data.feature_0.text} 
              </p>
            </div>
            <div className="farm-card">
              <div className="flex items-center mb-4">
                <Award className="text-accent-100 mr-3" size={28} />
                <h3 className="text-xl font-semibold">
                  {ueberUns_data.feature_1.heading}
                </h3>
              </div>
              <p className="text-text-200">
                {ueberUns_data.feature_1.text}
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
              ueberUns_images.samples.map(
                (img,i) => (
                  <div key={i} className="h-64">
                    <img
                      src={assetUrl(img.path)}
                      alt={img.description}
                      className="w-full h-full object-cover rounded mb-4"
                    />
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default UeberUns;