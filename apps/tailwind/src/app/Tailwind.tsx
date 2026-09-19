import React from 'react'
// Make sure Tailwind CSS is imported in your main entry file (e.g., index.tsx or App.tsx)
// import './index.css'

function Tailwind() {
  return (
    <div>
      <div className="bg-blue-900 text-white flex">Very dark blue</div>
      <p className="text-blue-600">The quick brown fox...</p>

      
      <section className="primary text-red-200 m-12 flex items-center justify-center bg-black text-center text-3xl">
        Hello world!
        lerem ipsum dolor sit amet consectetur adipisicing elit.
        lerem ipsum dolor sit amet consectetur adipisicing elit.
        lerem ipsum dolor sit amet consectetur adipisicing elit.
        lerem ipsum dolor sit amet consectetur adipisicing elit.
        lerem ipsum dolor sit amet consectetur adipisicing elit.
        lerem ipsum dolor sit amet consectetur adipisicing elit.
      </section>
      <div className="card">Card</div>
    </div>
  )
}

export default Tailwind
