import { useState } from 'react'
// Taken from Helsinki University - Fullstack course (2019)

export const useField = (
  type: string,
  placeholder: string,
  label: string
) => {
  const [value, setValue] = useState('')

  const onChange = (event: any) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  if (label === '') {
    return {
      attributes: {
        type,
        value,
        onChange,
        placeholder
      },
      reset
    }
  }

  return {
    attributes: {
      type,
      value,
      onChange,
      label,
      placeholder
    },
    reset
  }
}