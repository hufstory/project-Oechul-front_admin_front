import React from 'react';
import './App.css';
import TableUpload from './Component/TableUpload';
import Globalfemale from './Component/Globalfemale';
import Globalmale from './Component/Globalmale';
import Seoulfemale from './Component/Seoulfemale';
import Seoulmale from './Component/Seoulmale';
import Fetch from './Component/Fetch';

function App() {
  return (
    <>
      <Fetch/>
      <TableUpload/>
      <Globalfemale/>
      <Globalmale/>
      <Seoulfemale/>
      <Seoulmale/>
    </>
  );
}

export default App;
