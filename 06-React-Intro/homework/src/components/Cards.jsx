import React from 'react';
import Card from './Card';

export default function Cards({data}) {
  // acá va tu código
  // tip, podés usar un map
  return (
  data.map(ciudad =>
    <Card />
    )
  )
};