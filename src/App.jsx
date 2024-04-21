import { useState } from 'react';

function App() {
  const [color, setColor] = useState("black");

  const btnColors = ["red", "blue", "yellow", "green", "orange", "tomato", "grey"];

  const btns = btnColors.map((element, index) => {
    return (<button style={{ backgroundColor: element }} className='p-3 rounded-full' key={index} onClick={() => setColor(element)} ></button >);
  });

  return (
    <>
      <div className='w-full h-screen flex justify-center duration-200 ' style={{ backgroundColor: color }}>
        <div className='fixed bottom-6 flex gap-1 bg-white p-2 rounded-xl '>
          {btns}
        </div>
      </div>
    </>
  );
}

export default App;
