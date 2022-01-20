  import Card from './Card';
  import ClipLoader from "react-spinners/ClipLoader";
  import { useEffect, useState } from 'react'
  import axios from 'axios';
  
  export default function Backend() {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
  
  
    useEffect(() => {
        axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          })
          .finally(() => {
            setLoading(false);
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
  export default Backend;