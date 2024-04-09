"use client"
import Image from "next/image";
import {useRouter} from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-red-600">The home page</h1>
      <button 
        onClick={()=> router.push("/contact")} className="border border-1 border-green-600 rounded-md p-4">Contact to Enroll</button>
    </main>
  );
}
