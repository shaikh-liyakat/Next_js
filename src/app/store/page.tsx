import { ThreeDCardDemo } from "@/components/3dcard/cards"
import { Button } from "@/components/button"
import { CardBody, CardContainer } from "@/components/ui/3d-card"
import MyComponent from "@/data/fetchdata"
import Link from "next/link"
import Fetchcard from "@/app/fetch/fetchcard"




function About() {
  return (
   
  <div className=" m-auto w-[30%] align-middle justify-center items-center">
   <Fetchcard/>
  </div>
   

    
  )
}

export default About