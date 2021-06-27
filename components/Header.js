import Image from 'next/image';

import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

function Header() {
 
    return (
        <div className="sticky  flex items-center w-full h-16  " style={{backgroundColor:"white"}}>
         
          {/*headerleft*/}
        <div className="flex items-center ml-4 ">  
        <Image className="object-contain " src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png" width={50} height={50} />
         
           <div className=" flex items-center  text-grey p-2 border-b-2 ml-10">
             <SearchIcon style={{color:"grey"}}/>
             <input className="outline-none w-full bg-white bg-none border-0" type="text" placeholder="search"  />
          </div>

        </div> 

       {/*headerright*/}
        <div className= " flex  justify-evenly  flex-grow  " style={{color:"black"}} >

        
        <HomeIcon className="hover:opacity-50 "/>

        <SupervisorAccountIcon className="hover:opacity-50 "/>

        <BusinessCenterIcon className="hover:opacity-50 "/>

        <ChatIcon className="hover:opacity-50 "/>

        <NotificationsIcon className="hover:opacity-50 "/>


        <p className="hover:opacity-50 ">upgrade to premium</p>

        

        


        
        </div>
            
        </div>
    )
}

export default Header
