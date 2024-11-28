'use client';

import React, { useState } from 'react';

type TabContent = {
  [key: string]: React.ReactNode;
};

type TabbedSectionProps = {
  content: TabContent;
};

const tabData = [
  { id: 'aboutme', title: 'Acerca de mí' },
  { id: 'publications', title: 'Publicaciones' },
  { id: 'reviews', title: 'Reseñas' },
];

export default function TabbedSection({ content }: TabbedSectionProps) {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <div className="w-full">
      <div>
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`mr-2 rounded-t-lg px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-secondary-green ${
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
            className={`${activeTab === tab.id ? 'block' : 'hidden'} `}
            role="tabpanel"
            aria-labelledby={tab.id}
          >
            {content[tab.id]}
          </div>
        ))}
      </div>
    </div>
  );
}
