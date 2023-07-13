import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import {getSession, signOut} from 'next-auth/react';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieLIst';
import useMovieList from '@/hooks/useMovieList';
import {useCallback} from 'react';
import useFavorites from '@/hooks/useFavorites';

export async function getServerSideProps(context:NextPageContext){
    const session = await getSession(context);

    if (!session) {
      return {
        redirect: {
          destination: '/auth',
          permanent: false,
        }
      }
    }
  return {
    props: {}
  };
}

export default function Home() {
  const {data:movies = []} = useMovieList();
  const {data:favorites = []} = useFavorites();
  console.log(favorites)
  return (
    <>
      <Navbar/>
      <Billboard/>
      <div className='pb-40'>
        <MovieList title='Trending now' data={movies}/>    
        <MovieList title='Movie List' data={favorites}/>
      </div>
    </>
  )
}
