// src/app/about/page.tsx
"use client"
import Layout from '../layout'
import { useEffect, useState } from 'react'

type TeamMember = {
  id: string;
  name: string;
  title: string;
  description: string;
}

const AboutPage = () => {
  const [team, setTeam] = useState<TeamMember[]>([])

  useEffect(() => {
    // Mock fetching team members
    const fetchTeam = () => [
        { id: '1', name: 'Daffascript', title: 'CEO', description: 'Despite of his lack of experience, he has the power to oversee the whole project.'},
        { id: '2', name: 'Christovscript', title: 'Vice-CEO', description: `A man known for his over-reliance of AIs, he is Daffa's right-hand man to assist in his projects.`},
        { id: '3', name: 'Dhaviscript', title: 'COO', description: 'Dhavi is in charge of the day-to-day administration and operation of the business.'},
        { id: '4', name: 'Niascript', title: 'CMO', description: 'The only female team member, Nia is the person responsible for marketing responsibilities.'},
        { id: '5', name: 'Lukasscript', title: 'CFO', description: 'Lukas is in charge of the economic and financial planning of the company.'},
        { id: '6', name: 'Gamascript', title: 'CIO', description: 'Gama, with his fatherly behaviour, looks after the systems of the company that are related to IT.'},
        { id: '7', name: 'Fayashscript', title: 'CTO', description: 'Fayash is a tech visionary, responsible for technology strategies.'}
    ]
    setTeam(fetchTeam())
  }, [])

  return (
    <Layout>
      <section className="company-history my-8">
        <h2 className="text-3xl font-bold">Our History</h2>
        <p className="mt-2">Founded in 2020, Daffascript Ltd. has grown to a prominent consulting firm in all of Indonesia. Starting from our goal to make alternative income source during the COVID-19 pandemic, now we serve lots of clients from different backgrounds across all of the country.</p>
      </section>
      <section className="team my-8">
        <h2 className="text-3xl font-bold">Our Team</h2>
        <div className="mt-2">
          {team.length > 0 ? (
            team.map(member => (
              <div key={member.id} className="team-member my-4">
                <h3 className="text-xl font-bold">{member.name} - {member.title}</h3>
                <p>{member.description}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
      <section className="culture my-8">
        <h2 className="text-3xl font-bold">Our Culture</h2>
        <p className="mt-2">At Daffascript Ltd., we value effectivity, efficiency, holistic approach, discipline, and teamwork. But most importantly, we highly value continuous improvement in all aspects.</p>
      </section>
      <section className="contact-us my-8">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-2">WhatsApp: +62-838-2804-xxxx</p>
        <p>Email: daffascript@gmail.com</p>
      </section>
    </Layout>
  );
}

export default AboutPage;
