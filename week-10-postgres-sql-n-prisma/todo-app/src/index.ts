import { PrismaClient } from '@prisma/client/edge';
const prisma = new PrismaClient()

//insert
//Write a function that lets you insert data in the Users  table.
async function insertUser(username:string,password:string,firstName:string,lastName:string){
    const res=await prisma.user.create({
        data:{
            username:username,
            password:password,
            firstName:firstName,
            lastName:lastName
        }
    })
    console.log(res);
}
insertUser('admin','12345678','harkirat','singh')

//Write a function that lets you update data in the Users  table.
interface UpdateParams{
    firstName:string
    lastName:string
}
async function updateUser(username:string,{
    firstName,
    lastName
  }:UpdateParams){
    const res=await prisma.user.update({
        where:{username},
        data:{
            firstName,
            lastName
        }
    });
    console.log(res);
}

updateUser("admin1",{
    firstName:"new name",
    lastName:"new last name"
})

//Write a function that let’s you fetch the details of a user given their email
async function getUser(username: string) {
    const user=await prisma.user.findFirst({
       where:{
         username:username
       }
    })
    console.log(user);
}
getUser("admin1");