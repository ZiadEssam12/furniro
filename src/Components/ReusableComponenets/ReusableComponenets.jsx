export function Button({
  bgColor = "white",
  textColor = "[--gold]",
  px = "px-10",
  py = "py-2",
  border = false,
  mt = "mt-7",
  children,
}) {
  return (
    <button
      href="#"
      className={`text-${textColor} bg-${bgColor} font-semibold ${px} ${py} ${mt} inline-block hover:bg-${textColor} transition-colors duration-300 hover:text-${bgColor} ${
        border ? "border border-[--gold]" : ""
      }`}
    >
      {children}
    </button>
  );
}
