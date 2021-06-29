import Image from 'next/image';

import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

function Postdata({src,name,developer}) {
    return (
        <div  className="bg-white border rounded-3xl h-auto " >
        <div className="ml-10 mr-10">
        <h3 className="mt-10">{name}</h3>
        <h4 className="text-gray-500">{developer}</h4>
       <Image className="object-fit" src={src} width={1000} height={500}/>
             </div>

             <div className="text-gray-400 flex ml-10 justify-evenly mt-2 mb-4 ">
             <FavoriteIcon/>
             <CommentIcon/>
             <ShareIcon/>


             </div>
        </div>
    )
}

export default Postdata