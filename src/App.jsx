import { useState } from 'react';
import Button from './components/Button';

function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <div
        className="w-full h-screen flex justify-center"
        style={{ backgroundColor: color }}
      >
        hello

        <Button bg={color} />

        {/* <button className='bg-red-500 fixed bottom-5'>
          Button
        </button> */}
      </div>
    </>
  );
}

export default App;
