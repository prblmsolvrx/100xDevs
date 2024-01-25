import { } from 'react'
function App() {
  return (
    <>
    {/*using raw css*/}
     <div style={{display:"flex", justifyContent:"center"}}>
       <div style={{backgroundColor:"red"}}>h1</div>
       <div style={{backgroundColor:"green"}}>h1</div>
       <div style={{backgroundColor:"yellow"}}>h1</div>
     </div>
{/*using tailwind*/}
     <div className='flex justify-between'>
       <div  className='bg-red-500'>h1</div>
       <div  className='bg-red-500'>h1</div>
       <div  className='bg-red-500'>h1</div>
     </div>
{/*using tailwind grid*/}
     <div className='grid grid-cols-5'>
       <div className='bg-red-500'>h1</div>
       <div className='bg-yellow-500'>h1</div>
       <div className='bg-green-500'>h1</div>
     </div>

{
/*after : whatever styling will be given wiil
be the default and the rest will be for mobile
version and the mobile first will be written at first*/
}
    <div className='bg-red-500 md:bg-blue-500'>
        Hi There
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3'>{/*1st syntax is mobile first and the second syntax is normal*/}
       <div className='bg-red-500'>hi there</div>
       <div className='bg-yellow-500'>hi there</div>
       <div className='bg-green-500'>hi there</div>
     </div>

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>{/*1st syntax is mobile first and the second syntax is normal*/}
       <div className='bg-red-500'>hi there</div>
       <div className='bg-yellow-500'>hi there</div>
       <div className='bg-green-500'>hi there</div>
       <div className='bg-red-500'>hi there</div>
       <div className='bg-yellow-500'>hi there</div>
       <div className='bg-green-500'>hi there</div>
       <div className='bg-yellow-500'>hi there</div>
       <div className='bg-green-500'>hi there</div>
     </div>
    </>
  )
}

export default App
