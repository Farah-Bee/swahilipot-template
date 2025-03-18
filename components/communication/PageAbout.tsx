import React from 'react';

interface PageAboutProps {
  description: string;
  image: string;
  activities: string[];
}

export default function PageAbout({ description, image, activities }: PageAboutProps) {
  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-900">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">About Our Communication Department</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {description}
            </p>

            <div className="bg-light dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Key Activities</h3>
              <ul className="space-y-2">
                {activities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={image}
              alt="Communication at SwahiliPot Hub"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
