import Link from 'next/link';

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    < >
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
    <div>
        <Link href="/index1">
            <a style={linkStyle}>Home1</a>
        </Link>
        <Link href="/about1">
            <a style={linkStyle}>About1</a>
        </Link>
    </div>
    <div>
        <Link href="/index2">
            <a style={linkStyle}>Home2</a>
        </Link>
        <Link href="/about2">
            <a style={linkStyle}>About2</a>
        </Link>
    </div>
    </ >
);

export default Header;
