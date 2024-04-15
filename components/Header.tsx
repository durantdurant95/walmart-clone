import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  // const router = useRouter();
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const input = e.currentTarget.input.value;
  //   router.push(`/search?q=${input}`);
  // };
  return (
    <header className="flex flex-col lg:flex-row bg-walmart p-10 space-x-5 items-center">
      <Link href="/" className="mb-5 lg:mb-0">
        <Image
          src="/walmart-logo.png"
          alt="Walmart Logo"
          width={150}
          height={150}
        />
      </Link>
      <form
        className="flex items-center bg-white rounded-full grow w-full "
        // onSubmit={handleSubmit}
        action={`/search`}
      >
        <input
          type="text"
          name="q"
          placeholder="Search everything..."
          className="grow px-4 text-black rounded-l-full outline-none placeholder:text-sm"
        />
        <button type="submit">
          <Search className="rounded-full px-2 w-10 bg-yellow-400 cursor-pointer h-10" />
        </button>
      </form>
      <div className="flex mt-5 lg:mt-0 gap-5">
        <Link
          href="/"
          className="hidden lg:flex items-center space-x-2 text-white font-bold"
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>
        <Link
          href="/"
          className="hidden lg:flex items-center space-x-2 text-white font-bold"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link
          href="/"
          className="flex items-center space-x-2 text-white font-bold"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My Items</p>
          </div>
        </Link>
        <Link
          href="/"
          className="flex items-center space-x-2 text-white font-bold"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign In</p>
            <p>Account</p>
          </div>
        </Link>
        <Link
          href="/basket"
          className="flex items-center space-x-2 text-white font-bold"
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">No Items</p>
            <p>$0.00</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
