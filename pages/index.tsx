import Image from "next/image";
import {BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs'
import {BiHash, BiHomeCircle, BiMoney, BiUser} from 'react-icons/bi'
import { SlOptions } from "react-icons/sl"
import { Inter } from "next/font/google";
import React from "react";
import FeedCard from "@/components/FeedCard";
const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton{
  title:string;
  icon:React.ReactNode;
}
const SidebarMenuItems:TwitterSidebarButton[]=[
  {
    title:'Home',
    icon:<BiHomeCircle/>
  },
  {
    title:'Explore',
    icon:<BiHash/>
  },
  {
    title:'Notifications',
    icon:<BsBell/>
  },
  {
    title:'Messages',
    icon:<BsEnvelope/>
  },
  {
    title:'Bookmarks',
    icon:<BsBookmark/>
  },
  {
    title:'twitter blu',
    icon:<BiMoney/>
  },
  {
    title:"More options",
    icon:<SlOptions/>
  },
  {
    title:'Profile',
    icon:<BiUser/>
  },
 
]
export default function Home() {
  return (
    <div >
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3  pt-1 ml-28 ">
          <div className="text-2xl w-fit h-fit hover:bg-gray-600  rounded-full p-2 cursor-pointer transition-all ">
          <BsTwitter className=""/>
          </div>
          <div className="mt-1 text-xl  pr-4">
            <ul>
              {
                SidebarMenuItems.map(item=><li className="flex mt-2 justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer " key={item.title}><span className="text-3xl">{item.icon}</span> <span>{item.title}</span></li>)
              }
            </ul>
            <div className="mt-4 px-3">
            <button className="bg-[#1d9bf0] font-semibold text-lg py-2 px-4 rounded-full w-full ">Tweet</button>
            </div>
            
          </div>

         
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border border-gray-600">

              <FeedCard/>
              <FeedCard/>
              <FeedCard/>
              <FeedCard/>
              <FeedCard/>
              <FeedCard/>

        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
