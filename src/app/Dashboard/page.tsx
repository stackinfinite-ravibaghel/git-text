"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Category from "../Component/UI/Category/page";
import ProductView from "../Component/UI/ProductView/page";

export default function Dashboard() {
  const searchParams = useSearchParams();

  const email = searchParams.get("mail");
  const password = searchParams.get("pass");

  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  useEffect(() => {
    if (email && password) {
      setUserEmail(email);
      setUserPass(password);
    }
  }, [email, password]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full">
        <Category />

        <div >
          <ProductView />
        </div>

        {/* Welcome to Dashboard {userEmail + " " + userPass} */}
      </div>
    </main>
  );
}
