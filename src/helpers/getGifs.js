export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZNq5oEunJ5aaBR2Z4gaRuSNpvDqgxjkf&q=${ category }&limit=10`
    const response = await fetch(url)
    const {data} = await response.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_height_small.url
    }))
    console.log(gifs)
    return gifs
}