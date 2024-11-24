import Tratamientos from "./features/Tratamientos/Tratamientos";
import "./App.css"
import FAQ from "./features/FAQ/faq";
import Glosario from "./features/Glosario/glosario";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-blue-500 text-white text-center p-4 rounded">
        Si esto es azul con texto blanco, Tailwind está funcionando.
      </div>
      
      <Tratamientos />  
      <Glosario />
      <FAQ />
    </div>
  );
};

export default App;