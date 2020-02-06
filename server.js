
const express  = require('express');
const app = express();
var cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors())

const Grammarbot = require('grammarbot');
const bot = new Grammarbot({
  'api_key' : 'KS9C5N3Y'
})

app.post('/geterror', (req, res) => {
	const {text} = req.body;
	bot.check(text, function(error, result) {
   		res.json(result);
});
})

app.listen(5000);