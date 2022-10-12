import dotenv from "dotenv";  
dotenv.config();

import express from "express";
import expressSession from "express-session";
import multer from "multer";
import path from "path";
import { Client } from "pg";
import http from "http";
import { Server as SocketIO } from "socket.io";

import fetch from 'node-fetch'
import grant from 'grant';

const tables = Object.freeze({
  DAILYENG:"dailyEng",
  MEMBER: "member",
  BLOG: "blog",
  SHOP: "shop",
  THEME: "theme",
  SECONDHAND: "secondhand"
});


interface blog {
  id: number;
  username: string;
  subtitle: string;
  blogdate: string;
  content: string;
  image?: string;
  category_id: number;
}

interface Member {
  id: number;
  username: string;
  password: string;
  day_of_birth: Date;
  day_of_bnovisa: Date;
  email: string;
  filename: string;
  join_date: Date;
  entry_date: Date;
  quiz_scores: Number;
}


interface DailyEng{
  id: number;
  header: string;
  content: string;
  sample: string;
  translate: string;
}
interface Shop {
  id: number;
  shop_name: string;
  shop_address: string;
  opening_hour: string;
  shop_tel: string;
  filename?: string;
  category_id: number;
  remarks: string
}


interface Secondhand {
  id: number;
  username: string;
  secondhand_names: string;
  price: number,
  description: string;
  secondhand_img: string;
  update_date: Date;
  category_id: number;
}


const app = express();
const server = new http.Server(app);
const io = new SocketIO(server);

app.use(express.json());

export const client = new Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

app.use(express.json());
app.use(
  expressSession({
    secret: "Kelvin",
    resave: true,
    saveUninitialized: true,
  })
);


////加face book就用WSP011---> 2:21:00
const grantExpress = grant.express({
  "defaults":{
      "origin": "http://localhost:8080",
      "transport": "session",
      "state": true,
  },
  "google":{
      "key": process.env.GOOGLE_CLIENT_ID || "",
      "secret": process.env.GOOGLE_CLIENT_SECRET || "",
      "scope": ["profile","email"],
      "callback": "/login/google"
  }
});
app.use(grantExpress as express.RequestHandler);


client.connect();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.${file.mimetype.split("/")[1]}`);
  },
});
const upload = multer({ storage });





app.use((req, res, next) => {
  const cur = new Date().toISOString();
  console.log(`[INFO] ${cur} req path: ${req.path} method: ${req.method}`);
  next();
});

// io.on("connection", (socket) => {
//   // ...
//   console.log(`[INFO] socket: ${socket.id} is connected`);
// });

// method: GET, path: /blog
app.get("/blog", async (req, res) => {
  const username = req.session["user"].username;
  console.log("you are!" + username);
  const queryResult = await client.query<blog>(/*sql*/ `SELECT * FROM ${tables.BLOG} Where username = $1 ORDER BY blog_id DESC`,
  [username]);
  const blog = queryResult.rows;
  res.json({ data: blog });
});

// method: DELETE, path: /blog
app.delete("/blog/:blog_id", async (req, res) => {
  const blogID = parseInt(req.params.blog_id);
  if (isNaN(blogID)) {
    res.status(400).json({ message: "Invalid blog ID" });
    return;
  }
  await client.query(/*sql*/ `DELETE FROM ${tables.BLOG} WHERE blog_id = $1`, [blogID]);
  res.json({ message: "success" });
});

// method: DELETE, path: /secondhand
app.delete("/secondhand/:secondhand_id", async (req, res) => {
  const secondhandID = parseInt(req.params.secondhand_id);
  if (isNaN(secondhandID)) {
    res.status(400).json({ message: "Invalid blog ID" });
    return;
  }
  await client.query(/*sql*/ `DELETE FROM ${tables.SECONDHAND} WHERE secondhand_id = $1`, [secondhandID]);
  res.json({ message: "success" });
});






// // method: PUT, path: /blog
// app.put("/blog/:blog_id", async (req, res) => {
//   const subtitle = req.body.subtitle;
//   const content = req.body.content;
//   await client.query(/*sql*/ `UPDATE ${tables.BLOG} (subtitle, content) VALUES ($1, $2)`, [subtitle, content]);
//   console.log("what is that?" + req.session["user"]);
//   io.emit("new-blog");
//   res.json({ message: "success" });
// });


//get user information
app.get("/bloginfo", async (req, res) => {
  const username = req.session["user"].username;
  // console.log("get post to " + username)
  const queryResult = await client.query<Member>(/*sql*/ `SELECT * FROM ${tables.MEMBER} Where username = $1`,
  [username]);

  const member = queryResult.rows;
  // console.log(member)
  // console.log(member[0].username)
  res.json(member); 
});


// with file upload
app.post("/blog", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.session["user"]);
  const subtitle = req.body.subtitle;
  const content = req.body.content;
  const filename = req.file?.filename;
  const categoryId = req.body.categoryId;
  const username = req.session["user"].username;
  await client.query(/*sql*/ `INSERT INTO ${tables.BLOG} (subtitle, content, blog_img, post_date, category_id, username) VALUES ($1, $2, $3, NOW(), $4, $5)`, [subtitle, content, filename, categoryId, username]);
  console.log("what is that?" + req.session["user"]);
  io.emit("new-blog");
  res.json({ message: "success" });
});

//upload shops information
app.post("/shop", upload.single("shopImg"), async (req, res) => {
  console.log(req.body);
  // console.log(req.session["user"]);
  const shopName = req.body.shopName;
  const shopAddress = req.body.shopAddress;
  const openingHour = req.body.openingHour;
  const shopTel = req.body.shopTel;
  const shopImg = req.file?.filename;
  const categoryId = req.body.categoryId;
  const remarks = req.body.remarks;
  await client.query(/*sql*/ `INSERT INTO ${tables.SHOP} (shop_name, shop_address, opening_hour, shop_tel, shop_img, category_id, remarks) VALUES ($1, $2, $3, $4, $5, $6, $7)`, [shopName, shopAddress, openingHour, shopTel, shopImg, categoryId, remarks]);
  res.json({ message: "success" });
});



// // method: GET, path: /secondhand
app.get("/secondhand", async (req, res) => {
  const username = req.session["user"].username;
  console.log("you are " + username + "in selling!");
  const queryResult = await client.query<Secondhand>(/*sql*/ `SELECT * FROM ${tables.SECONDHAND} Where username = $1`,
  [username]);
  const secondhand = queryResult.rows;
  res.json({ data: secondhand });
});

// secondhand with file upload
app.post("/secondhand", upload.single("filename"), async (req, res) => {
  console.log(req.body);
  console.log(req.session["user"]);
  const secondhandName = req.body.secondhandName;
  const description = req.body.description;
  const filename = req.file?.filename;
  const categoryId = req.body.categoryId;
  const username = req.session["user"].username;
  const price = req.body.price;
  await client.query(/*sql*/ `INSERT INTO ${tables.SECONDHAND} (secondhand_name, description, secondhand_img, category_id, username, price) VALUES ($1, $2, $3, $4, $5, $6)`, [secondhandName, description, filename, categoryId, username, price]);
  io.emit("new-secondhand");
  res.json({ message: "success" });
});

//get shop from database for themeliving
app.get("/themelivingshop", async (req, res) => {
  const categoryId = 3;
  // console.log("your cat_id is (for blog) " + categoryId);
  const queryResult = await client.query<Shop>(/*sql*/ `SELECT * FROM ${tables.SHOP} Where category_id = $1`,[categoryId]);
  const theme = queryResult.rows;
  res.json({ data: theme });
});

//get secondhand from database for themeliving
app.get("/themelivingsecondhand", async (req, res) => {
  const categoryId = 3;
  console.log("your cat_id is " + categoryId);
  const queryResult = await client.query<Secondhand>(/*sql*/ `SELECT * FROM ${tables.SECONDHAND} Where category_id = $1`,[categoryId]);
  const theme = queryResult.rows;
  res.json({ data: theme });
});

//get blog from database for themeliving
app.get("/themelivingblog", async (req, res) => {
  const categoryId = 3;
  // console.log("your cat_id is (for blog) " + categoryId);
  const queryResult = await client.query<blog>(/*sql*/ `SELECT * FROM ${tables.BLOG} Where category_id = $1`,[categoryId]);
  const theme = queryResult.rows;
  res.json({ data: theme });
});


//get shop from database for themeshopping
app.get("/themeshoppingshop", async (req, res) => {
  const categoryId = 1;
  // console.log("your cat_id is (for blog) " + categoryId);
  const queryResult = await client.query<Shop>(/*sql*/ `SELECT * FROM ${tables.SHOP} Where category_id = $1`,[categoryId]);
  const theme = queryResult.rows;
  console.log(queryResult.rows);
  res.json({ data: theme });
});

//get secondhand from database for themeshopping
app.get("/themeshoppingsecondhand", async (req, res) => {
  const categoryId = 1;
  console.log("your cat_id is " + categoryId);
  const queryResult = await client.query<Secondhand>(/*sql*/ `SELECT * FROM ${tables.SECONDHAND} Where category_id = $1`,[categoryId]);
  const theme = queryResult.rows;
  console.log(queryResult.rows);
  res.json({ data: theme });
});

//get blog from database for themeshopping
app.get("/themeshoppingblog", async (req, res) => {
  const categoryId = 1;
  // console.log("your cat_id is (for blog) " + categoryId);
  const queryResult = await client.query<blog>(/*sql*/ `SELECT * FROM ${tables.BLOG} Where category_id = $1`,[categoryId]);
  const theme = queryResult.rows;
  console.log(queryResult.rows);
  res.json({ data: theme });
});

//get shop from database for themeshopping
app.get("/themewalkingshop", async (req, res) => {
  const categoryId = 4;
  // console.log("your cat_id is (for blog) " + categoryId);
  const queryResult = await client.query<Shop>(/*sql*/ `SELECT * FROM ${tables.SHOP} Where category_id = $1`,[categoryId]);
  const theme = queryResult.rows;
  console.log(queryResult.rows);
  res.json({ data: theme });
});

//get secondhand from database for themeshopping
app.get("/themewalkingsecondhand", async (req, res) => {
  const categoryId = 4;
  console.log("your cat_id is " + categoryId);
  const queryResult = await client.query<Secondhand>(/*sql*/ `SELECT * FROM ${tables.SECONDHAND} Where category_id = $1`,[categoryId]);
  const theme = queryResult.rows;
  console.log(queryResult.rows);
  res.json({ data: theme });
});

//get blog from database for themeshopping
app.get("/themewalkingblog", async (req, res) => {
  const categoryId = 4;
  // console.log("your cat_id is (for blog) " + categoryId);
  const queryResult = await client.query<blog>(/*sql*/ `SELECT * FROM ${tables.BLOG} Where category_id = $1`,[categoryId]);
  const theme = queryResult.rows;
  console.log(queryResult.rows);
  res.json({ data: theme });
});

//get shop from database for themeshopping
app.get("/themeeatingshop", async (req, res) => {
  const categoryId = 2;
  // console.log("your cat_id is (for blog) " + categoryId);
  const queryResult = await client.query<Shop>(/*sql*/ `SELECT * FROM ${tables.SHOP} Where category_id = $1`,[categoryId]);
  const theme = queryResult.rows;
  console.log(queryResult.rows);
  res.json({ data: theme });
});

//get secondhand from database for themeshopping
app.get("/themeeatingsecondhand", async (req, res) => {
  const categoryId = 2;
  console.log("your cat_id is " + categoryId);
  const queryResult = await client.query<Secondhand>(/*sql*/ `SELECT * FROM ${tables.SECONDHAND} Where category_id = $1`,[categoryId]);
  const theme = queryResult.rows;
  console.log(queryResult.rows);
  res.json({ data: theme });
});

//get blog from database for themeshopping
app.get("/themeeatingblog", async (req, res) => {
  const categoryId = 2;
  // console.log("your cat_id is (for blog) " + categoryId);
  const queryResult = await client.query<blog>(/*sql*/ `SELECT * FROM ${tables.BLOG} Where category_id = $1`,[categoryId]);
  const theme = queryResult.rows;
  console.log(queryResult.rows);
  res.json({ data: theme });
});




//** to upload date to datebase for checking
// app.post("/themeliving", upload.single("filename"), async (req, res) => {
//   // console.log(req.body);
//   // console.log(req.session["user"]);
//   const name = req.body.name;
//   // const link = req.body.link;
//   const filename = req.file?.filename;
//   const categoryId = req.body.categoryId;
//   const description = req.body.description;
//   await client.query(/*sql*/ `INSERT INTO ${tables.THEME} (name, theme_img, category_id, description) VALUES ($1, $2, $3, $4)`, [name, filename, categoryId, description]);
//   res.json({ message: "success" });
// });


//reg form with file upload
app.post("/member", upload.single("filename"), async (req, res) => {
  console.log(req.body);
  console.log(req.session["user"]);
  // const subtitle = req.body.subtitle;
  //const postdate =req.body.postdate;

  let filename = req.file?.filename;

if(!filename){
  filename = "6127218311011111.jpeg"
 
} else {
  filename = req.file?.filename;
}

  const username = req.body.username;
  const password = req.body.password;
  const dayOfBirth = req.body.day_of_birth;
  const dayOfBnovisa = req.body.day_of_bnovisa;
  const email = req.body.email;
  await client.query(/*sql*/ `INSERT INTO ${tables.MEMBER} (profile_pic, username, password, day_of_birth, day_of_bnovisa, email) VALUES ($1, $2, $3, $4, $5, $6)`, [filename, username, password, dayOfBirth, dayOfBnovisa, email]);
  
  io.emit("new-reg");
  res.json({ message: "success" });
});



//做check registration 嘅時候check username係咪登記過
app.get("/regist", async (req, res) => {

  const queryResult = await client.query<Member>(/*sql*/ `SELECT username FROM ${tables.MEMBER}`);
  const registName = queryResult.rows;
  res.json(registName);
 
});
// //check username

// app.post("/member", async (req, res) => {
//   const { username } = req.body;
//   const queryResult = await client.query<Member>(/*sql*/ `SELECT * FROM ${tables.MEMBER} WHERE username = $1`, [username]);
//   const user = queryResult.rows[0];
//   if ( username === user) {
//     res.status(400).json({ message: "username has been taken" });
//     return;
//   }
//   req.session["user"] = { username: user.username };
//   res.status(200).end();
// });


app.delete("/blog/:mid", async (req, res) => {
  const blogID = parseInt(req.params.mid);
  if (isNaN(blogID)) {
    res.status(400).json({ message: "Invalid blog ID" });
    return;
  }
  await client.query(/*sql*/ `DELETE FROM ${tables.BLOG} WHERE id = $1`, [blogID]);
  res.json({ message: "success" });
});




///-----------Daily English
function getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

app.get("/dilyEng", async (req, res) => {
  const tableId = getRandomInt(1, 10)
  // console.log("get post to " + username)
  const queryResult = await client.query<DailyEng>(/*sql*/ `SELECT * FROM ${tables.DAILYENG} Where id = $1`,
  [tableId]);

  const dailyEng = queryResult.rows;
  res.json(dailyEng);
 
});

//做update member details to home bar
app.get("/after", async (req, res) => {
  const username = req.session["user"].username;
  // console.log("get post to " + username)
  const queryResult = await client.query<Member>(/*sql*/ `SELECT * FROM ${tables.MEMBER} Where username = $1`,
  [username]);

  const member = queryResult.rows;
  console.log(member)
  console.log(member[0].username)
  res.json(member);
 
});
// Update After Home page 入面 entry date
app.post("/after", async (req, res) => {
  const entryDate = req.body.entryDate;
  const username = req.session["user"].username;

  console.log(entryDate)

  await client.query(/*sql*/ `UPDATE ${tables.MEMBER} SET entry_date = $2 WHERE username = $1`, [username,entryDate]);
console.log("POST/after update data")
// io.emit("new-entryDate");
  res.json({ message: "update table's fied value ok" });
});



// Update QUIZ page 入面 分數！！！！！
app.get("/quiz", async (req, res) => {

  // console.log("get post to " + username)
  const queryResult = await client.query<Member>(/*sql*/ `SELECT quiz_scores, username FROM ${tables.MEMBER} WHERE quiz_scores IS NOT NULL`);

  const memberScores = queryResult.rows;

  res.json(memberScores);
 
});



app.post("/quiz", async (req, res) => {
  const quizScores = req.body.quizScores;
  const username = req.session["user"].username;

  await client.query(/*sql*/ `UPDATE ${tables.MEMBER} SET quiz_scores = $2 WHERE username = $1`, [username,quizScores]);
console.log("POST/after update data")
// io.emit("new-entryDate");
  res.json({ message: "QUI score update lalala" });
});








//做Google login-----------------------------------
app.get('/login/google', async(req: express.Request, res: express.Response)=>{
  console.log("Google~~~")
  const accessToken = req.session?.['grant'].response.access_token;
  const fetchRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo',{
    headers:{
        "Authorization":`Bearer ${accessToken}`
    }   
})
    const result = await fetchRes.json();
    console.log(result)
    const users = (await client.query(`SELECT * FROM ${tables.MEMBER} WHERE email = $1`,[result.email])).rows;
    const user = users[0];
    if(!user){
      res.json("o.....failed~ you login by Google la ")
        return res.status(401).redirect('/404.html')
        
    }
    if(req.session){
        req.session['user'] = { username: user.username};    
    }
    // res.json("you login by Google la ")
    return res.redirect('/index_after.html')
  
})

//做user login-----------------------------------
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Invalid username or password." });
    return;
  }
  const queryResult = await client.query<Member>(/*sql*/ `SELECT * FROM ${tables.MEMBER} WHERE username = $1`, [username]);
  const user = queryResult.rows[0];
  if (!user || user.password !== password) {
    res.status(400).json({ message: "Invalid username or password." });
    return;
  }
  req.session["user"] = { username: user.username };
  res.json("LOGIN SCCESS la!")
  res.status(200).end();
});


//做user login-----------------------------------

//method: post  ; path:"/message"; 
app.post("/message", (req, res) => {
    const message = req.body.message
    
    res.json({message:"OK LA"})
  // io.emit("new-message", message) "new-message">>>呢個名係Javascript要用到
    io.emit("new-message", {message})

})

io.on('connection', function (socket) {
    // console.log(socket);
});

// 如果有session就繼續行，冇就跳去index
const isLoggedIn = (req:express.Request,res:express.Response,next:express.NextFunction)=>{

  if(req.session && req.session['user']){
     next()
  }else{
     res.redirect("/")
  }
}


// --- 做logout
app.get('/logout',(req, res)=>{
  delete req.session['user'];
  res.redirect('/')
})

app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "uploads")));
app.use(isLoggedIn,express.static(path.join(__dirname, "protected")));


app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`[info] listening to port ${PORT}`);
});
