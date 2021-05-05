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
    setInterval(getCourses, 100000);
    setInterval(getCourses, 200000);
  })();
}

startLoop();

