import { useAuthState } from 'react-firebase-hooks/auth';

import { Avatar } from '@material-ui/core';

import { auth } from '../firebase';

function Sidebar() {
   const[user]=useAuthState(auth);

    return (

       <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px] mr-10 ">

       <div className="flex p-3 cursor-pointer">

       <Avatar src="https://links.papareact.com/kxk" className="object-contain" style={{width:"100px",height:"100px"}} />

       <div className="mt-6">
        
        <h2>{user.email}</h2>
       
       </div>
       
        </div>
       

       <div className="text-gray-500 leading-10 ml-8  ">


          <div>
           <a href="/">Your Statistics</a>
          </div>
         

          <div>
           <a href="/">2000 Profile views</a>
          </div>

           <div>
           <a href="/">Saved Items</a>
          </div>

           <div>
           <a href="/">Groups</a>
          </div>

           <hr className="bg-gray-500"/>
           <div>
           <a href="/">Hashtags</a>
          </div>

           <div>
           <a href="/">My pages</a>
          </div>
         
         </div>
      
        
       </div>
            )

}

export default Sidebar
