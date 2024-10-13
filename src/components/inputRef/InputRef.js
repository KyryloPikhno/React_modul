import { forwardRef, useEffect, useRef, useState } from "react"

const WrapperInputRef = () => {
  const [inputValue, setInputValue] = useState("")
  const previousInputValue = useRef("")

  useEffect(() => {
    previousInputValue.current = inputValue
  }, [inputValue])

  return (
    <Input
      onChange={(e) => setInputValue(e.target.value)}
      previousValue={previousInputValue.current}
      ref={previousInputValue}
      value={inputValue}
    />
  )
}

const Input = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col gap-4">
      <input
        className="border-[2px] border-[#000000] rounded-[4px]"
        onChange={props.onChange}
        ref={ref}
        type="text"
        value={props.value}
      />
      <h2>Current value: {props.value ? props.value : "~"}</h2>
      <h2>Previous value: {props.previousValue ? props.previousValue : "~"}</h2>
    </div>
  )
})

export default WrapperInputRef
