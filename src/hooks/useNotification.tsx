import { useState } from 'react'

// Provide duration as argument (seconds)
export const useNotification = (duration: number = 5) => {
  const [text, setText] = useState(null)
  const [notificationVisible, setNotificationVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  const reset = (): void => setText(null)

  const set = (text: string) => {
    if (notificationVisible) {
      clearTimeout(timeoutId)
      setNotificationVisible(false)
      reset()
    }

    setNotificationVisible(true)
    setText(text)

    let id = setTimeout(() => {
      reset()
      
    }, duration * 1000)
    setTimeoutId(id)
  }

  return [text, set]
}