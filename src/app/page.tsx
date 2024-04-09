'use client'
import { useRouter } from "next/navigation";

import Navbar from "./components/ui/Navbar";
import Landing from "./components/Landing";
import WhatIs from "./components/WhatIs";
import WhatIncludes from "./components/WhatIncludes";
import Itinerary from "./components/Itinerary";
import PracticalInfo from "./components/PracticalInfo";
import Tickets from "./components/Tickets";

export default function Home() {
  const router = useRouter()
  // const { locale, locales, defaultLocale } = router;
  // console.log("AAAA ", locale, locales, defaultLocale)  
  return (
    <main>
      <div className="bg-secondary hidden"></div>
      <Navbar />
      <Landing />  
      <WhatIs /> 
      <WhatIncludes />
      <Itinerary />
      <div className="bg-practical-info ">
        <PracticalInfo />
        <Tickets />
      </div>
    </main>
  );
}
