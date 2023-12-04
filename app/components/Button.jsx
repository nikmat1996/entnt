export default ({ children, onClick = () => {}, type = "button" }) => (
  <button onClick={onClick} type={type} className="border-1 rounded-2xl border border-sky-600 p-1 px-5 text-blue-500 transition-all hover:bg-blue-600 hover:text-blue-950 focus:bg-blue-600 focus:text-blue-950 focus:outline-none active:bg-blue-800 active:text-black">
    {children}
  </button>
);
