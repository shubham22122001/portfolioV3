import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
import Head from 'next/head'; // Import the Head component from Next.js
import { personalData } from "@/utils/data/personal-data";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio of Shubham Bhadra', // Updated title without the image
  description: 'This is the portfolio of Shubham Bhadra. I am a full stack developer and data science enthusiast. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Portfolio of Shubham Bhadra</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> */}
    </html>
  );
};
