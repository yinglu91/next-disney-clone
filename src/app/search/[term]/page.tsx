import MoviesCarousel from '@/app/components/movies/MoviesCarousel'
import MoviesCarouselVertical from '@/app/components/movies/MoviesCarouselVertical'
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies'
import { notFound } from 'next/navigation'

type Props = { params: { term: string } }

// http://localhost:3000/search/[term]
// http://localhost:3000/search/abc
const SearchPage = async ({ params }: Props) => {
  const { term } = params

  if (!term) {
    notFound()
  }

  const termToUse = decodeURI(term)

  // console.log(`term=${term},termToUse=${termToUse} `)
  // term=star%20war,termToUse=star war

  const movies = await getSearchedMovies(termToUse)
  const popularMovies = await getPopularMovies()

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
        <h1 className='text-6xl font-bold px-10'>Results for {termToUse}</h1>

        <MoviesCarouselVertical
          movies={movies}
          title='Movies'
        />

        <MoviesCarousel
          movies={popularMovies}
          title='You may also like'
        />
      </div>
    </div>
  )
}

export default SearchPage
