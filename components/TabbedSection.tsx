'use client';

import React, { useState } from 'react';

const tabData = [
  { id: 'aboutme', title: 'Acerca de mí', content: 'This is the content for Tab 1.' },
  { id: 'publications', title: 'Publicaciones', content: 'Here is the content for Tab 2.' },
  { id: 'reviews', title: 'Reseñas', content: 'And this is what you see in Tab 3.' },
];

export default function TabbedSection() {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <div className="w-full">
      <div>
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`mr-2 rounded-t-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-green ${
              activeTab === tab.id ? 'bg-secondary-green text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'} bg-yellow-200`}
            role="tabpanel"
            aria-labelledby={tab.id}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
