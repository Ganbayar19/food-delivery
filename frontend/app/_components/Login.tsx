"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import{email, z} from "zod"

const loginSchema = z.object({
   email: z.string().email()
})

export default function LoginFrom() {
    return (
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex items-center justify-center">
          <div className="w-screen border border-border p-6 rounded-lg ">
            <h1 className="text-2xl font-semibold mb-1">Log in</h1>
            <p className="text-sm text-muted-foreground mb-6">
              Log in to enjoy your favorite dishes.
            </p>
            <div className="space-y-4">
              <div>
                <Label>Password</Label>
                <Input type="email" placeholder="Enter your email address" />
              </div>
            </div>
            <div className="text-sm text-right text-muted-foreground hover:underline cursor-pointer">
              Forgot password?
            </div>
            <Button className="w-full disabled"></Button>

            <p className="text-sm text-center text-muted-foreground">
              Don’t have an account?{""}
              <span className="text-primary hover:underline cursor-pointer">
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    );
}