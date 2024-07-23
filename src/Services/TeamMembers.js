import React from 'react';
import './TeamMembers.css';
import member1 from "./../Ressources/photo_dattente.jpg";
import member2 from "./../Ressources/photo_dattente.jpg"; // remplacez par le chemin réel des images
import member3 from "./../Ressources/photo_dattente.jpg"; // remplacez par le chemin réel des images

const TeamMembers = () => {
  const members = [
    {
      id: 1,
      name: 'Amiram',
      surname: 'Amsellem',
      description: "Ingénieur civil, PDG de la société de construction \"Amiram Andassa\".\nAvec plus de 20 ans d'expérience dans la gestion de projets de construction.\nTravail en partenariat avec les maires de Jérusalem, Ashkelon et Herzliya.",
      image: member1,
      website: 'https://amiram-eng.co.il',
    },
    {
      id: 2,
      name: 'David',
      surname: 'Benisti',
      description: 'Ingénieur civil, chef de projet de construction à Jérusalem.\nSuperviseur de chantier et inspecteur des travaux finis.',
      image: member2,
      website: 'https://www.janesmith.com',
    },
    {
      id: 3,
      name: 'Lena',
      surname: 'Hattab',
      description: 'Fondatrice de l’agence LMH Interior.\n\nPassionnée d’architecture depuis toujours, elle ouvre son agence à Paris avec plus de 30 Projets à son actif.Architecte d’intérieur et désigner elle pourra vous accompagner tout au long de votre projet.'
,
      image: member3,
      website: 'https://www.instagram.com/lmh.interior?igsh=MWQ5M3llZDcxeGRiNA%3D%3D&utm_source=qr',
    },
  ];

  return (
    <div className="team-members-container">
      {members.map((member, index) => (
        <div className={`team-member ${index === 0 ? 'from-left' : index === 2 ? 'from-right' : 'delayed'}`} key={member.id}>
          <div className="member-image-container">
            <img src={member.image} alt={`${member.name} ${member.surname}`} className="member-image" />
            <div className="member-info">
              <h3>{member.name} {member.surname}</h3>
              <p dangerouslySetInnerHTML={{ __html: member.description.replace(/\n/g, '<br />') }}></p>
              <a href={member.website} target="_blank" rel="noopener noreferrer" className="member-website">{member.website}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
