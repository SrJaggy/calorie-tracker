import { categories } from "../data/categories";
import { useState} from 'react';
import type { ChangeEvent, FormEvent}  from 'react';
import type { Activity } from "../types";

export const Form = () => {

  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: '',
    calories: 0
  });

  const handleChange = (e:ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    const isNumberField = ["calories", "category"].includes(e.target.id);


    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value
    })
  }

  const isValidActivity = () => {
    const {name, calories} = activity;
    return name.trim().length > 0 && calories > 0;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Enviando")
  }


  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoría:</label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value= {activity.category}
          onChange={handleChange}
          onSubmit = {handleSubmit}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">  
        <label htmlFor="name" className="font-bold">Actividad:</label>
        <input
          id="name"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ejemplo: correr, comer, etc"
          value={activity.name}
          onChange={handleChange}
        /> 
      </div>


      <div className="grid grid-cols-1 gap-3">  
        <label htmlFor="calories" className="font-bold">Calorias:</label>
        <input
          id="calories"
          type="number"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorias: ejem. 300 o 500"
          value={activity.calories}
          onChange={handleChange}
        /> 
      </div>

      <input 
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercse text-white cursos-pointer disabled:opacity-10"
        value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
        disabled={!isValidActivity()}
      />
    </form>
  );
};
