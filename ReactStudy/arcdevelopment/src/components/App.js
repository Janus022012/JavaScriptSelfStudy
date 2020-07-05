import React from 'react';
import {Header} from "./ui/Header";

export let App = () => {
  return (
    <div className="App">
      <Header />
        {[...new Array(1200)]
            .map(() => "あいうえおかきくけこさしすせそ", )
            .join('\n')
        }
    </div>
  );
}

export default App;
