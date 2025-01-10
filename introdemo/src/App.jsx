const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}, you're {props.age} years old</p>
    </>
  )
}

const App = () => {
  const name = 'Marlos'
  const age = 30
  const friends = [
    { name: 'Felipe', age: 4}
  ]
  const friends2 = [ 'Marina', 'Machado']
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
      <p>Hello {friends[0]. name}, you're {friends[0].age} years old</p>
      <p>{friends2}</p>
    </div>
  )
}
export default App