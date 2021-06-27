import { useAuthState } from 'react-firebase-hooks/auth';

import { Avatar } from '@material-ui/core';

import { auth } from '../firebase';

function Sidebar() {
   const [user] = useAuthState(auth);
    return (
        <div className="ml- mr-10"style={{flex:"0.2"}} >
        <div className="flex  items-center">

        <Avatar src="https://www.statuspik.com/wp-content/uploads/2020/12/whatsapp-dp-pic-1.jpg" style={{width:"100px",height:"100px"}}/>
        <div className="flex flex-col">
          <h2 className="font-medium">{user.email}</h2>
          <h4 className="text-gray-500">{user.email}</h4>
          </div>


        </div>
         
         <div className="text-gray-500 leading-10 mt-10 ">

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

           <hr style={{color:"grey"}}/>
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
