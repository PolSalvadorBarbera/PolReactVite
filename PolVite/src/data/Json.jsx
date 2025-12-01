import { useState, useEffect } from 'react';
import productsData from './productsData.json';

function JsonLoader() {
  const [items, setItems] = useState([])

  // Using useEffect for single rendering
  useEffect(() => {
    // Carregar dades de forma dinàmca amb un JSON
    setItems(productsData.topProducts);
  }, []);

  return (
    <div className="App">
      {items.map(item => {
        return <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>
      })}
    </div>
  );
}

export default JsonLoader;