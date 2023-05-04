import Link from 'next/link'
import { Main } from '../../components/layouts/Main'
import { ReactNode } from 'react'

export default function PricingPage() {
  return (
    <>
      <h1>Welcome to the Pricing Page</h1>

      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing&nbsp;
        <code className="code">src/pages/pricing/index.js</code>
      </p>
    </>
  )
}

PricingPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <Main>
        {page}
    </Main>
  )
}
