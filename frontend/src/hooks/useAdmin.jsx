import useListas from './useListas';
import useAuth from './useAuth';

const useAdmin = () => {
    const { lista } = useListas()
    const { auth } = useAuth()
    return lista.creador === auth._id
}

export default useAdmin
