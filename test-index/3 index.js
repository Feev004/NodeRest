// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');


// mongoose.connect(
//     "mongodb://admin:BCNihd16713@node56389-noderest-test1.proen.app.ruk-com.cloud:11914", {
//         useNewUrlParser: true,
//         useUnitfiedTopology: true,
//     }
// );
//  HEAD
// const Book = mongoose.model("Book", {
//     id: {
//         type: Number,
//         unique: true,
//         required: true,
// //const dbUrl = "postgres://webadmin:YLTkax31635@node56376-noderest-test1.proen.app.ruk-com.cloud/Books"
// //const dbUrl = "postgres://webadmin:YLTkax31635@node56376-noderest-test1.proen.app.ruk-com.cloud:11873/Books"
// //const dbUrl = "http://localhost:3000"

// //const sequelize = new Sequelize(dbUrl);
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host : 'localhost',
//     dialect : 'sqlite',
//     storage : './Database/SQBooks.sqlite'
// });

// const Book = sequelize.define("book",{
//     id :{
//         type: Sequelize.INTEGER,
//         autoIncrement:true,
//         primaryKey: true
// >>>>>>> c609dfad54ad2935276ac3edf96141e47791ffc5
//     },
//     title: String,
//     author: String,
// });

// const app = express();
// app.use(bodyParser.json());


// app.post('/books', async(req, res) => {
//     try {

//         const lastBook = await Book.findOne().Sort({ id: -1 })
//         const nextId = lastBook ? lastBook.id + 1 : 1


//         const book = new Book({
//             id: nextId,
//             ...req.body,
//         })

//         await book.save()
//         res.send(book)
//     } catch (err) {
//         res.status(500).send('Error')
//     }
// })


// app.get('/books', async(req, res) => {
//     try {
//         const books = await Book.find()
//         res.send(books)
//     } catch (err) {
//         res.status(500).send('Error')
//     }
// })


// app.get('/books/:id', async(req, res) => {
//     try {
//         const book = await Book.findOne({ id: req.params.id })
//         res.send(books)
//     } catch (err) {
//         res.status(500).send('Error')
//     }
// })


// app.put('/books/:id', async(req, res) => { // show create desktop
//     try {
//         const book = await Book.findOneAndUpdate({ id: req.params.id }, req.body, {
//             new: true,
//         })
//         res.send(books)
//     } catch (err) {
//         res.status(500).send('Error')
//     }
// })


// app.delete('/books/:id', async(req, res) => {
//     try {
//         const book = await Book.findOneAndDelete({ id: req.params.id })
//         res.send(books)
//     } catch (err) {
//         res.status(500).send('Error')
//     }
// })


// const port = process.env.PORT || 3000
// app.listen(port, () => console.log(`Server Started at http://localhost${port}`))