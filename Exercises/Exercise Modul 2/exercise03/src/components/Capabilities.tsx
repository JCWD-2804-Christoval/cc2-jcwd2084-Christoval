import React from 'react';
import './Capabilities.css';

const Capabilities: React.FC = () => {
  return (
    <section className="capabilities">
      <h2>Capabilities</h2>
      <div className="capabilities-content">
        <div className="capability">
          <h3>Brand Strategy</h3>
          <p>Creating functional websites.</p>
        </div>
        <div className="capability">
          <h3>Brand Identity</h3>
          <p>Designing unique and attractive websites.</p>
        </div>
        <div className="capability">
          <h3>Communication Strategy</h3>
          <p>Listening to client's feedbacks.</p>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
