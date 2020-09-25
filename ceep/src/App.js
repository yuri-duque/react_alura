import React from 'react';

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..." />

        <button>Criar Nota</button>
      </form>

      <ul>
        <li>
          <section>
            <header>
              <h3>Título</h3>
            </header>
            
            <p>Escreva sua nota</p>
          </section>
        </li>
      </ul>
    </section>
  );
}

export default App;
