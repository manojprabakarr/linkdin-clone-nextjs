import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

import InputOption from './InputOption';
import Postdata from './Postdata';

const posters = [
  {
    src: "https://links.papareact.com/f0p",
    name: "Jeff Bezos",
    role:"@f"
  },
  {
    src: "https://links.papareact.com/kxk",
    name: "Elon Musk",
    role:"Founder Tesla"
  },
  {
    src: "https://links.papareact.com/zvy",
    name: "bill gates",
    role:"businessman"
  },
  {
    src: "https://links.papareact.com/snf",
    name: "Mark",
    role:"fb"
  },
  {
    src: "https://links.papareact.com/d0c",
    name: "Harry Potter",
    role:"actor"
  }
  
];


function Posts() {
    return (

        <div  className="flex flex-col flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40  overflow-x-hidden scrollbar-hide " >
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
      
        {posters.map(contact => (
          <Postdata key={contact.id} src={contact.src} name={contact.name} developer={contact.role}/>
      ))}
      
       
       </div>
        </div>
    )
}

export default Posts