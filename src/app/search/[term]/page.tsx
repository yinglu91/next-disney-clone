import { notFound } from 'next/navigation'

type Props = { params: { term: string } }

// http://localhost:3000/search/[term]
// http://localhost:3000/search/abc
const SearchPage = ({ params }: Props) => {
  const { term } = params
  const termToUse = decodeURI(term)

  console.log(`term=${term},termToUse=${termToUse} `)
  // term=star%20war,termToUse=star war

  if (!term) {
    notFound()
  }

  // API call to get populate/search movies

  return <div>SearchPage for {termToUse}</div>
}

export default SearchPage
