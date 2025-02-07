import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Distributors = () => {
  const [distributors, setDistributors] = useState([]);

  useEffect(() => {
    const fetchDistributors = async () => {
      try {
        const res = await axios.get('/api/distributors');
        setDistributors(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchDistributors();
  }, []);

  return (
    <div>
      <h1>Distributors</h1>
      <ul>
        {distributors.map((distributor) => (
          <li key={distributor._id}>
            {distributor.name} - {distributor.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Distributors;