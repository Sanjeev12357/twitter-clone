import Image from "next/image";
import {BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs'
import {BiHash, BiHomeCircle, BiMoney, BiUser} from 'react-icons/bi'
import { SlOptions } from "react-icons/sl"
import { Inter } from "next/font/google";
import React, { useCallback } from "react";
import FeedCard from "@/components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import {useCurrentUser} from "../hooks/user";
import { useQueryClient } from "@tanstack/react-query";
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
  const {user} =useCurrentUser();
   const queryClient=useQueryClient();
  console.log(user);
  const handleLoginWithGoogle=useCallback(async(cred:CredentialResponse)=>{
    const googleToken=cred.credential
    if(!googleToken){
      return toast.error(`google token not found`)
    };
    const {verifyGoogleToken}=await graphqlClient.request(verifyUserGoogleTokenQuery,{token:googleToken});

    toast.success('verified success');
    console.log(verifyGoogleToken);
    if(verifyGoogleToken) window.localStorage.setItem('token',verifyGoogleToken);
     
    await queryClient.invalidateQueries(["curent-user"]);
  },[queryClient])
  return (
    <div >
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 relative  pt-1 ml-28 ">
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
          {
            user &&           <div className=" absolute bottom-5 flex gap-2 bg-slate-800 p-3 rounded-full px-3 py-2 ">
            { user && user.profileImageURL && <Image className="rounded-full" src={user?.profileImageURL} alt="user-image" height={50} width={50} />}
            <h3 className="text-xl">{user?.firstName}</h3>
          </div>
          }


          

         
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border border-gray-600">

              <FeedCard/>
              <FeedCard/>
              <FeedCard/>
              <FeedCard/>
              <FeedCard/>
              <FeedCard/>

        </div>
        <div className="col-span-3 p-5">
          {
            !user && <div className="p-5 bg-slate-700 rounded-lg  ">
            <h1 className="my-2 text-2xl" >New to twitter?</h1>
          <GoogleLogin onSuccess={handleLoginWithGoogle}/>
          </div>
          }
          
        </div>
      </div>
    </div>
  );
}
