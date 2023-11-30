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

export function Login() {
    const navigate = useNavigate();
    


    return (
        <>  
              <section className="h-[85vh] flex justify-center items-center">
                <Card className="w-[350px]">
                <CardHeader>
                <CardTitle>Login In</CardTitle>
                <CardDescription>Welcome newbie ! </CardDescription>
                </CardHeader>
                <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
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
                </CardContent>
                <div className="p-3 flex gap-x-10 justify-around">
                    <h6 className="font-thin">Don't Have Account ?</h6> 
                    <button onClick={()=>navigate('/register')} className="font-bold">Sign Up</button>
                </div>
            
                <CardFooter className="flex justify-center items-center">
                <Button>Login</Button>
                </CardFooter>
            </Card>
            </section>
        </>
        
      
    )
}