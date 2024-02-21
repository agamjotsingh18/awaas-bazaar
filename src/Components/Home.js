import React, { useState } from 'react';
import NavBar from './NavBar';
import SearchHeader from './SearchHeader';
import CardsHeader from './CardsHeader';

const Home = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState('');

  return (
    <>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar setSelectedPropertyType={setSelectedPropertyType} />
        <SearchHeader />
        <CardsHeader selectedPropertyType={selectedPropertyType} />
        <div style={{ marginTop: 'auto', textAlign: 'center', padding: '1rem' }}>
          &copy; 2024 Awaas Bazaar. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Home;
