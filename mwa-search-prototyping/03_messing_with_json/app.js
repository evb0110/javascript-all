const data = fetch("./datafile.json");

async function handleData() {
  const response = await data;
  const responseJ = await response.json();
  console.log(responseJ);
  console.log("done");
}

handleData();
