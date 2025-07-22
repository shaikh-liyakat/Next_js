import { Button } from "@/components/button"
import { NavbarDemo } from "@/components/navbar/navbar"
import { SidebarDemo } from "@/components/sidebar/sidebar"
import Link from "next/link"


function Home() {
  return (
    <>
    <SidebarDemo></SidebarDemo>
   <Link href="./homepage">
    <Button 
    className="bg-slate-600 items-center align-middle justify-center " 
    >
      Dashboard btn 
    </Button>
  </Link>
  

    </>
  )
}

export default Home