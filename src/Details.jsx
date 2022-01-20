import Card from './Card';
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState} from 'react'
import axios from 'axios';


function Details() {
  const [ data, setData ] = useState();




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
  


    return <div>
      {/* {data.map((data, index) => (
         <div className='pokeselect' key={index}> 
         <h2>{data}</h2>
         

         </div>
      ))} */}
    
    </div>;
  }
  
  export default Details;