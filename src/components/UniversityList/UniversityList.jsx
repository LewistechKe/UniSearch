import React from 'react';
import './UniversityList.css';

const UniversityList = ({ searchTerm }) => {
  // Assuming universities is an array of objects containing university data
  const Universities = [
    {
      id: 1,
      name: "University 1",
      location: "Kampala, Uganda",
    },
    {
      id: 2,
      name: "University 2",
      location: "Nairobi, Country",
    },
    {
      id: 3,
      name: "University 3",
      location: "Kampala, Uganda",
    },
    {
      id: 4,
      name: "University 4",
      location: "TUK, Kenya",
    },
    
  ];
  

  // Filter universities based on search term
  const filteredUniversities = Universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="university-list">
      {filteredUniversities.map((university) => (
        <div className="university-item" key={university.id}>
          <h3>{university.name}</h3>
          <p>{university.location}</p>
        </div>
      ))}
    </div>
  );
};

export default UniversityList;
