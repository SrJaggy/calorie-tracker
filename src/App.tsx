<<<<<<< HEAD
import { menuItems } from "./data/db"

function App() {

  

  return (
    <>
      <header className=" bg-teal-400 py-5">
          <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
        </header>

        <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
          <div className='p-5'>
            <h2 className='font-black text-4xl'>Menú</h2>
             <div className='mt-10 space-y-3'>

             </div>
          </div>
          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            <p className="text-center">La orden esta vacia</p>
          </div>
        </main>
    </>
  )
}

export default App
=======
import { useReducer } from 'react';
import { Form } from './components/Form';
import { activityReducer, initialState } from './reducers/activity-reducer';


function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            {" "}
            Contador de calorias
          </h1> 

          <button>Reiniciar</button>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form 
            dispatch={dispatch}
          />
        </div>
      </section>
    </>
  );
}

export default App;
>>>>>>> 2efece7c23f8d514e1f72e7781113311f2f48639
