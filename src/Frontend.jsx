import Card from './Card';
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Frontend() {
  const [ data, setData ] = useState(null)


  useEffect(() => {
      axios("https://team-3-hackaton-server.herokuapp.com/api/all")
        .then((response) => {
          console.log(response.data)
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        })
        .finally(() => {
          console.log("fertig");
          clearInterval();
        });
  }, []);

  return (
    <div className="home">
      {data ? '' : <ClipLoader size={100} />}
        {data && <Card data={data} />}
    </div>
  );
}