const getImagePath = (imagePath: string, fullSize?: boolean) => {
  if (!imagePath) {
    return 'https://links.papareact.com/o8z'  
  }

  const imageBase = `http://image.tmdb.org/t/p/${
    fullSize ? 'original' : 'w500'
  }`

  return `${imageBase}/${imagePath}`
}

export default getImagePath
