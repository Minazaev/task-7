import { useState } from "react";


function Heroes() {

  const handleDelete = (index) => {
    setNames([...names.filter((name, index2)  => index2 !== index)])
  }
  


  const [names, setNames] = useState([
    "Шерлок Холмс", 
    "Доктор Ватсон", 
    "Профессор Мориарти",
    "Миссис Хадсон",
    "Ирен Адлер"])

    const names2 = names.map((item, index) => {
      return(
          <ul key={index}>
              <li onClick={() => handleDelete(index)}>{item}</li>
          </ul>
      )
  }   
  )


    return (
      <div>
            {names2}
      </div>
    );
  }
  
  export default Heroes;