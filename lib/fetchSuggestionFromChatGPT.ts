const fetchSuggestionFromChatGPT = () =>
(fetch("/api/suggestion", {
    cache: 'no-store',
}).then(res => res.json())
)
//returning a promise es6 syntax


export default fetchSuggestionFromChatGPT