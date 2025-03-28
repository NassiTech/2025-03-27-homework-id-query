const express = require("express");
const app = express();
app.use(express.json()); // needed for POST to parse the incoming JSON body

const animals = [
  { id: 1, animalArt: "dog", animalName: "Bobo", age: 6 },
  { id: 2, animalArt: "cat", animalName: "Minou", age: 8 },
  { id: 3, animalArt: "canary", animalName: "Tweety", age: 2 },
  { id: 4, animalArt: "hamster", animalName: "Fluffy", age: 3 },
  { id: 5, animalArt: "parrot", animalName: "Rio", age: 6 },
  { id: 6, animalArt: "fish", animalName: "Sashimi", age: 7 },
  { id: 7, animalArt: "dog", animalName: "Cara", age: 13 },
  { id: 8, animalArt: "cat", animalName: "Alice", age: 11 },
];

// GET /animals - return all animals
//
// example: GET localhost:5005/animals
//
app.get("/animals", (req, res) => {
  res = res.json(animals);
});

// GET /animals/search?art=dog: Filter animals by their art
//
// example: GET localhost:5005/animals/search?art=cat
//
app.get("/animals/search", (req, res) => {
  const art = req.query.art;
  const filteredAnimals = animals.filter((animal) => animal.animalArt === art);
  res.json(filteredAnimals);
});

// GET /animals/:id: Return the animal with the specified ID
//
// example: GET localhost:5005/animals/3
//
app.get("/animals/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const animal = animals.find((animal) => animal.id === id);
  if (!animal) {
    return res.status(404).json({ error: "Animal not found" });
  }
  res.json(animal);
});

// POST /animals: Insert a new animal via JSON body
//
// example: POST localhost:5005/animals
//
// JSON in body:
//
// {
//   "animalArt": "rabbit",
//   "animalName": "Thumper",
//   "age": 3
// }
//
app.post("/animals", (req, res) => {
  const animalArt = req.body.animalArt;
  const animalName = req.body.animalName;
  const age = req.body.age;

  const newAnimal = {
    id: animals.length + 1,
    animalArt,
    animalName,
    age,
  };

  animals.push(newAnimal);
  res.status(201).json(newAnimal);
});

app.listen(5005, () => {
  console.log(`Server runs under http://localhost:5005`);
});
