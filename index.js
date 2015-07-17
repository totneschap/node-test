var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 6001));
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  console.log('Fan face');
  response.send('Hello Fan Face');
});

app.get('/projects', (request, response) => {
  console.log('TODO - put projects here');

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


