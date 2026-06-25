import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Varun TM - Cloud & DevOps Engineer',
  description: 'Senior Cloud & DevOps Engineer specializing in AWS infrastructure, CI/CD pipelines, and infrastructure automation. Building reliable, scalable systems.',
  keywords: 'DevOps, Cloud Engineer, AWS, Terraform, Kubernetes, CI/CD, Infrastructure',
  authors: [{ name: 'Varun TM' }],
  creator: 'Varun TM',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://varun-portfolio.dev',
    siteName: 'Varun TM',
    title: 'Varun TM - Cloud & DevOps Engineer',
    description: 'Senior Cloud & DevOps Engineer specializing in AWS infrastructure, CI/CD pipelines, and infrastructure automation.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varun TM - Cloud & DevOps Engineer',
    description: 'Senior Cloud & DevOps Engineer',
    creator: '@varunmanoharan',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-background text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
