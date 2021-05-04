const postgres = require('postgres'); 

const sql = postgres(); 

function getCourses() {
   const result = await sql`
    SELECT * FROM courses
  `.catch(x => console.log("Error", x)); 
  if (Math.random() < 0.05) {
    console.log("returned rows: ", result.count); 
  }
}

setInterval(getCourses, 10000);
setInterval(getCourses, 30000);
setInterval(getCourses, 60000);
setInterval(getCourses, 1000000);
