import React from 'react'

export default function DependenciesList() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold tracking-tighter">Dependencies</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="py-2 px-4 bg-gray-700 text-white rounded">
          axios@0.25.0
        </div>
        <div className="py-2 px-4 bg-gray-700 text-white rounded">
          blackbox.js@1.0.0
        </div>
        <div className="py-2 px-4 bg-gray-700 text-white rounded">
          react@17.0.2
        </div>
        <div className="py-2 px-4 bg-gray-700 text-white rounded">
          react-dom@17.0.2
        </div>
        <div className="py-2 px-4 bg-gray-700 text-white rounded">
          react-router-dom@6.2.1
        </div>
      </div>
    </div>
  )
}
