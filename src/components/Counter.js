import Count from "./Count"
import Button from "./Button"
export default function Counter({increment,decreament,id,count}) {
    

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
           
            <Count count={count}/> 
            <div className="flex space-x-3">   
                <Button handler={increment} id={id}>increment</Button>
                <Button handler={decreament} id={id}> decrement</Button>
            </div>
        </div>
    );
}
