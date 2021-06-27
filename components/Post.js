import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

import InputOption from './InputOption';
import PostData from './Postdata';

function Post({posts}) {
    return (

        <div  className="flex flex-col " style={{flex:"0.6"}}>
        <div  className="bg-white border rounded-3xl h-32     " >

        <form className="flex mt-4 ml-14 mr-10 mb-10">

        <input className="border-b-2 outline-none w-full" type="text" placeholder="Start a post"/>  
        <button className="hidden" type="submit">send</button>    
        
        </form>

        <div className="flex space-x-14 mt-14 ml-14 mr-10">
          <InputOption Icon={ImageIcon}  color="#808080 " />
          <InputOption Icon={SubscriptionsIcon}  color="#808080 "  />
          <InputOption Icon={EventNoteIcon}   color="#808080 " />
          <InputOption
            Icon={CalendarViewDayIcon}
            color="#808080 "
           
          />

       </div>

       </div>

       <div className="mt-16 mb-20">
      
       <PostData posts={posts}/>
      
       
       </div>
        </div>
    )
}

export default Post
