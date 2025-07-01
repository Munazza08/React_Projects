import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from './data';
import Product from './Product';
import { useState, useEffect } from 'react';

const SearchItem = () => {
  const {term} = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () =>{
      const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
      setFilterData(data)
    }

    filteredData();

  }, [term])

  return (
    <Product items={filterData} />
  )
}

export default SearchItem
