import Link from 'next/link'
import { Main } from '../components/layouts/Main'


export default function HomePage() {
  return (
    <Main>
      <h1>Welcome to the Home Page</h1>

      <h1 className="title">
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className="description">
        Get started by editing&nbsp;
        <code className="code">src/pages/index.js</code>
      </p>
    </Main>
  )
}
