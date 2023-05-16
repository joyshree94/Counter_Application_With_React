import Counter from "./components/Counter";
import Starts from "./components/Starts";
import { useState } from "react";
const initialstate=[
    {
        id:1,
        count:0
    },
    {
        id:2,
        count:0
    }
]
export default function App() {
    const [state, setstate] = useState(initialstate);
    const total=()=>{
       return state.reduce((total,counter)=>{
		   return total+counter.count;
	   },0);

    }

    const increment=(id)=>{

        const updatedCounter =state.map((c)=>{
            if(c.id===id){
                return{
                    ...c,
                    count:c.count+1,
                }
		
            }
            
			return {...c};

        });
        setstate(updatedCounter);
    };
    const decreament=(id)=>{

        const updatedCounter = state.map((c)=>{
            if(c.id===id){
                return{
                    ...c,
                    count:c.count-1,
                };
            }
            return{...c};

        });
        setstate(updatedCounter);
    };
    return (
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                {state.map((count)=>(
                  <Counter 
                  key={count.id}
                  id={count.id}
                  increment={increment}
                  decreament={decreament}
                  count={count.count}
                  />
                ))}
                <Starts count={total()}/>

            </div>
        </div>
    );
}
