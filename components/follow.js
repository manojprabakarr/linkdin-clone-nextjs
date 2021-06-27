import { Avatar } from '@material-ui/core';

function follow() {
    return (
        <div className=" sticky ml-8 h-auto w-full" style={{flex:"0.2"}}>
        <div className="flex flex-col  bg-white border rounded-3xl h-auto p-8"  >
        <h2 className="text-gray-500">Recommended Profiles</h2>
        
       
        <div className="flex mt-4">
        <Avatar src="https://image.freepik.com/free-vector/web-developer-design_24911-42694.jpg"/>
        <div className="leading-6 ml-4">
        <h1>prabakar</h1>
        <h3 className="text-gray-500">data Analyst</h3>
        </div>
        
        </div>


        <div className="flex mt-4">
        <Avatar src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/01/20133422/software-developer-coding-500x333.jpg"/> 
        <div  className="leading-6 ml-4">
         <h1>sandeep</h1>
        <h3 className="text-gray-500">Php developer</h3>
        
        </div>
        </div>


        <div className="flex mt-4">
        <Avatar src="https://www.techrepublic.com/a/hub/i/r/2018/07/09/1aba83d0-c289-4a6b-bfef-3dcc38dcf509/resize/1200x/c166876c2a82cd9a482cac6e20f9b60f/istock-849858410-1.jpg"/>
        <div  className="leading-6 ml-4">
         <h1>sivaganesh</h1>
        <h3 className="text-gray-500">fullstack</h3>
        
        </div>
        </div>

       

       <div className="flex mt-4">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ao2OJAUjHTOcxDQAeXte6VRhqjkNl_w3xQ&usqp=CAU"/>
        <div  className="leading-6 ml-4">
         <h1>Karthi</h1>
        <h3 className="text-gray-500">Ux and UI designer</h3>
        
        </div>
        </div>


       </div>
       </div>
        
    )
}

export default follow
