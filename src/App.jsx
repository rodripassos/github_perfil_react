import { useState } from "react";

import Perfil from "./assets/components/Perfil";
import Formulario from "./assets/components/Formulario";
import Reposlist from "./assets/components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <header className="header">
          <h1>Projetos do usuário:</h1> 
          <input type="text" placeholder='Digite o usuário do Github' onBlur={(e) => setNomeUsuario(e.target.value)}/>
          
      </header>
      
      {nomeUsuario.length > 4 && (
        <>
          
          <Perfil nomeUsuario={nomeUsuario} />      
          <Reposlist nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
