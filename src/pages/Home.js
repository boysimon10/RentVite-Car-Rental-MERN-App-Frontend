import React from 'react';
import Card from '../components/Card';
import Search from '../components/Search';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Page Home</h1>
      <Search/>
      <Card/>
    </div>
  )
}

export default Home;
