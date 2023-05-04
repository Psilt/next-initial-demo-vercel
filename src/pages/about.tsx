import Link from 'next/link'
import { Main } from '../components/layouts/Main'
import { Dark } from '../components/layouts/Dark'
import { ReactNode } from 'react'

export default function AboutPage() {
  return (
    <>
      <h1>Welcome to the About Page</h1>

      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing&nbsp;
        <code className="code">src/pages/about.js</code>
      </p>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <Main>
      <Dark>
        {page}
      </Dark>
    </Main>
  )
}
