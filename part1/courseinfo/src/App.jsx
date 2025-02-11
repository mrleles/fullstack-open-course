const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (parts) => {
  const part1 = parts['parts'][0]
  const part2 = parts['parts'][1]
  const part3 = parts['parts'][2]
  return (
    <div>
      <Part part={part1['name']} exercises={part1['exercises']} />
      <Part part={part2['name']} exercises={part2['exercises']} />
      <Part part={part3['name']} exercises={part3['exercises']} />

    </div>
  )
}

const Total = (parts) => {
  const part1 = parts['parts'][0]['exercises']
  const part2 = parts['parts'][1]['exercises']
  const part3 = parts['parts'][2]['exercises']
  return (
    <p>Number of exercises {part1 + part2 + part3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

export default App
