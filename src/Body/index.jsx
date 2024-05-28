import AntdFlex from "../Antd";
import React, { useEffect, useState } from 'react';
import { Card, Typography } from 'antd';

const url = 'https://investing-cryptocurrency-markets.p.rapidapi.com/get-meta-data?locale_info=en_US&lang_ID=1&time_utc_offset=28800';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6eea2d1d94msh801681200140aa2p1ed7a3jsnf8b48dc42e4b',
    'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
  }
};

const MetaDataCard = () => {
  const [metaData, setMetaData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMetaData(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchMetaData();
  }, []);


const Body = () => {
  return (
    <div className="w-full h-full items-center my-[20px] gap-[20px]">
      <AntdFlex />
      {data.map((items) => {
        <Card key={items.id} {...items}/>
      })}
    </div>
  );
};

export default Body;
