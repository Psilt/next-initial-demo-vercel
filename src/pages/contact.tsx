import Link from 'next/link'
import { Main } from '../components/layouts/Main'

export default function ContactPage() {
  return (
    <Main>
      <h1>Welcome to the Contact Page</h1>

      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing&nbsp;
        <code className="code">src/pages/contact.js</code>
      </p>
    </Main>
  )
}
