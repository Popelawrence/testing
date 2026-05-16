import type { ReactNode } from 'react'

type SectionHeadingProps = {
  title: string
  description?: string
  children?: ReactNode
}

export default function SectionHeading({ title, description, children }: SectionHeadingProps) {
  // Section heading with optional descriptive text and extra content
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}
