// Simple App - Make a network request to fetch json response and print the result
// Problem of using JavaScript

import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  const todo = response.data;

  const ID = todo.ID; // typo error, return undefined
  const title = todo.Title; // typo error, return undefined
  const finished = todo.finished; // typo error, return undefined

  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);
});
