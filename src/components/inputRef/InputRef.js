import { useEffect, useRef, useState } from "react"

const InputRef = () => {
  const [inputValue, setInputValue] = useState("")
  const previousInputValue = useRef("")

  useEffect(() => {
    previousInputValue.current = inputValue
  }, [inputValue])

  return (
    <div className="flex flex-col gap-4">
      <input
        className="border-[2px] border-[#000000] rounded-[4px]"
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
      />
      <h2>Current value: {inputValue ? inputValue : "~"}</h2>
      <h2>Previous value: {previousInputValue?.current ? previousInputValue.current : "~"}</h2>
    </div>
  )
}

export default InputRef
