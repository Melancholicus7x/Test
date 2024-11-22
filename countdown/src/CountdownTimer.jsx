import React, { useEffect, useState } from 'react'

const CountdownTimer = () => {
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [count])

  return (
    <div>
      <p>{count > 0 ? count : 'boom'}</p>
    </div>
  )
}

export default CountdownTimer