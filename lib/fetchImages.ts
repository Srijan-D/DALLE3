//this is the fetcher function for SWR hook used
const fetchImages= () =>
    fetch("/api/getImages", {
        cache: 'no-store',
    }).then(res => res.json())

//returning a promise es6 syntax


export default fetchImages