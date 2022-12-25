// Simple App - Make a network request to fetch json response and print the result

import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  console.log(response.data);
});
