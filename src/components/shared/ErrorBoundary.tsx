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

  static getDerivedStateFromError (error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  componentDidCatch (error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // console.log(error, info.componentStack)
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback
    }

    return this.props.children
  }
}
