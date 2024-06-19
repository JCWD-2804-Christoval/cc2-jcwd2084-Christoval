// src/app/page.tsx
"use client"
import Layout from './layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [testimonials, setTestimonials] = useState<string[]>([])

  useEffect(() => {
    const fetchTestimonials = () => [
        "Excellent service and products! - Bagas",
        "Highly recommend this company! - Kristal"
      ]
    setTestimonials(fetchTestimonials())
  }, [])

  return (
    <Layout>
      <section className="relative w-full h-96">
        <Image
          src="/hero-image.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority  
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Daffascript Ltd.</h1>
          <p className="mt-4">Our mission is to provide excellent services in fullstack web development.</p>
        </div>
        </div>
      </section>
      <section className="company-overview my-8">
        <h2 className="text-3xl font-bold">Company Overview</h2>
        <p className="mt-2">Daffascript Ltd. was founded in 2020, at the time where COVID-19 pandemic started. Due to limited income sources, we as a seven-member team decided to start a consultant firm specializing in web development, in order to make money during the tough times.</p>
      </section>
      <section className="products-services my-8">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <ol className="mt-2">
          <li>Website Creation for Startup Companies (Front-End)</li>
          <li>Back-End Programming</li>
          <li>Error Management</li>
        </ol>
      </section>
      <section className="testimonials my-8">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        {testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <blockquote key={index} className="mt-2">{testimonial}</blockquote>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <section className="contact-us my-8">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-2">WhatsApp: +62-838-2804-xxxx</p>
        <p>Email: daffascript@gmail.com</p>
      </section>
    </Layout>
  );
}

export default HomePage;
