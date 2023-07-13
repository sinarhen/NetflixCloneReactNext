import useSWR from 'swr';
import fetcher from '@/lib/fetcher';


const useFavorites = () => {
    const {data, error, isLoading, mutate} = useSWR('/api/favorites', fetcher,{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    if (error ) {
        console.log(error);
    }

    return {
        data, 
        error, 
        isLoading,
        mutate
    }
}

export default useFavorites;