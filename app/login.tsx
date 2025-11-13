"use client"
import {useState} from "react";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";


function login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  async function handleSignIn() {
    const { data, error } = await signIn.email(
      {
        email, // user email address
        password, // user password
      },
      {
        onSuccess: (ctx) => {
          //redirect to the dashboard
          router.push("/home");
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message);
        },
      }
    );
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-sm shadow-xl p-2 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Login</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="Enter your email" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input type="password" placeholder="Enter your password" />
          </div>

          <Button onClick={handleSignIn} className="w-full mt-4 py-2 rounded-xl">Login</Button>

          <Link href={"/signup"} className="text-center text-sm text-gray-600 mt-2">
            Don't have an account? <span className="text-blue-600 cursor-pointer">Sign up</span>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}


export default login;
