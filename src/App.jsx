import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // fruit search filter code 
  // const fruits = [
  //   "Apple",
  //   "Banana",
  //   "Cherry",
  //   "Date",
  //   "Elderberry",
  //   "DragonFruit"
  // ]
  // const [search, setSearch] = useState('');

  // const filtredFruits = fruits.filter((item) => item.name.includes(fruit))

  // function handleChange(e){
  //   setSearch(e.target.value);
  // }

  // const filteredFruits = fruits.filter((fruit) => fruit.toLowerCase().includes(search.toLowerCase()))

  const useDebounce = (text, delay) => {
    const [debounce, setDebounce] = useState(text);
  useEffect(()=> {
    const timer  = setTimeout(()=> {
      setDebounce(text);
    }, delay)
    return () => clearTimeout(timer);

  }, [text, delay])

  return debounce
}

const [text, setText] = useState('');

  const debounceText = useDebounce(text, 1000)

  return (
    <>
       {/* Fruit Search filter code  */}
      {/* <input type="text" onChange={handleChange} />

     {filteredFruits.map((fruit)=> {
      return (
        <div key={fruit}>{fruit}</div>
      )
     })} */}

     <input type="text" placeholder='Enter here...' onChange={(e) => setText(e.target.value)} />

      <p>{debounceText}</p>   

    
    </>
  )
}

export default App
