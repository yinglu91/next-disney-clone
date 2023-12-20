type Props = {
  params: { id: string }
  searchParams: { genre: string }
}

// http://localhost:3000/genre/80?genre=Crime
// url is cache key for Next14
const GenrePage = ({ params, searchParams }: Props) => {
  // { params: { id: '80' }, searchParams: { genre: 'Crime' } }
  const { id } = params
  const { genre } = searchParams

  return (
    <div>
      <h1>
        Welcome to genre with ID: {id}, name: {genre}
      </h1>
    </div>
  )
}

export default GenrePage
