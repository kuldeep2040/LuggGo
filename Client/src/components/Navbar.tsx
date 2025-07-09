// import type { FC } from 'react'
// const Navbar: FC = () => {
//   return (
//     <header className="flex bg-blue-100 justify-between items-center py-6 px-10 shadow-md rounded">
//       <a href=""><div className="text-xl font-bold text-blue-600">LugGo</div></a>
//       <nav className="space-x-6 text-sm font-medium">
//         <a href="/">Home</a>
//         <a href="#">How it Works</a>
//         <a href="#">Pricing</a>
//         <a href="about-us">About Us</a>
//       </nav>
//       <div className="space-x-4">
//         <button className="text-sm">Log In</button>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Sign Up</button>
//       </div>
//     </header>
//   )
// }

// export default Navbar


import type { FC } from 'react'
const Navbar: FC = () => {
  return (
    <div className="flex justify-center mt-4 items-center">
    <header className="flex justify-between items-center py-6 px-10 shadow-md rounded-full border border-blue-600 w-[90vw] ">
      <a href=""><div className="text-xl font-bold text-blue-600">LugGo</div></a>
      <nav className="space-x-6 text-sm font-medium">
        <a href="/">Home</a>
        <a href="">How it Works</a>
        <a href="#">Pricing</a>
        <a href="/contact-us">Support</a>
      </nav>
      <div className="space-x-4">
        <a href="/login"><button className="text-sm" >Log In</button></a>
        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Sign Up</button>
      </div>
    </header>
    </div>
  )
}

export default Navbar

