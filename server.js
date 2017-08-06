var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'Article-One': {
    title: 'Article One | Rahul Saravanan',
    heading: 'Article One',
    date: 'August 8, 2017',
    content: `
           <p>
               This Is The Content for my first article.This Is The Content for my first article.This Is The Content for my first article.This Is The Content for my first article.This Is The Content for my first article.
           </p>
            <p>
               This Is The Content for my first article.This Is The Content for my first article.This Is The Content for my first article.This Is The Content for my first article.This Is The Content for my first article.
           </p>
            <p>
              This Is The Content for my first article.This Is The Content for my first article.This Is The Content for my first article.This Is The Content for my first article.This Is The Content for my first article.
           </p>`
           },
    'Article-Two': {
        title: 'Article Two | Rahul Saravanan',
    heading: 'Article Two',
    date: 'August 15, 2017',
    content: `
           <p>
               This Is The Content for my first article.This Is The Content for my first article.This Is The Content for my first article.This Is The Content for my first article.This Is The Content for my first article.
           </p>`
           },
    'Article-Three': {
        title: 'Article Three | Rahul Saravanan',
    heading: 'Article Three',
    date: 'August 21, 2017',
    content: `
           <p>
               This Is The Content for my Third article.
           </p>`
           },

    };

 function createTemplate (data) {
       var title = data.title;
       var date = data.date;
       var heading = data.heading;
       var content = data.content;
       var htmlTemplate = `
         <html>
         <head>
             <title>
              ${title}
              </title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link href="/ui/style.css" rel="stylesheet" />
               </head>
                 <body>
           <div class="container">
            <div>
               <a href="/">Home</a>
           </div>
           <hr/>
           <h3>
               ${heading}
           </h3>
           <div>
               ${date}
           </div>
           <div>
               S{content}
           </div>
          </div>
         </body>
        </html>                
 `;
 return htmlTemplate;
}         
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/;articleName', function (req, res) {
    //articleName == Article-One
    //Artcles[articleName] == {} content object for Article One
    var articleName = req.params.articleName
   res.send (createTemplate(Articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
