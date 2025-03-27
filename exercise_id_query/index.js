const express = require("express");
const app = express();

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

app.get("/animals", (req, res) => {
  res.json(animals);
});

app.get("/animals/:id", (req, res) => {
  const animalId = parseInt(req.params.id);
  const findAnimal = animals.find((animal) => animal.id === animalId);

  if (!findAnimal) {
    return res.status(404).json({ error: "Animal not found" });
  }

  res.json(findAnimal);
});

//app.get("/animals/art", (req, res) => {
//const { name, art, age } = req.query;
//const output = animals;

//if (name) output = output.filter((animal) => animal.animalName == name);
//if (art) output = output.filter((animal) => animal.animalArt == art);
// if (age) output = output.filter((animal) => animal.age == age);

// res.json(animals.animalName);
//});

ap.get("/animals/art", (req, res) => {
  const animalArt = req.query.art;
  const output = animals.filter((animals) => animals.animalArt === animalArt);
  res.json(output);
});

// route GET /tiere/search?art=hund

app.get("/animals/age", (req, res) => {
  const animalAge = req.query.age;
  const age = animals.filter((animals) => animals.age === age);
  res.json(age);
});

app.use(express.json()); // allows to send the body with the request
app.post("/animals", (req, res) => {
  const { art, name, age } = req.body; // the way of writing == "Destructuring" -> jason format as dictionary
  const newAnimal = {
    id: animal.length + 1,
    animalArt: art,
    animalName: name,
    age: age,
  };
  users.push(newAnimal(newAnimal));
  res.json(animals);
});

app.listen(5005);
