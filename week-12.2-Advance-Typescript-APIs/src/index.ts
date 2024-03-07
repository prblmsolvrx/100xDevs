/*
Pick
Pick allows you to create a new type by selecting a set
of properties (Keys) from an existing type (Type).
Imagine you have a User model with several properties,
but for a user profile display, you only need a subset
of these properties.
*/
interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  }
  
  // For a profile display, only pick `name` and `email`
  type UserProfile = Pick<User, 'name' | 'email'>;
  
  const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  };


/*
Readonly
When you have a configuration object that should
not be altered after initialization, making it Readonly 
ensures its properties cannot be changed.
*/

interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

/*Record
  Record let’s you give a cleaner type to objects
  You can type objects like follows - */

  //ugly syntax
  interface User {
    id: string;
    name: string;
  }
  type Users = { [key: string]: User };
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };

  //or use Record a cleaner syntax
  interface User {
    id: string;
    name: string;
  }
  
  type Users = Record<string, User>;
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

/*Map maps gives you an even fancier way to deal with objects.
Very similar to Maps in C++*/

interface User {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

/*Exclude
In a function that can accept several types of inputs but you want to
exclude specific types from being passed to it.*/
type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'
const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};
handleEvent('click'); // OK

/*
Type inference in zod
When using zod, we’re done runtime validation. 
For example, the following code makes sure that the
user is sending the right inputs to update their profile information
*/
import express from "express";
import { z } from 'zod';

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),//message is error message
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);

{"https://zod.dev/?id=type-inference"}