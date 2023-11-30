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
import { Button } from "@/components/ui/button"

import { useNavigate } from "react-router-dom";

export  function Register() {
    const navigate = useNavigate();

    return (
        <>
        <section className="h-[85vh] flex justify-center items-center">
                <Card className="w-[350px]">
            <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Welcome newbie ! </CardDescription>
            </CardHeader>
            <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" type="text" />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter Your Email" type="email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="Enter Your password" type="password" />
                </div>
                </div>
            </form>
            <div className="p-3 flex gap-x-10 justify-around">
                    <h6 className="font-thin">Already Have An Account ?</h6> 
                    <button onClick={()=>navigate('/login')} className="font-bold">Login</button>
            </div>
            </CardContent>
            <CardFooter className="flex justify-center">
            <Button>Sign Up</Button>
            </CardFooter>
        </Card>
        </section>
      </>
    )
}