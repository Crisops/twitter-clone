'use client'

import React from 'react'

interface ErrorBoundaryProps {
    fallback: React.ReactNode
    children: React.ReactNode
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = { hasError: false, error: '' }

  constructor (props: Readonly<ErrorBoundaryProps>) {
    super(props)
    this.state = { hasError: false, error: '' }
  }

  static getDerivedStateFromError (error: Error): { hasError: boolean; error: string } {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.message }
  }

  componentDidCatch (error: Error, info: { componentStack: string }) {
    // Log the error and component stack for debugging purposes
    console.error('ErrorBoundary caught an error:', error)
    console.error('Component stack:', info.componentStack)
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback
    }

    return this.props.children
  }
}
