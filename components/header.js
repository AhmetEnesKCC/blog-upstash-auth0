import Link from 'next/link'

function Header() {
  return (
    <header className="site-container py-6">
      <nav className="space-x-4">
        <Link href="/">
          <a>Hakkinda</a>
        </Link>
        <Link href="/blog">
          <a>Yazilar</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
