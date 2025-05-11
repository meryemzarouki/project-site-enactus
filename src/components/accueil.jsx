import React from 'react';
import video from '../assets/video.mp4';

export default function Accueil() {
  const members = [
    { nom: "Younes TAOUMI", role: "Team Leader" },
    { nom: "Maryam BADRI", role: "Vice Team Leader" },
    { nom: "Wiam ABOUTARA BELRHITI", role: "Vice President Project" },
    { nom: "Ammar MASSAOUDI", role: "Communication Manager" },
    { nom: "Hind ZAKY", role: "HR Manager" },
    { nom: "Abdelwadoud EL BAROUJI", role: "Treasurer" },
    { nom: "Basma JAWHAR", role: "Event Manager" },
    { nom: "Imane OUAZZANI CHAHDI", role: "Partnerships" }
  ];

  const events = [
    {
      titre: "Journée d'intégration",
      texte: "Une occasion pour accueillir les nouveaux membres, leur présenter la vision du club, les anciens projets, et surtout créer une cohésion d’équipe dès le début de l'année."
    },
    {
      titre: "Compétition – Demi finale",
      texte: "Nos membres ont présenté leurs projets devant un jury. Une expérience de challenge, de dépassement et de fierté d’être dans le top 12 du Maroc."
    },
    {
      titre: "Phase des ligues",
      texte: "Participation active à l’UIT Kenitra. Un moment de compétition, de travail d’équipe et de confiance malgré les statistiques."
    },
    {
      titre: "8 mars – L'innovation au féminin",
      texte: "Un événement dédié à l’entrepreneuriat féminin avec panels, échanges et ateliers inspirants autour du leadership féminin."
    },
    {
      titre: "Hackathon – Déc 2023",
      texte: "Participation au Méga Hackathon panafricain. Un moment fort de collaboration et d’innovation pour résoudre des problèmes concrets."
    }
  ];

  return (
    <div className="pt-28 px-6 space-y-24">
      <section id="accueil" className="text-center">
  <div className="inline-block px-8 py-6 rounded-2xl bg-yellow-100 shadow-md hover:scale-105 transition">
    <h1 className="text-5xl font-bold text-yellow-600 mb-4">
      Bienvenue dans le club Enactus FSBM
    </h1>
    <p className="text-2xl font-bold text-gray-700">
      Enactus = Entrepreneuriat + Action + Us
    </p>
  </div>
</section>
      <section id="description" className="max-w-5xl mx-auto text-center space-y-6">
      <h2 className="text-4xl font-bold mb-10 text-center text-yellow-600">Description et Objectif du club :</h2>
        <p className="text-xl text-gray-800 leading-relaxed">
          Enactus FSBM, fondée en mars 2014 par Abderazak Bouhram, est l'héritière
          d initiatives lancées en 2009 sous le nom SIFE. Chaque année, entre 50 et
          100 étudiants développent des projets à impact social et économique. Le
          club est classé parmi les 12 meilleurs du Maroc, demi-finaliste en
          2023-2024.
        </p>
        <video controls className="rounded-xl shadow-xl w-full max-w-3xl mx-auto">
          <source src={video} type="video/mp4" />
        </video>
      </section>
      <section id="membres">
        <h2 className="text-4xl font-bold mb-8 text-center text-yellow-600">
          Membres du Bureau :
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((m,i) => (
            <div
              key={i}
              className="bg-blue-100 p-6 rounded-xl shadow text-center hover:scale-105 transition">
              <h3 className="text-lg font-bold text-gray-800">{m.nom}</h3>
              <p className="text-gray-600">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="evenements">
        <h2 className="text-4xl font-bold mb-10 text-center text-yellow-600">
          Événements :
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {events.map((e, i, arr) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-2xl shadow-xl text-left border-l-8 border-yellow-400 hover:bg-yellow-50 hover:scale-105 transition ${
                i===arr.length-1&&arr.length%2!==0? "col-span-2 md:mx-auto md:w-1/2":"" }`}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {e.titre}
              </h3>
              <p className="text-gray-700 text-lg">{e.texte}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="text-center">
        <button
          onClick={()=>alert("Merci de vouloir nous rejoindre 🌞")}
          className="bg-yellow-500 text-white text-xl font-bold py-4 px-10 rounded-full hover:bg-yellow-600 transition">
          Rejoindre le club
        </button>
      </section>
    </div>
  );
}