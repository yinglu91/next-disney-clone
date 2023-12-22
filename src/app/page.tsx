import MoviesCarousel from '@/app/components/movies/MoviesCarousel'
import {
  getUpcomingMovies,
  getTopRatedMovies,
  getPopularMovies,
} from '@/lib/getMovies'
import MoviesCarouselVertical from '@/app/components/movies/MoviesCarouselVertical'
import CarouselBannerWrapper from '@/app/components/movies/CarouselBannerWrapper'

// http://localhost:3000
export default async function Home() {
  const upcomingMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()

  return (
    <main>
      <CarouselBannerWrapper />

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
