const dotenv = require("dotenv");
const connectDB = require('./config/db');
dotenv.config();

const Author = require('./models/Author');
const Course = require('./models/Course');

connectDB();

//sukuriam autorius
// async function createAuthor(name, bio, website) { 
//     const author = new Author({
//       name, 
//       bio, 
//       website 
//     });
  
//     const result = await author.save();
//     console.log(result);
//   }
  
//   createAuthor('Roberta', 'dizaino magistras', 'https://medziaga.lt/');


// //sukuriam kursus, ID imam is autoriaus
//   async function createCourse(name, author) {
//     const course = new Course({
//       name, 
//       author
//     }); 
    
//     const result = await course.save();
//     console.log(result);
//   }

//   createCourse('JS kursai pradinukam', '62bc303ff5b6a487a738c6d0')
//   createCourse('kaip iskepti tobula torta', '62bc3073f1d7f32e787ae278')
//   createCourse('papuosk save ir kitus', '62bc309569536137dcde8d12')

async function listCourses() { 
    const courses = await Course
    //su find parodys visus duomenys, o su .populate ir .select pasirenkam kuriuos "stalcius" konkreciai norim matyti
      .find()
      //ka rodys gautuose duomenyse is Author collection
      .populate('author', 'bio name website -_id')
      //ka rodys is gautu pagrindiniu duomenu -> course, filtravimas konkreciai
      .select('name');
    console.log(courses);
  }

  listCourses();
