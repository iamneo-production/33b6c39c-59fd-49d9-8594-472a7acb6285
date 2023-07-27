import React from 'react'
import './Copyright.css'

 const Copyright = () => {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © ${year} : All rights reserved`}</footer>;
};

export default Copyright;