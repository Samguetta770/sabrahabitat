// src/Accueil/TeamMembers.js
import React from 'react';
import './TeamMembers.css';
import member1 from "./../Ressources/photo_dattente.jpg";
import member2 from "./../Ressources/photo_dattente.jpg"; // remplacez par le chemin réel des images
import member3 from "./../Ressources/photo_dattente.jpg"; // remplacez par le chemin réel des images
import { useTranslation } from 'react-i18next';
import '../i18n'; // Assurez-vous que ce chemin est correct

const TeamMembers = () => {
  const { t } = useTranslation();
  const members = [
    {
      id: 1,
      name: t('team_member_1_name_i6'),
      surname: t('team_member_1_surname_i6'),
      description: t('team_member_1_description_i6'),
      image: member1,
      website: 'https://amiram-eng.co.il',
    },
    {
      id: 2,
      name: t('team_member_2_name_i6'),
      surname: t('team_member_2_surname_i6'),
      description: t('team_member_2_description_i6'),
      image: member2,
      website: '',
    },
    {
      id: 3,
      name: t('team_member_3_name_i6'),
      surname: t('team_member_3_surname_i6'),
      description: t('team_member_3_description_i6'),
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

