// 1.  Import area

//  Import DefaultImport from 'some library/location';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main';
import A from '@/components/Reusable/A';

import Image from 'next/image'

//2.   Definition area

 function Home() {
  return (
    <>
       {/* <Header></Header> */}
       <main>
            Home Page
            <A message="Welcome to my Nextjs Application" />
       </main>
       {/* <Footer></Footer> */}

    </>
  )
}

// 3.  Export area
/*
3.1 -> Default Export
3.2 -> 

*/
 export default Home;