import React from 'react'
import axios from 'axios';
import Header from "./components/Header/Header";
import VacancyCard from "./components/VacancyCard/VacancyCard";


function App() {
  const [vacancies, setVacancies] = React.useState([])
  React.useEffect(() => {
    axios.get("http://localhost:3004/vacancies")
    .then(res => {
      setVacancies(res.data)
    })
  }, [])
 
  return (
    <div className="App">
      <Header />
      <main>
        {vacancies && vacancies.map((vacancy) => <VacancyCard key={vacancy.id} vacancy={vacancy} />)}
      </main>
    </div>
  );
}

export default App;
