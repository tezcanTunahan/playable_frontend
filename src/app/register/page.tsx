import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { RegisterForm } from "@/features/auth/components/registerForm";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Logo className="mb-20 block px-2 py-2 text-base sm:text-lg md:px-5 md:text-xl lg:text-2xl" />

      <div className="flex flex-col gap-12 mx-auto w-11/12 max-w-md">
        <h1 className="whitespace-nowrap">Lets create new account</h1>
        <RegisterForm />
        <Button className="w-full" variant={"ghost"} asChild>
          <Link href={"/login"}>
            already have an account ?<b>Login</b>
          </Link>
        </Button>
      </div>
    </div>
  );
}
