const postgres = require('postgres');

const {Pool} = require('pg');

const pool = new Pool({
  idleTimeoutMillis: 60 * 60 * 1000 // 1 hour
})

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('pgPool: Unexpected error on idle client', err)
  process.exit(-1)
})

const sql = postgres({
 idle_timeout: 60* 60
});

async function getCourses(name) {
  try {
   const result = await sql`
    SELECT * FROM courses
  `;

   console.log(name,": ",  "returned rows: ", result.count);
  } catch(x) {
   console.log(name, ": ", "Error", x);
  }
}

async function getCoursesPg(name) {
  // promise - checkout a client
pool
  .connect()
  .then(client => {
    return client
      .query('SELECT * FROM coureses')
      .then(res => {
        client.release()
        console.log(res.rows[0])
      })
      .catch(err => {
        client.release()
        console.log("pgPool:", "number: ", name, "err:", err.stack)
      })
  })
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

    await getCoursesPg("1");
    await getCoursesPg("2");
    await getCoursesPg("3");
    await getCoursesPg("4");
    await getCoursesPg("5");
    await getCoursesPg("6");
    await getCoursesPg("7");
    await getCoursesPg("8");
    await getCoursesPg("9");
    await getCoursesPg("10");

    await getCoursesPg("11");
    await getCoursesPg("12");
    await getCoursesPg("13");
    await getCoursesPg("14");
    await getCoursesPg("15");
    await getCoursesPg("16");
    await getCoursesPg("17");
    await getCoursesPg("18");
    await getCoursesPg("19");
    await getCoursesPg("20");

   console.log("pgPool: initial calls end");

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

    setInterval(()=>{getCoursesPg("1")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("2")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("3")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("4")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("5")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("6")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("7")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("8")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("9")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("10")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("11")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("12")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("13")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("14")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("15")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("16")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("17")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("18")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("19")},  3000 * 1000);
    setInterval(()=>{getCoursesPg("20")},  3000 * 1000);
  })();
}

startLoop();

