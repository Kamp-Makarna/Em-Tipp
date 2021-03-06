import React from 'react'
import { Link } from 'react-router-dom'

import PageLayout from '../../../components/_layouts/PageLayout'
import Heading from '../../../components/_typography/Heading'

export default function NotFound() {
  return (
    <PageLayout>
      <Heading text="404" />

      <p>Den här sidan kunde inte hittas.</p>

      <p>
        <Link to="/">Gå tillbaka till startsidan</Link>
      </p>
    </PageLayout>
  )
}
