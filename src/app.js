import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes'

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(routes)

export default app;
