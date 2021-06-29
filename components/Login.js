import Image from 'next/image';
import Link from 'next/link';

import {
  auth,
  provider,
} from '../firebase';

function Login() {
    
 const signIn = () => {
		auth.signInWithPopup(provider).catch(alert);
	};
    


  

 
  

    return (

        <div className="grid place-items-center  py-16">
        

        <Image className="object-contain " src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" width={100} height={100}/>

        <div className="border-2  border-grey-500 divide-opacity-25 p-8 ">

        <h1 className="text-2xl font-semibold">Signin</h1>
        <h3>Stay updated on your professional world</h3>
        
        <div   className="flex flex-col mt-8 ">

       

        <button type="submit" onClick={signIn} className="border  rounded-full w-full h-14 bg-blue-500 bg-opacity-100 text-white text-lg hover:border-blue-600 mb-6   ">Signin</button>


           

        </div> 


        

        
        <p className="ml-10">new to Linkedin? 
        
        <span><Link  href="/register"> 
        <button className="hover:border rounded-full  bg-blue-200  hover:underline">Register</button></Link>
        </span></p>
        
      


        </div>


            
        </div>
    )
}

export default Login
