import React from 'react';
import Image from "./components/Image";
import images from "./images.json";

function App() {
  return (
    <div>
      <Image
        image={images[0].image}
      />
       <Image
        image={images[1].image}
      />
       <Image
        image={images[2].image}
      />
       <Image
        image={images[3].image}
      />
    </div>
  );
}

export default App;
