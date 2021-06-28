import Follow from './Follow';

const Followers = [
  {
    src: "https://links.papareact.com/f0p",
    name: "Jeff Bezos",
  },
  {
    src: "https://links.papareact.com/kxk",
    name: "Elon Musk",
  },
  {
    src: "https://links.papareact.com/zvy",
    name: "Bill Gates",
  },
  {
    src: "https://links.papareact.com/snf",
    name: "Mark",
  },
  {
    src: "https://links.papareact.com/d0c",
    name: "Harry Potter",
  }
  
];

function Widgets() {
  return (
  
     <div className="hidden lg:flex flex-col w-60 p-2 mt-5 rounded-2xl mt-10 bg-white mr-8 h-3/4 ">
      <div className="flex justify-between items-center text-gray-500 mb-5">
          <h2 className="text-xl">Recommended Profiles</h2>
          
      </div>
      {Followers.map(contact => (
          <Follow key={contact.scr} src={contact.src} name={contact.name}/>
      ))}
  </div>
  )
}

export default Widgets;