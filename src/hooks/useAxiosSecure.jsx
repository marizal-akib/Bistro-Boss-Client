import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    return (
        <div>
            
        </div>
    );
};

export default useAxiosSecure;