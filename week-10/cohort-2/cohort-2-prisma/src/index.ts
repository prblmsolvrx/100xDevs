import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//insert
async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firstname,
        lastname
    },
    select:{
        id: true,
        password:true,
        firstname: true,
        lastname: true
    }
  })
  console.log(res);
}
insertUser("admin1", "123456", "harkirat", "singh")

//update
interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName
    }
  });
  console.log(res);
}
updateUser("admin1", {
    firstName: "new name",
    lastName: "singh"
})

//getUser function
async function getUser(username: string) {
    const user = await prisma.user.findFirst({
      where: {
          username: username
      }
    })
    console.log(user);
  }
  
  getUser("admin1");