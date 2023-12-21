import getImagePath from '@/app/lib/getImagePath'
import { Movie } from '@/typings'
import Image from 'next/image'

type Props = {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div>
      <p>{movie.title}</p>

      <Image
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        alt={movie.title}
        width={1920}
        height={1080}
        key={movie.id}
      />
    </div>
  )
}

export default MovieCard
