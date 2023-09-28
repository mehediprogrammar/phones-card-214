import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard";


const Favorites = () => {
    const [favorites, setFavorites] = useState([])
  const [noFound, setNoFound] = useState("")
     
  useEffect(()=>{
     
    const favoritesItems = JSON.parse(localStorage.getItem('favorites'))
           
     if(favoritesItems){
        setFavorites(favoritesItems)
     }
     else{
        setNoFound('no data found')
     }

      },[])
      console.log(favorites)
    return (
        <div>
            {
                noFound ? <p className="flex justify-center items-center h-screen">{noFound}</p> 
                : <div>
                      <div>
                        {
                            favorites.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                        }
                      </div>
                </div>
            }
        </div>
    );
};

export default Favorites;