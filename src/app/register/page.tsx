import type { Metadata } from "next";
import Register from "@/features/register/components";

function RegisterPage() {
  return <Register />;
}

export const metadata: Metadata = {
  title: "Tastebites | Register",
  description: "Tastebites Register Page description"
};

export default RegisterPage;
