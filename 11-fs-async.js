const { readFile, writeFile } = require("fs");

console.log('starting task 1')
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `here is the result see of combining first and second : ${first} ${second}`,
      (err,result)=>{
        if(err) {
            console.log(err)
            return
        }
        console.log("done with this task 1")
      }
    );
  });
});

console.log("starting task 2")
