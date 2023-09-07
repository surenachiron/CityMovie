export const getMovies = async () => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTQyY2I0NTM2N2I5YjJhZGUyYmE2MDI3Nzg0ZjZiOCIsInN1YiI6IjY0ZjcyNzkxOGUyMGM1MGNkODQzNWI2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Coj1XqkHwJFAKiOqVqRJRibmrsUlCP1r1Z4EC4_UA8w'
        }
    };

    const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    return data.json();
}