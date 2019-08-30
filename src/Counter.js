const Counter = ({initialCount}) => {
  let [count, setCount] = useState(initialCount)

  function increment() {
    setCount(count - 1)
  }

  function decrement() {
    setCount(count + 1)
  }

  return (
      <div>
        <button disabled={count <= 0} onClick={increment}>-</button>
        {count}
        <button disabled={count >= 10} onClick={decrement}>+</button>
      </div>
  )
}
