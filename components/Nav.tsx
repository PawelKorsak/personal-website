import Link from "next/link";
import Image from 'next/image'

const Nav = () => {
    return (
        <nav className="flex items-center justify-left fixed w-full top-0 p-5 m-0">
            <div className="flex">
                <h1 className="text-2xl font-bold pr-24">Paweł Korsak</h1>
            </div>
            <div className="flex flex-wrap">
                <Link href="/">
                    <p className="p-5">Home</p>
                </Link>
                <Link href="/contact">
                    <p className="p-5">Contact</p>
                </Link>
            </div>
        </nav>
    );
    }

export default Nav;