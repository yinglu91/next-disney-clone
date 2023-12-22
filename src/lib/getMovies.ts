import { Movie, SearchResults } from '@/typings'

// https://www.youtube.com/watch?v=G6X6CnxBDI4&t=5415s
// 1:30:40 / 3:56:47

export const fetchFromTMDB = async (url: URL, cacheTime?: number) => {
  url.searchParams.set('include_adult', 'false')
  url.searchParams.set('include_video', 'false')
  url.searchParams.set('sort_by', 'popularity.desc')
  url.searchParams.set('language', 'en-US')
  url.searchParams.set('page', '1')

  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24, // 24 hours by default
    },
  }

  const response = await fetch(url, options)
  const data = (await response.json()) as SearchResults

  return data.results
}

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  const url = new URL('https://api.themoviedb.org/3/movie/upcoming')
  return fetchFromTMDB(url)
}

export const getTopRatedMovies = async (): Promise<Movie[]> => {
  const url = new URL('https://api.themoviedb.org/3/movie/top_rated')
  return fetchFromTMDB(url)
}

export const getPopularMovies = async (): Promise<Movie[]> => {
  const url = new URL('https://api.themoviedb.org/3/movie/popular')
  return fetchFromTMDB(url)
}

export const getDiscoverMovies = async (id?: string, keywords?: string) => {
  const url = new URL('https://api.themoviedb.org/3/discover/movie')

  id && url.searchParams.set('with_genre', id)

  if (keywords) {
    url.searchParams.set('with_keywords', keywords)
  }

  return fetchFromTMDB(url)
}

// 1:39:00

export const getSearchedMovies = async (term: string) => {
  const url = new URL('https://api.themoviedb.org/3/search/movie')

  url.searchParams.set('query', term)

  return fetchFromTMDB(url)
}
