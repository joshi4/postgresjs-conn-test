const postgres = require('postgres');

const sql = postgres();

async function getCourses() {
  try {
   const result = await sql`
    SELECT * FROM courses
  `;

   console.log("returned rows: ", result.count);
  } catch(x) {
   console.log("Error", x);
  }
}



function startLoop() {
  ( async ()=>{
    await getCourses(); 
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
    setInterval(getCourses, 60000);
  })();
}

startLoop();

