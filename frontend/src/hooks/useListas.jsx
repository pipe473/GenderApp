import { useContext } from 'react';
import ListasContext from '../context/ListasProvider';

const useListas = () => {
    return useContext(ListasContext)
}

export default useListas
