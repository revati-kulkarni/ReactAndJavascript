import { useState, useEffect } from "react";
export default function ColorChange() {
  const [Bgcolor, setColor] = useState("#FFFFFF");
  const getRandomColor = function () {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  useEffect(() => {
    document.body.style.background = Bgcolor;
  }, [Bgcolor]);

  const handleChangeColor = () => {
    const newColor = getRandomColor();
    setColor(newColor);
  };
  return (
    <div style={{ backgroundColor: Bgcolor }} className="Color">
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}
