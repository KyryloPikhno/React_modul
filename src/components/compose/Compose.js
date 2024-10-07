import { compose } from "lodash/fp"

const Compose = () => {
  const add5 = (x) => x + 5
  const multiplyBy3 = (x) => x * 3
  const subtract10 = (x) => x - 10

  const composedFunction = compose(subtract10, subtract10, multiplyBy3, add5)
  const result = composedFunction(7)

  return (
    <div>
      <p>{`result: ${result}`}</p>
    </div>
  )
}

export default Compose
