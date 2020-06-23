import React from 'react';

import Setup from './setup/Setup';
import Forecast from './views/Forecast/Forecast';

export default function App() {
  return (
    <Setup>
      <Forecast />
    </Setup>
  );
}
