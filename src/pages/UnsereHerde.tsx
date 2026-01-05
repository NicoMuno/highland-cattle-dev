import React from 'react';
import { MapPin } from 'lucide-react';

import HerdSection from '../components/HerdSection';

import unsereHerde_data from "../data/pages/unsereHerde.json"
import unsereHerde_images from "../data/images/unsereHerde.json"
import cattleData from '../data/herd/cattle.json';

const UnsereHerde = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-100 mb-4">
              {unsereHerde_data.title}
            </h1>
            <p className="text-xl text-text-200">
              {unsereHerde_data.subtitle}
            </p>
          </div>

          {/* Herd Overview */}
          <div className="farm-card mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {
                unsereHerde_data.overview.map(
                  (sec, i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold text-accent-100 mb-2">
                        {sec.heading}
                      </div>
                      <div className="text-text-200">
                        {sec.subheading}
                      </div>
                    </div>
                  )
                )
              }
            </div>
          </div>

          {/* Main Herd Image */}
          <div className="h-96 mb-12 text-xl">
            <img
              src={unsereHerde_images.main.path}
              alt={unsereHerde_images.main.description}
              className="w-full h-full object-cover rounded mb-4"
            />
          </div>

          <HerdSection title="Unsere Bullen" cattle={cattleData.bulls.map((c) => ({ ...c, category: 'bulls' }))} />
          <HerdSection title="Unsere Kühe" cattle={cattleData.cows.map((c) => ({ ...c, category: 'cows' }))} />
          <HerdSection title="Unsere Kälber" cattle={cattleData.calves.map((c) => ({ ...c, category: 'calves' }))} />

          {/* Location */}
          <div className="farm-card">
            <div className="flex items-center mb-4">
              <MapPin className="text-accent-100 mr-3" size={28} />
              <h2 className="text-2xl font-semibold">
                {unsereHerde_data.weiden.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-text-200 mb-4">
                  {unsereHerde_data.weiden.text}
                </p>
                <ul className="space-y-2 text-text-200">
                  {
                    unsereHerde_data.weiden.list.map(
                      (element,i) => (
                        <li key={i}>{element.text}</li>
                      )
                    )
                  }
                </ul>
              </div>
              <div className="h-48">
                <img
                  src={unsereHerde_images.footer.path}
                  alt={unsereHerde_images.footer.description}
                  className="w-full h-full object-cover rounded mb-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnsereHerde;