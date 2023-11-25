
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure';


const useAdmin = () => {
    // const token = localStorage.getItem('access-token')
    const {user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data : isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async() => {
            console.log('asking or cheking is admin', user.displayName);
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;