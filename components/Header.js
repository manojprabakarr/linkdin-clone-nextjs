import Image from 'next/image';

import AppsIcon from '@material-ui/icons/Apps';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import WorkIcon from '@material-ui/icons/Work';

function Header() {
 
    return (
       
        
        <div className="sticky flex items-center top-0 z-50 w-full h-auto  bg-white  p-2 lg:px-5 shadow-md ">

        <div className="flex items-center">
         <Image
          src="https://logodix.com/logo/79688.ico"
          width={50}
          height={50}
           layout="fixed"
          className="cursor-pointer"
        />
        
        

       

        <div className="flex ml-2 items-center  rounded-full bg-gray-100 p-2">

            <SearchIcon className="h-6 text-gray-600"/>

            <input className="outline-none hidden flex-shrink  md:inline-flex placeholder-gray-500 ml-2 items-center bg-transparent" type="text" placeholder="search"/>   
        
        </div>

         </div>


        <div className="flex  justify-evenly  flex-grow text-gray-700 ">
         <AppsIcon  className="hover:opacity-50 "/>

         <WorkIcon className="hover:opacity-50 "/>

         <ChatBubbleIcon className="hover:opacity-50 "/>

         <NotificationsIcon className="hover:opacity-50 "/>



        <PersonIcon className="hover:opacity-50 "/>


     <p className="hover:opacity-50 ">upgrade to premium</p>
        
         
         
         </div>
        
            
        </div>
    )
}

export default Header
