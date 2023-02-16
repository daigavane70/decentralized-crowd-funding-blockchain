import React, { useState, useEffect } from 'react';

const StartupDetails = (props) => {
  const [startup, setStartup] = useState({});

  useEffect(() => {
    const fetchStartup = async () => {
      // fetch startup data using the id from the props
      const response = await fetch(`https://api.example.com/startups/${props.id}`);
      const data = await response.json();
      setStartup(data);
    };
    fetchStartup();
  }, [props.id]);

  return (
    <div className="startup-details">
      <h2>{startup.name}</h2>
      <p>Valuation: {startup.valuation}</p>
      <p>Segment: {startup.segment}</p>
      <p>CEO: {startup.ceo}</p>
      <p>Company Size: {startup.companySize}</p>
      <p>Founded in: {startup.foundedIn}</p>
    </div>
  );
};

export default StartupDetails;


