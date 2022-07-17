import Link from 'next/link'
const Navbar = () => {
    return ( 
        <nav>
            <div className ="logo">
                <h1>Marafiki Support Group</h1>
            </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/ddi"><a>DDI</a></Link>
                <Link href="/posts"><a>Posts</a></Link>
                <Link href="/treasurer"><a>Treasurer</a></Link>
                <Link href="/constitution"><a>Constitution</a></Link>
                <Link href="/members"><a>Members</a></Link>
        </nav>
     );
}
 
export default Navbar;