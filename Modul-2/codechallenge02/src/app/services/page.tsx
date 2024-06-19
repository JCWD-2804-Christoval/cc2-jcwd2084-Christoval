// src/app/services/page.tsx
"use client"
import Layout from '../layout'
import { useEffect, useState } from 'react'

type Service = {
  id: string;
  name: string;
  description: string;
}

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    // Simulate fetching services
    const fetchServices = () => [
        { id: '1', name: 'Website Creation for Startup Companies (Front-End)', description: 'Do you need to make a website for your own startup company or online store? With the low cost, we will create your website in a short amount of time.' },
        { id: '2', name: 'Back-End Programming', description: 'Mainly uses MySQL for Back-End data management, therefore completing your front-end creation.' },
        { id: '3', name: 'Error Management', description: `Seeing too many red underlines in your codes? Don't worry, we will fix them in no time.` }
      ]
    setServices(fetchServices())
  }, [])

  return (
    <Layout>
      <section className="services-overview my-8">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.length > 0 ? (
            services.map(service => (
              <div key={service.id} className="service-card p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <p className="mt-2">{service.description}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
      <section className="services-testimonials my-8">
        <h2 className="text-3xl font-bold">Customer Testimonials</h2>
        <blockquote className="mt-2">"The website creation for startup companies is amazing!" - Bagas</blockquote>
        <blockquote className="mt-2">"I love the back-end programming!" - Kristal</blockquote>
      </section>
      <section className="contact-us my-8">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-2">WhatsApp: +62-838-2804-xxxx</p>
        <p>Email: daffascript@gmail.com</p>
      </section>
    </Layout>
  );
}

export default ServicesPage;
