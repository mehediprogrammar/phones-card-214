import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard";


const Favorites = () => {
    const [favorites, setFavorites] = useState([])
  const [noFound, setNoFound] = useState(false)
  const [show, setShow] = useState(false)
   const [totalPrice, setTotalPRice] = useState(0);   

  useEffect(()=>{
     
    const favoritesItems = JSON.parse(localStorage.getItem('favorites'))
           
     if(favoritesItems){
        setFavorites(favoritesItems)

        const total = favorites.reduce((previous,current) => previous + current.price,0)
        setTotalPRice(total)
     }
     else{
        setNoFound('no data found')
     }

      },[])
      
     const handleRemove  = ()=>{
         localStorage.clear()
         setFavorites([])
         setNoFound('no data found')
      }
  console.log(show);
    return (
        <div>
            {
                noFound ? <p className="flex justify-center items-center h-screen">{noFound}</p> 
                : <div>
                     <div>
                     {favorites.length>0 && <button onClick={handleRemove} className="px-5 bg-green-400 block mx-auto my-10">Deleted All Favorites</button> }
                     </div>
                       <h1>totalPrice:{totalPrice}</h1>
                      <div className=" grid grid-cols-2 gap-5">
                        {
                           show ? favorites.map((phone) => (<PhoneCard key={phone.id} phone={phone} ></PhoneCard>
                           ))
                         
                           : favorites.slice(0,2).map((phone) => (<PhoneCard key={phone.id} phone={phone} ></PhoneCard>
                           ))
                        }
                      </div>
                     
                   {  favorites.length > 3 && <button onClick={() => setShow(!show)} className="px-5 bg-green-400 block mx-auto my-10">{show? "See Details":"see more"}</button> }
                </div>
                
            }
        </div>
    )
};

export default Favorites;