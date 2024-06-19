import React from 'react';

const Capabilities: React.FC = () => {
    return (
        <section className="p-10 text-center bg-yellow-500">
      <h2 className="text-2xl mb-5">Capabilities</h2>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="capability w-full md:w-1/3 p-5">
          <h3 className="text-xl mb-3">Brand Strategy</h3>
          <p>Creating functional websites.</p>
        </div>
        <div className="capability w-full md:w-1/3 p-5">
          <h3 className="text-xl mb-3">Brand Identity</h3>
          <p>Designing unique and attractive websites.</p>
        </div>
        <div className="capability w-full md:w-1/3 p-5">
          <h3 className="text-xl mb-3">Communication Strategy</h3>
          <p>Listening to client's feedbacks.</p>
        </div>
      </div>
    </section>
    );
};

export default Capabilities;