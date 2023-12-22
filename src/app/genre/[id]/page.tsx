import MoviesCarouselVertical from '@/app/components/movies/MoviesCarouselVertical'
import { getDiscoverMovies } from '@/lib/getMovies'

type Props = {
  params: { id: string }
  searchParams: { genre: string }
}

// http://localhost:3000/genre/80?genre=Crime
// url is cache key for Next14
const GenrePage = async ({ params, searchParams }: Props) => {
  // { params: { id: '80' }, searchParams: { genre: 'Crime' } }
  const { id } = params
  const { genre } = searchParams

  const movies = await getDiscoverMovies(id)

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
        <h1 className='text-6xl font-bold px-10'>Results for {genre}</h1>

        <MoviesCarouselVertical
          movies={movies}
          title='Genre'
        />
      </div>
    </div>
  )
}

export default GenrePage

// 2:25:06
