import { Hono } from 'hono';

const app = new Hono()

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    // Do validation
    const initTime=new Date();
    await next()
    const totaltime=(new Date().getTime() - initTime.getTime());
    console.log("it took  ${totaltime} seconds");
  } else {
    return c.text("You dont have access");
  }
})

app.get('/', async (c) => {
  const body = await c.req.parseBody()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.json({msg: "as"})
})

export default app
