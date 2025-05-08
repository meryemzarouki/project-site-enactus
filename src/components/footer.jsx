import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-10 mt-20">
      <div className="max-w-4xl mx-auto space-y-5 text-base leading-relaxed">
        <p className="text-lg">
          <strong>📍Adresse :</strong><br />
          Enactus FSBM, Faculté des Sciences Ben M'Sick – Bd Commandant Driss Al Harti, Casablanca 20670 – Maroc
        </p>
        <p className="text-lg">
          <strong>📧 Email :</strong><br/>
          <a href="mailto:enactus24.25fsbm@gmail.com" className="text-yellow-400 hover:underline text-lg">
            enactus24.25fsbm@gmail.com
          </a>
        </p>
        <p className="text-lg">
          <strong> 📞 Téléphone :</strong><br />
          Team Leader : +212 639 380 894 / Head of Partnerships
        </p>
        <p className="text-sm text-gray-400 pt-4">© 2025 Enactus FSBM – Tous droits réservés</p>
      </div>
    </footer>
  );
}


        