const postgres = require('postgres');

const sql = postgres();

async function getCourses() {
  try {
   const result = await sql`
    SELECT * FROM courses
  `;

    if (result && Math.random() < 0.05) {
      console.log("returned rows: ", result.count);
    }
  } catch(x) {
   console.log("Error", x);
  }
}



function startLoop() {
  ( async ()=>{
    setInterval(getCourses, 1000);
    setInterval(getCourses, 2000);
  })();
}

startLoop();

// setInterval(getCourses, 60000);
// setInterval(getCourses, 1000000);
