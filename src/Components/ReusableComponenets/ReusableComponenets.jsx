export function Button({
  bgColor = "white",
  textColor = "[--gold]",
  width = "40",
  height = "10",
  border = false,
  mt = "7",
  children,
}) {
  return (
    <button
      href="#"
      className={`text-${textColor} bg-${bgColor} font-semibold w-${width} h-${height} ${
        border ? "border border-[--gold]" : ""
      }  mt-${mt} inline-block hover:bg-${textColor} transition-colors duration-300 hover:text-${bgColor}`}
    >
      {children}
    </button>
  );
}
