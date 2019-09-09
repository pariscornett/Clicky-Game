import React from 'react';
import Image from "./components/Image/Image";
import images from "./images.json";

function App() {
  return (
    <div>
        {
          images.map(image => 
          <Image
            image={image.image}
          />
        )}
    </div>
  );
}

export default App;

