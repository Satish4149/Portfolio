import React, { useState } from 'react';

const Credential = () => {
  const [activeSection, setActiveSection] = useState('Certificates');

  const certificates = [
    '/image/aws.PNG',
    '/image/javaFullStack.PNG',
    '/image/javamaster.PNG',
    '/image/fullstackcontent.PNG',
    '/image/javaEngineer.PNG',
    '/image/microsoftAI.PNG',
   
  ];

  const achievements = [
    '/image/codemedal.JPEG',
    '/image/microsoftAI.PNG',
    '/image/hckr.PNG',
    '/image/msoffice.PNG',
    
  ];

  const renderImageGrid = (items) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.length === 0 ? (
        <p className="text-gray-400">No images available.</p>
      ) : (
        items.map((file, index) => (
          <div key={index} className="relative group bg-gray-800 rounded-lg shadow-lg p-2">
            <div className="overflow-hidden rounded-lg">
              <img
                src={file}
                alt={`Item ${index + 1}`}
                className="h-50 w-full object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition">
                <span className="text-white font-semibold">{activeSection} {index + 1}</span>
              </div>
            </div>
            {/* <p className="mt-2 text-gray-300 text-sm">
              Description {index + 1}
            </p> */}
          </div>
        ))
      )}
    </div>
  );

  const renderSectionContent = () => (
    <div className="p-4">
      {activeSection === 'Certificates' ? renderImageGrid(certificates) : renderImageGrid(achievements)}
    </div>
  );

  const buttonClasses = (section) =>
    `px-4 py-2 rounded-full mx-2 transition ${activeSection === section ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-purple-500'
    }`;

  return (
        <section id="credential" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">

    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen p-8 text-center text-white">
      <h1 className="text-4xl font-bold mb-2">Credential</h1>
      <p className="mb-6">
        Explore my journey through certifications and achievements. Each section represents a milestone in my learning path.
      </p>

      <div className="flex justify-center mb-8 flex-wrap">
        <button className={buttonClasses('Certificates')} onClick={() => setActiveSection('Certificates')}>
          Certificates
        </button>
        <button className={buttonClasses('Achievements')} onClick={() => setActiveSection('Achievements')}>
          Achievements
        </button>
      </div>

      <div>{renderSectionContent()}</div>
    </div>
     </section>
  );
};

export default Credential;
