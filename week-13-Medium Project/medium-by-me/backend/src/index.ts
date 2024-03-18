import { Hono } from 'hono';
import { bookRouter } from './routes/blog';
import { userRouter } from './routes/user';
// Create the main Hono app
// Create the main Hono app

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
        JWT_SECRET:string
	},
}>();

app.route('/api/v1/user',userRouter)
app.route('/api/v1/book',bookRouter)

export default app

 


app.post('/api/v1/blog', (c) => c.text('POST /'))//create a blog

app.put('/api/v1/blog', (c) => c.text('PUT /'))//update a blog

app.get('/api/v1/blog/:id', (c) => c.text('GET /'))//get a blog

app.get('/api/v1/blog/bulk', (c) => c.text('GET /'))//get a specific blog with an id

