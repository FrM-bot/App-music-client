export const GET_MUSIC = async (name) => {
    // const nameQuery = name.replace(' ', '%')
    try {
        const music = await fetch(`http://localhost:8000/music/${name}`)
        const musicBlob = await music.blob()
        const url = URL.createObjectURL(musicBlob)
        return url
    } catch (error) {
        alert(error)
    }
}
export const GET_MUSICS = async () => {
    try {
        const musics = await fetch('http://localhost:8000/musics')
        const musicsJson = await musics.json()
        return musicsJson
    } catch (error) {
        alert(error)
    }
}