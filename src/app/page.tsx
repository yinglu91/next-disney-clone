import MoviesCarousel from '@/app/components/movies/MoviesCarousel'
import {
  getUpcomingMovies,
  getTopRatedMovies,
  getPopularMovies,
} from '@/lib/getMovies'

// http://localhost:3000
export default async function Home() {
  const upcomingMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()

  return (
    <main>
      <h1>let build disney</h1>

      {/* CarouselBannerWrapper */}

      <div className='flex flex-col space-y-2 xl:-mt-48'>
        <MoviesCarousel
          movies={upcomingMovies}
          title='Upcoming'
        />

        <MoviesCarousel
          movies={topRatedMovies}
          title='Top Rated'
        />

        <MoviesCarousel
          movies={popularMovies}
          title='Popular'
        />
      </div>
    </main>
  )
}
