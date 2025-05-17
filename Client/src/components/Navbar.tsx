import type { FC } from 'react'

const Navbar: FC = () => {
  return (
    <header className="flex justify-between items-center py-6 px-10 shadow-md">
      <div className="text-xl font-bold text-blue-600">TicketsCandy</div>
      <nav className="space-x-6 text-sm font-medium">
        <a href="#">Home</a>
        <a href="#">How it Works</a>
        <a href="#">Pricing</a>
        <a href="#">Support</a>
      </nav>
      <div className="space-x-4">
        <button className="text-sm">Log In</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Sign Up</button>
      </div>
    </header>
  )
}

export default Navbar
