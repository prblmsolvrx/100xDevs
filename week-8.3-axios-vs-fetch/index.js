//axios vs fetch
const axios=require ('axios');
//fetch
async function main(){
  const response=await fetch('https://sum-server.100xdevs.com/todos');
    const json=await response.json();
    console.log(json);
}

//axios
async function main(){
  const response=await axios.get('https://sum-server.100xdevs.com/todos');
    console.log(response.data.todos);;
}

main();