// src/app/teams/page.tsx
"use client"
import Layout from '../layout'
import { useEffect, useState } from 'react'
import Image from 'next/image'

type TeamMember = {
    id: string;
    name: string;
    title: string;
    email: string;
    image: string;
}

const TeamsPage = () => {
  const [team, setTeam] = useState<TeamMember[]>([])

  useEffect(() => {
    fetch('/team.json')
      .then(response => response.json())
      .then(data => setTeam(data))
  }, [])

  return (
    <Layout>
      <section className="team-overview my-8">
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.length > 0 ? (
            team.map(member => (
            <div key={member.id} className="team-member p-4 bg-white shadow-md">
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="rounded-full mx-auto"
              />
              <h3 className="text-xl font-bold mt-4 text-center">{member.name}</h3>
              <p className="text-center">{member.title}</p>
              <p className="text-center">{member.email}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        </div>
      </section>
      <section className="contact-us my-8">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-2">WhatsApp: +62-838-2804-xxxx</p>
        <p>Email: daffascript@gmail.com</p>
      </section>
    </Layout>
  );
}

export default TeamsPage;

