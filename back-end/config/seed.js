const { readFile } = require("fs").promises;
const path = require("path");
const { db } = require("./connection.js");
const Todo = require("../src/models/Todo.js");

async function seed() {
  try {
    const data = await readFile(path.join(__dirname, "seedData.json"));
    const todos = JSON.parse(data);
    await db.sync({ force: true });
    await Todo.bulkCreate(todos);
  } catch (error) {
    console.log(error);
  }
}

seed();
