import { Button, Notify } from '@nutui/nutui-react'

const Demo4 = () => {
  const show1 = () => {
    Notify.text('123', { duration: 2000 })
    setTimeout(() => {
      Notify.hide()
    }, 100)
  }

  const show2 = () => {
    Notify.text('123', { duration: 2000 })
    Notify.hide()
  }

  return (
    <>
      <Button onClick={show1}>show1</Button>
      <Button onClick={show2}>show2</Button>
    </>
  )
}
export default Demo4
