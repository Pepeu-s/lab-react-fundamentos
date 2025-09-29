import{ useState, useEffect } from 'react';

function ContadorComTitulo() {
  const [contador, setContador] = useState(0);


  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]); 

  return (
    <div style={{ textAlign: 'left', marginTop: '50px' }}>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)} style={{ marginLeft: '10px' }}>Decrementar</button>
    </div>
  );
}

export default ContadorComTitulo;
