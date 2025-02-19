import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center  p-5 px-11">
      <div className="">
        <Link
          href="/"
          className="font-bold text-2xl flex justify-center items-center gap-1"
        >
          <Image src="/gopher-main.png" width={34} height={10} alt="gopher" />
          GoBlog
        </Link>
      </div>
      <div>
        <Button className="font-medium text-md">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </header>
  );
};
export default Header;
