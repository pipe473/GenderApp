import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useListas from '../hooks/useListas';

const Lista = () => {

    const params = useParams();
    // console.log(params);  
    const { obtenerLista } = useListas();

    useEffect(() => {
        obtenerLista(params.id)
    }, [])   

    return ( 
        <div>Lista</div>
     );
}
 
export default Lista;