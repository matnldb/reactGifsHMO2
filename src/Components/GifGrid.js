import React from 'react' 
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data,loading} = useFetchGifs(category);    

  return (
    <>   
    <h3 className='animate__animated animate__flash'>{loading?'Cargando...':category}</h3>
    
    <div className='card-grid'>
        {
            data.map( (img) =>(
                <GifGridItem 
                    key = {img.id} //aunque no es una props esperada,al ser una lista la key debe ser unica para c/elemento
                    {...img} //envio la propiedad omo un objeto 
                />
            ))
                  
        }
    </div>
    </>
  )
}

export default GifGrid