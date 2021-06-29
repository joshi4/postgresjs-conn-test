const postgres = require('postgres');

const sql = postgres({
 idle_timeout: 60* 60
});

async function getCourses(name) {
  try {
   const result = await sql`
    SELECT count(*) FROM courses
  `;

   console.log(name,": ",  "returned rows: ", result);
  } catch(x) {
   console.log(name, ": ", "Error", x);
  }
}

function startLoop() {
  ( async ()=>{
    await getCourses("1");
    await getCourses("2");
    await getCourses("3");
    await getCourses("4");
    await getCourses("5");
    await getCourses("6");
    await getCourses("7");
    await getCourses("8");
    await getCourses("9");
    await getCourses("10");
    await getCourses("11");

    await getCourses("12");
    await getCourses("13");
    await getCourses("14");
    await getCourses("15");
    await getCourses("16");
    await getCourses("17");
    await getCourses("18");
    await getCourses("19");
    await getCourses("20");

   console.log("initial calls end");

    setInterval(()=>{getCourses("1")},  3000 * 1000);
    setInterval(()=>{getCourses("2")},  3000 * 1000);
    setInterval(()=>{getCourses("3")},  3000 * 1000);
    setInterval(()=>{getCourses("4")},  3000 * 1000);
    setInterval(()=>{getCourses("5")},  3000 * 1000);
    setInterval(()=>{getCourses("6")},  3000 * 1000);
    setInterval(()=>{getCourses("7")},  3000 * 1000);
    setInterval(()=>{getCourses("8")},  3000 * 1000);
    setInterval(()=>{getCourses("9")},  3000 * 1000);
    setInterval(()=>{getCourses("10")},  3000 * 1000);

    setInterval(()=>{getCourses("11")},  3000 * 1000);
    setInterval(()=>{getCourses("12")},  3000 * 1000);
    setInterval(()=>{getCourses("13")},  3000 * 1000);
    setInterval(()=>{getCourses("14")},  3000 * 1000);
    setInterval(()=>{getCourses("15")},  3000 * 1000);
    setInterval(()=>{getCourses("16")},  3000 * 1000);
    setInterval(()=>{getCourses("17")},  3000 * 1000);
    setInterval(()=>{getCourses("18")},  3000 * 1000);
    setInterval(()=>{getCourses("19")},  3000 * 1000);
    setInterval(()=>{getCourses("20")},  3000 * 1000);
  })();
}

startLoop();

