import { useState } from 'react';

import Image from 'next/image';

import { auth } from '../firebase';

function Login() {
    
  const [email, setemail] = useState("");
  const [password,setpassword]=useState("");


  const handleLogin=e=> {
       e.preventDefault();
       auth. signInWithEmailAndPassword(email,password).catch(alert);}
    


  const handleRegister=e=> {
      e.preventDefault();
       auth.createUserWithEmailAndPassword(email,password).catch(alert);
     

  }

 
  

    return (

        <div className="grid place-items-center  py-16">

        <Image className="object-contain " src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" width={100} height={100}/>

        <div className="border-2  border-grey-500 divide-opacity-25 p-8 ">

        <h1 className="text-2xl font-semibold">Signin</h1>
        <h3>Stay updated on your professional world</h3>
        
        <form   className="flex flex-col mt-8 ">

        <input className=" border rounded w-full h-14  border-black mb-10 hover:border-blue-500" type="text" value={email}   onChange={(e) => setemail(e.target.value)} placeholder="email"/>

        <input className="border rounded w-full h-14 border-black hover:border-blue-500 mb-8" type="password" value={password}  onChange={(e) => setpassword(e.target.value)} placeholder="password"/> 


        <button type="submit" onClick={handleLogin} className="border  rounded-full w-full h-14 bg-blue-500 bg-opacity-100 text-white text-lg hover:border-blue-600 mb-6   ">Signin</button>


           

        </form> 


        

        
        <p className="ml-10">new to Linkedin? 
        <span>
        <button onClick={handleRegister} className="hover:border rounded-full  bg-blue-200  hover:underline">Register</button>
        </span></p>
        
      


        </div>


            
        </div>
    )
}

export default Login
