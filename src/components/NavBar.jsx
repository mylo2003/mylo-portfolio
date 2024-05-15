export default function NavBar() {
  return (
    <div className="sticky top-0 w-full h-20 flex justify-between items-center text-white">
      <a href="#home" className="lg:static ml-10 lg:ml-0 text-2xl font-bold cursor-pointer transition-all hover:text-purple-400">_mylo</a>
      <nav className="hidden lg:inline-block text-xl">
        <ul className="flex gap-10 *:cursor-pointer *:transition-all">
          <li className="hover:text-gray-400">
            <a href="#about">_about</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#projects">_projects</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#skills">_skills</a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#contact">_contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}