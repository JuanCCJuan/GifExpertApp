{/* DEPENDENCIAS */}
import { PropTypes } from 'prop-types';

{/* COMPONENTES */}
import { GifItem } from './GifItem';

{/* HOOKS */}
import useFetchGifs from '../hooks/useFetchGifs';

export const GifGrid = ({ categoria }) => {
    const {gifs, isLoading} = useFetchGifs(categoria);
    console.log({gifs, isLoading});

    return (
        <>
            <h3>{ categoria }</h3>

            {
                isLoading && <h3>Cargando...</h3>
            }

            <div className='card-grid'>
                {gifs.map(
                    img => (
                        <GifItem key={ img.id } { ...img }/>
                    )
                )}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired
};