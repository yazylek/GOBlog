"use client";

import { signInSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import api from "@/lib/services/api";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    try {
      const res = await api.post("/authentication/token", values);
      console.log(res.data.data);

      if (res.status === 201) {
        localStorage.setItem("token", res.data.data);
        router.push("/home");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Card className="bg-background text-white w-[30rem] text-xl shadow-xl  shadow-sky-500/60">
      <CardHeader>
        <CardTitle className="text-3xl ">Log in to your account</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-2xl">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-2xl">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <p>
              {`Don't have an account?`}
              <Link className="text-primary" href="/sign-up">
                {" "}
                Sign Up Here
              </Link>
            </p>

            <Button type="submit">Log in</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
export default SignInPage;
