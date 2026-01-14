import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href='/' className="logo">
                    <Image src="/logo.png" alt="logo" width={24} height={24} />

                    <p>Candidater</p>
                </Link>

                <ul>
                    <Link href="/" className="hover:text-yellow-400">Home</Link>
                    <Link href="/dashboard" className="hover:text-yellow-400">Dashboard</Link>
                    <Link href="/add-candidate" className="hover:text-yellow-400">Add Form</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar