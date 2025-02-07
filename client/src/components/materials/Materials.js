import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Materials = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const res = await axios.get('/api/materials');
        setMaterials(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <div>
      <h1>Materials</h1>
      <ul>
        {materials.map((material) => (
          <li key={material._id}>
            {material.name} - ${material.price} - {material.distributor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Materials;