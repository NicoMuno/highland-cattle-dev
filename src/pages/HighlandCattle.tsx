import React from 'react';
import { Shield, Heart, Star, Award, Eye, Mountain, Beef } from 'lucide-react';

import highlandCattle_data from "../data/pages/highlandCattle.json"
import highlandCattle_images from "../data/images/highlandCattle.json"

const HighlandCattle = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-100 mb-4">
              {highlandCattle_data.title}
            </h1>
            <p className="text-xl text-text-200">
              {highlandCattle_data.subtitle}
            </p>
          </div>

          {/* Hero Image */}
          <div className="h-96 mb-12 text-xl">
            <img
              src={highlandCattle_images.main.path}
              alt={highlandCattle_images.main.description}
              className="w-full h-full object-cover rounded mb-4"
            />
          </div>

          {/* History */}
          <div className="farm-card mb-12">
            <div className="flex items-center mb-6">
              <Mountain className="text-accent-100 mr-3" size={32} />
              <h2 className="text-2xl font-semibold">
                {highlandCattle_data.history.heading}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-text-100">
              {
                highlandCattle_data.history.sections.map(
                  (section,i) => (
                    <p key={i} className="mb-6">
                      {section.text}
                    </p>
                  )
                )
              }
            </div>
          </div>

          {/* Special Properties */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary-100 mb-8 text-center">
              {highlandCattle_data.properties.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="farm-card text-center">
                <Shield className="text-accent-100 mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold mb-2">
                  {highlandCattle_data.properties.prop_0.heading}
                </h3>
                <p className="text-text-200 text-sm">
                  {highlandCattle_data.properties.prop_0.text}
                </p>
              </div>
              <div className="farm-card text-center">
                <Star className="text-accent-100 mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold mb-2">
                  {highlandCattle_data.properties.prop_1.heading}
                </h3>
                <p className="text-text-200 text-sm">
                  {highlandCattle_data.properties.prop_1.text}
                </p>
              </div>
              <div className="farm-card text-center">
                <Heart className="text-accent-100 mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold mb-2">
                  {highlandCattle_data.properties.prop_2.heading}
                </h3>
                <p className="text-text-200 text-sm">
                  {highlandCattle_data.properties.prop_2.text}
                </p>
              </div>
              <div className="farm-card text-center">
                <Award className="text-accent-100 mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold mb-2">
                  {highlandCattle_data.properties.prop_3.heading}
                </h3>
                <p className="text-text-200 text-sm">
                  {highlandCattle_data.properties.prop_3.text}
                </p>
              </div>
            </div>
          </div>

          {/* Characteristic Appearance */}
          {/* Head Characteristics */}
          <div className="farm-card mb-12">
            <div className="flex items-center mb-6">
              <Eye className="text-accent-100 mr-3" size={32} />
              <h2 className="text-2xl font-semibold">
                {highlandCattle_data.appearance_heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-100">
                  {highlandCattle_data.Kopf.heading}
                </h3>
                {
                  highlandCattle_data.Kopf.sections.map(
                    (section,i) => (
                      <p key={i} className="text-text-200 mb-4">
                        {section.text}
                      </p>
                    )
                  )
                }
              </div>
              <div className="h-64">
                <img
                  src={highlandCattle_images.head.path}
                  alt={highlandCattle_images.head.description}
                  className="w-full h-full object-cover rounded mb-4"
                />
              </div>
            </div>
          </div>

          {/* Body Characteristics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="farm-card">
              <h3 className="text-xl font-semibold mb-4 text-primary-100">
                {highlandCattle_data.body.heading}
              </h3>
              <p className="text-text-200 mb-4">
                {highlandCattle_data.body.text}  
              </p>
              <div className="h-48">
                <img
                  src={highlandCattle_images.body.path}
                  alt={highlandCattle_images.body.description}
                  className="w-full h-full object-cover rounded mb-4"
                />
              </div>
            </div>
            {/* Hair Characteristics */}
            <div className="farm-card">
              <h3 className="text-xl font-semibold mb-4 text-primary-100">
                {highlandCattle_data.hair.heading}
              </h3>
              <p className="text-text-200 mb-4">
                {highlandCattle_data.hair.text}
              </p>
              <div className="h-48">
                <img
                  src={highlandCattle_images.hair.path}
                  alt={highlandCattle_images.hair.description}
                  className="w-full h-full object-cover rounded mb-4"
                />
              </div>
            </div>
          </div>

          {/* Meat Quality */}
          <div className="farm-card mb-12">
            <div className="flex items-center mb-6">
              <Beef className="text-accent-100 mr-3" size={32} />
              <h2 className="text-2xl font-semibold">
                {highlandCattle_data.meat.heading}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-text-100">
              <h3 className="text-xl font-semibold mb-4 text-accent-100">
                  {highlandCattle_data.meat.subheading}
              </h3>
              {
                highlandCattle_data.meat.sections.map(
                  (section,i) => (
                    <p key={i} className="mb-6">
                      {section.text}
                    </p>                    
                  )
                )
              }
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default HighlandCattle;