//Fetch é uma API do JavaScript que serve para fazer requisições HTTP.
//fetch("https://api.randomuser.me/?nat=BR&results=3")
//.then(response => response.json())
//.then(json => json.results)
//.then(console.log)

//Async/Await

const getFakePerson = async () => {
    const response = await fetch("https://api.randomuser.me/?nat=BR&results=1")
    const { data } = await response.json()
    console.log(data)
}

getFakePerson()

