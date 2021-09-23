import React,{useState,useEffect} from 'react';
import './Home.css';
import millify from 'millify';
import CircularProgress from './Loader';
const axios = require('axios');



 function Home() {
    const [countries,setCountries]=useState([]);
    const [loading,setLoading]=useState(false);
    function refreshPage() {
      window.location.reload(false);
    }
    useEffect(()=>{

        setLoading(true)
        const url=`https://restcountries.com/v2/continent/asia`
        axios
        .get(url)
        .then(res => {
          setLoading(false);
          setCountries(res.data);
        }).catch( () => {
        setCountries('Error')
        }
          )},
        []);    

    return (  
    <>       
              <button onClick={refreshPage} className='btn'>Refresh</button>
            
            { (loading)? <CircularProgress/>: 
              <div className="country-card-container">
            {countries?.map((country) => (
              
             <div className='country'>
             <div className='image'>
                 <img src={country.flags[0]} alt="flage"/>
             </div>
             <div className='country-details'>
                 <h2>{country.name}</h2>
                 <p>Capital : {country.capital}</p>
                 <p>Region : {country.region}</p>
                 <p>Population : {millify(country.population)}</p>
                 <p> Borders:</p>
                 <p className='border'>{country?.borders?.map((border) => <span>{border}</span>)}</p>
                 <p> Language:</p>
                 <p className='language'>{country?.languages?.map((language) => <span>{language.name}</span>)}</p>
             </div>
         </div>
            ))}
          </div>
 }
            </>
    ) 
          
        } 
    
export default Home;