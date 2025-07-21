//components/Footer.jsx

function Footer() {
  return (
    <footer className="py-6 px-4 bg-gradient-to-r from-black via-gray-800 to-black text-gray-300 text-center border-t border-gray-700">
      <p className="text-sm hover:text-cyan-400 transition-colors duration-300">
        &copy; {new Date().getFullYear()}{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
          Rushi
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;