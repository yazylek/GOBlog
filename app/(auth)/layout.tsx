const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="flex justify-center ">{children}</main>;
};
export default AuthLayout;
