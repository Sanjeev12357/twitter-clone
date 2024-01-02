import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter,Quicksand } from "next/font/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const inter = Inter({ subsets: ["latin"] });

const querClient=new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className={inter.className}>
    <QueryClientProvider client={querClient}>

   
    <GoogleOAuthProvider clientId="17351229008-tc64v5vmqj1cb0516bs791k5f9gsqmm5.apps.googleusercontent.com">
    <Component {...pageProps} />
    <Toaster/>
    <ReactQueryDevtools/>
    </GoogleOAuthProvider>
    
    </QueryClientProvider>
  </div>

  )
  
}
