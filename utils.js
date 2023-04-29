export const fetchData = () => {
    return fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data").then((res) => {
        return res.json()
    })
}