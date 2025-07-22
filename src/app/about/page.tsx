import { Button } from "@/components/button"
import Link from "next/link"
// import Home from "../home/page"



function About() {
  return (
    <>
 <Link href="./homepage">
    <Button 
    className="bg-slate-600 items-center align-middle justify-center " 
    >
      About btn 
    </Button>
  </Link>
  
    </>
  )
}

export default About