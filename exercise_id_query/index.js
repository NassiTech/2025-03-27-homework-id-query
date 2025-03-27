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
  res = res.json();
});

app.get("/animals/:id", (req, res) => {
  res = res.json();
  const animalId = parseInt(req.params.id);
  const findAnimal = animals.find((animal) => animal.id == id);
  res.json(findAnimal);
});

app.get("/animals/search", (req, res) => {
  const { name, art, age } = req.query;
  const output = animals;

  if (name) output = output.filter((animal) => animal.animalName == name);
  if (art) output = output.filter((animal) => animal.animalArt == art);
  if (age) output = output.filter((animal) => animal.age == age);

  res.json(animals.animalName);
});

//app.get("/animals/search", (req, res) => {
//const animalArt = req.query.art;
//const output = animals.filter((animals) => animals.art == animalArt);

//res.json(art); // may be better?
//});

//app.get("/animals/search", (req, res) => {
//const animalAge = req.query.age;
//const output = animals.filter((animals) => animals.age == age);
//res.send(animals.animalAge);
//res.json(age);
//});

app.listen(5005);
