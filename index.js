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
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    await getCourses(); 
    console.log("initial calls end"); 

    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
    setInterval(getCourses,  3000 * 1000);
  })();
}

startLoop();

