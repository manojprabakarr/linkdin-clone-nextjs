import { Avatar } from '@material-ui/core';

function Sidebar() {
    return (

       <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">

       <div className="flex p-3 cursor-pointer">

       <Avatar src="https://logodix.com/logo/79688.ico" className="object-contain" style={{width:"100px",height:"100px"}} />

       <div className="mt-6">
        
        <h2>manoj prabakar</h2>
        <h3 className="text-gray-500">@gmail.xom</h3>
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
