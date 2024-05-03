import Pudge from './assets/pudge.jpg'
import { MyProfile } from './components/MyProfile'
import { MyCompetence } from './components/MyCompetence'
import { NeccesaryCompetence } from './components/NeccesaryCompetence'
import './App.css'

function App() {
  const myCompetences = [
    {name: "С#", description: "I have little knowledge of this language" },
    {name: "С++", description: "Minor knowledge of this language"},
    {name: "Web", description: "Knowledge of the markup language and minor knowledge of JavaScript"},
    {name: "Python", description: "Basic level of knowledge"},
  ];

  const nessCompetences = [
    {name: "Typescript"},
    {name: "NodeJs"}, 
    {name: "JavaScript"}, 
    {name: "React"}, 
    {name: "Docker"}, 
    {name: "PostgreeSQL"}, 
    {name: "Testing"}, 
    {name: "Git"}, 
    {name: "Markup"}, 
    {name: "Teamwork"},     
  ];

  const myCompetence = myCompetences.map(competence => (
    <MyCompetence nameCompetence={competence.name} description={competence.description} />
  ))
 
  const nessCompetence = nessCompetences.map(competence => (
    <NeccesaryCompetence neccCompetence={competence.name}/>
  ))

  return (
    <>
      <MyProfile
        photo = {Pudge}
        FIO = "Кривонос Артём Александрович"
      />
      <h1>My competence</h1>
      <div className='block-my-comp'>
      {myCompetence}
      </div>
      <h2>Competencies that I want to study</h2>
      <div className='block-necc-comp'>
      {nessCompetence}
      </div>
    </>
  )
}

export default App
