import { useState } from 'react';

{/* COMPONENTES */}
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    // const [categorias, setCategorias] = useState(['One Punch', 'Arale', 'Naruto', 'Luffy']);
    const [categorias, setCategorias] = useState([]);

    const onAddCategory = (nuevaCategoria) => {
        const incluir = categorias.every(c => c.toLowerCase() != nuevaCategoria.toLowerCase());

        if(incluir){
            setCategorias([nuevaCategoria, ...categorias]);
        }
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={ onAddCategory }/>

            {
                categorias.map(categoria => 
                    (
                        <GifGrid categoria={ categoria } key={ categoria }/>
                    )
                )
            }
        </>
    )
}
