import { Button } from "@/components/ui/button";
import {useNavigate} from 'react-router-dom';
import * as React from "react"
import Hello from '../assets/handwave_croped_removebg.png'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
   
const Home = () =>{
    const navigate =useNavigate();
    return(
        <>
        <div className="h-[90vh] flex justify-center items-center">
            <Card className="w-[350px] h-[400px] relative flex flex-col">
                <CardHeader className="border-b-2 border-b-gray-400">
                    <CardTitle className="text-center font-extrabold text-3xl">Welcome</CardTitle>
                </CardHeader>   
                <CardContent className="flex h-[55%] flex-1 flex-col justify-center items-center gap-y-10">
                        <img src={Hello}></img>
                </CardContent>
                <CardFooter className="flex flex-row justify-around">
                    <Button onClick={()=>navigate('/register')} className="text-md">Sign Up</Button>
                    <Button onClick={()=>navigate("/login")} className="text-md">Login</Button>
                </CardFooter>
            </Card>
        </div>
        
        </>
    )
}


export default Home;

{/* <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter> */}