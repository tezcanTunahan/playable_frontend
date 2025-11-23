import Logo from "@/components/logo";
import { LoginForm } from "@/features/auth/components/loginForm";

export default function LoginPage() {
  return (
    <div>
      <Logo className="mb-20 block px-2 py-2 text-base sm:text-lg md:px-5 md:text-xl lg:text-2xl" />

      <div className="mx-auto w-11/12 max-w-md">
        <h1 className="mb-8  whitespace-nowrap">Login to your account</h1>
        <LoginForm />
      </div>
    </div>
  );
}
