import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 p-4'>
      <div className='w-full max-w-2xl'>
        <h1 className='mb-12 text-center text-5xl font-bold text-gray-800'>
          Weather Assistant
        </h1>
        {children}
      </div>
    </div>
  )
}
