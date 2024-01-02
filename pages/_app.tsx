import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter,Quicksand } from "next/font/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ["latin"] });


export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className={inter.className}>
    <GoogleOAuthProvider clientId="17351229008-tc64v5vmqj1cb0516bs791k5f9gsqmm5.apps.googleusercontent.com">
    <Component {...pageProps} />
    <Toaster/>
    </GoogleOAuthProvider>
   
  </div>

  )
  
}
