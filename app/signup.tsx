"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {useState} from "react";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

function signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const router = useRouter();
  async function handleSignUp(name: string, email: string, password: string) {
    const { data, error } = await signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
      },
      {
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in pageemail: string, password: string
          alert("Registration successful! Please sign in.");
          router.push("/login");
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
        {/* Simple header replaced CardHeader/CardTitle to avoid prop/context issues */}
        <div className="px-6 pt-6 pb-2 text-center">
          <h2 className="text-2xl font-bold">Sign Up</h2>
        </div>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input type="text" placeholder="Enter your name" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="Enter your email" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input type="password" placeholder="Create a password" />
          </div>

          <Button className="w-full mt-4 py-2 rounded-xl">Create Account</Button>

          <p className="text-center text-sm text-gray-600 mt-2">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 cursor-pointer">Login</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default signup;
