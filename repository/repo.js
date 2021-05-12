// Add packages
require("dotenv").config();
// Add database package and connection string
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});


const insertBooks = async (books) => {
    // Will accept either a product array or product object
    if (books instanceof Array) {
        params = books;
    } else {
        params = Object.values(books);
    };

    let numFailed = 0;
    let numInserted = 0;
    let errorMessage = "";
    
    const sql = "INSERT INTO book (book_id, title, total_pages, rating, isbn, published_date) VALUES ($1,$2,$3,$4,$5,$6)"

    for (book of books) {
        params = book.split(",");

        let params2 = [] 

        params2.push(params[0],params[1],params[2],params[3],params[4]=="Null" ? null : params[4], params[5]=="Null" ? null : params[5])
       // console.log(params2)
        await pool.query(sql, params2)
            .then(res => {
                    numInserted++;
            })
            .catch(err => {
                numFailed++;
                errorMessage += "Book ID: " + params[0] + " - " + err + '\n'
            });
    };
    total = Number(numInserted) + Number(numFailed)
    message = "Records Processed: " + total + '\n' + 
    "Records Inserted Successfully: " + numInserted + '\n' +   
    "Records Not Inserted: " + numFailed + '\n' +  '\n' +  
    //"Resulting number of books in database: " + numFailed + '\n' +  '\n' +  
    "Errors: " + '\n' +  errorMessage
    
    return message;

};

// Add this at the bottom
module.exports.insertBooks = insertBooks;