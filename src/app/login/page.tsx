import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { LoginForm } from "@/features/auth/components/loginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <Logo className="mb-20 block px-2 py-2  md:px-5" />

      <div className="flex flex-col gap-12 mx-auto w-11/12 max-w-md">
        <h1 className="whitespace-nowrap">Login to your account</h1>
        <LoginForm />
        <Button className="w-full" variant={"ghost"} asChild>
          <Link href={"/register"}>
            Don&apos;t have an account?
            <b>Register</b>
          </Link>
        </Button>
      </div>
    </div>
  );
}
