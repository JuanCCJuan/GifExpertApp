{/* DEPENDENCIAS */}
import { useState, useEffect } from 'react';

{/* HELPERS */}
import { getGifs } from '../helpers/getGifs';

export default function useFetchGifs(categoria){
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getGifsInfo = async () => {
        const arregloGifs = await getGifs(categoria);
        setGifs(arregloGifs);
        setIsLoading(false);
    }

    useEffect(
        () => {
            getGifsInfo();
        }, []
    );

    return({
        gifs, 
        isLoading
    });
}