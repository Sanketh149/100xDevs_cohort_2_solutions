const fs = require("fs");

fs.readFile("a.txt", "utf-8", (error, data) => {
  if (error) throw error;
  let cleanData = data.split(" ");
  cleanData = cleanData.filter((data) => data != "");
  cleanData = cleanData.join(" ");
  fs.writeFile("a.txt", cleanData, (err, data) => {
    console.log(cleanData);
  });
});
