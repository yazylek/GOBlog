import React, { createContext, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {}, []);
}
