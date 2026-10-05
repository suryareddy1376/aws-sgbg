"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const cookieStore = await cookies();

  if (email === "admin@kare.edu.in" && password === "admin123") {
    cookieStore.set("session_token", "admin-token", { path: "/", maxAge: 86400 });
    redirect("/admin");
  } else {
    // Default mock user
    cookieStore.set("session_token", "mock-token", { path: "/", maxAge: 86400 });
    redirect("/dashboard");
  }
}