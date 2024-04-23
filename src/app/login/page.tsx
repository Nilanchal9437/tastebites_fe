import type { Metadata } from "next";
import Login from "@/features/login/components";

function LoginPage() {
  return <Login />;
}

export const metadata: Metadata = {
  title: "Tastebites | Login",
  description: "Tastebites Login Page description"
};

export default LoginPage;
