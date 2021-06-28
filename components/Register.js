import Image from 'next/image';

function Register() {
   
   
    return (
         <div className="grid place-items-center  py-16">

        <Image className="object-contain " src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" width={100} height={100}/>

        <div className="border-2  border-grey-500 divide-opacity-25 p-8 ">

        <h1 className="text-2xl font-semibold">SignUP</h1>
        <h3>Stay updated on your professional world</h3>
        
        <form   className="flex flex-col mt-8 ">

        <input className=" border rounded w-full h-14  border-black mb-10 hover:border-blue-500" type="text" placeholder="email"/>

         <input className=" border rounded w-full h-14  border-black mb-10 hover:border-blue-500" type="text" placeholder="username"/>

        <input className=" border rounded w-full h-14  border-black mb-10 hover:border-blue-500" type="text" placeholder="profilepic url"/>


        <input className="border rounded w-full h-14 border-black mb-10 hover:border-blue-500 " type="password"  placeholder="password"/> 


        <button type="submit"  className="border  rounded-full w-full h-14 bg-blue-500 bg-opacity-100 text-white text-lg hover:border-blue-600 mb-6">Register</button>


           

        </form> 


        

        </div>
        


        </div>


    )
}

export default Register
