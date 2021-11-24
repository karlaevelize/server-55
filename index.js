//import express
const express = require("express")

//1. Associate express to a variable
//1. Initialize a server
const app = express()

//Server needs a port
const port = 4000

const data = [
  {
    id: 1,
    name: "Luna Lovegood",
    blood: "Pure-blood",
    species: "Human",
    patronus: "Hare",
    born: "13 February, 1981",
    quote: "Things we lose have a way of coming back to us in the end, if not always in the way we expect",
    imgUrl: "https://static.wikia.nocookie.net/harry-potter-pedia/images/8/87/Luna_profile.png/revision/latest?cb=20140511105302",
    houseId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Hermione Granger",
    blood: "Muggle-born",
    species: "Human",
    patronus: "Otter",
    born: "19 September, 1979",
    quote: "Now, if you two don't mind, I'm going to bed before either of you come up with another clever idea to get us killed or worse… Expelled!",
    imgUrl: "https://static.wikia.nocookie.net/magicverse/images/3/34/Hermione_Granger.jpg/revision/latest?cb=20210304201426&path-prefix=tr",
    houseId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

//Send hello on homepage
//on http://localhost:4000/ I want to see "Hello"
app.get("/", (request, response) => {
  console.log(request.path)
  response.send("Another phrase")
})

//on http://localhost:4000/me I want to see "I am Karla"
app.get("/me", (request, response) => {
  response.send("I am Karla")
})

//on http://localhost:4000/harry-potter I see a list of characters
app.get("/harry-potter", (request, response) => {
  response.send(data)
})

//on http://localhost:4000/pure-blood I see a list of characters with pure-blood
app.get("/pure-blood", (request, response) => {
  const filterByBlood = data.filter(character => character.blood === "Pure-blood")
  response.send(filterByBlood)
})

//:name means this value will be replaced by something
//we call it params
//on http://localhost:4000/char/1 I see Luna Lovegood
app.get("/char/:id", (request, response) => {
  const charId = request.params.id
  const charById = data.find(char => char.id === parseInt(charId))
  response.send(charById)
})

//Start listening
app.listen(port, () => console.log(`Listening on ${port}`))