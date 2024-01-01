import Image from "next/image";
import {BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs'
import {BiHash, BiHomeCircle, BiUser} from 'react-icons/bi'
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
    title:'Profile',
    icon:<BiUser/>
  }
]
export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3  pt-8  ">
          <div className="text-4xl w-fit h-fit hover:bg-gray-600  rounded-full p-2 cursor-pointer transition-all ">
          <BsTwitter className=""/>
          </div>
          <div className="mt-4 text-2xl  pr-4">
            <ul>
              {
                SidebarMenuItems.map(item=><li className="flex mt-2 justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer " key={item.title}><span>{item.icon}</span> <span>{item.title}</span></li>)
              }
            </ul>
            <div className="mt-4 px-3">
            <button className="bg-[#1d9bf0] font-semibold text-lg p-4 rounded-full w-full ">Tweet</button>
            </div>
            
          </div>

         
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400">

              <FeedCard/>

        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
