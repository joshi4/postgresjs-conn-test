const postgres = require('postgres'); 

const sql = postgres(); 

async function getCourses() {
   await sql`
    SELECT * FROM courses
  `.catch(x => console.log("Error", x)); 
}

setInterval(getCourses, 1000);
setInterval(getCourses, 1000);
setInterval(getCourses, 1000);
setInterval(getCourses, 1000);
setInterval(getCourses, 1000);
setInterval(getCourses, 1000);
setInterval(getCourses, 1000);
setInterval(getCourses, 1000);
setInterval(getCourses, 1000);
setInterval(getCourses, 1000);
setInterval(getCourses, 1000);
