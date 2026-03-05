import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

export default function App() {
  const [inProgress, setInProgress] = useState(0)
  const [resolved, setResolved] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner inProgress={inProgress} resolved={resolved} />
    </div>
  )
}
