// ListAProperty.js
import React, { useState } from 'react';
import CardsHeader from './CardsHeader';
import PropertyForm from './PropertyForm';
import Data from './Data';

const ListAProperty = () => {
  const [propertyList, setPropertyList] = useState(Data);

  const addProperty = (newProperty) => {
    // Add the new property to the propertyList state
    setPropertyList((prevList) => [...prevList, { ...newProperty, id: prevList.length + 1 }]);
  };

  return (
    <div>
      {/* Display existing property cards */}
      <CardsHeader />

      {/* Render the property form */}
      <PropertyForm addProperty={addProperty} />
    </div>
  );
};

export default ListAProperty;
