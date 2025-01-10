const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you're {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Marlos'
  const age = 30
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  return (
    <div>
      <h1>Greetings</h1>
      <p>Hello World, it is {now.toString()}</p>
      <p>{a} plus {b} is {a + b} </p>
      <Hello name={name} age={age}/>
      <Hello name='Mary' age={20 + 5} />
    </div>
  )
}

export default App