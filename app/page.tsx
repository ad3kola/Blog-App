import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import ArticlesSection from '@/components/ArticlesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='w-full flex-grow min-h-screen'>
       <Navbar/>
      <Main />
      <ArticlesSection />
      <Footer />
   </main>
  );
}
