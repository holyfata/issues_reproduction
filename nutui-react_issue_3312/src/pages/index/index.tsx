import { Button, Notify } from '@nutui/nutui-react'

const Demo4 = () => {
  const show1 = () => {
    Notify.text('123', { duration: 5000 })
    setTimeout(() => {
      Notify.hide()
    }, 100)
  }

  const show2 = async () => {
    await Notify.text('123', { duration: 5000 })
    Notify.hide()
  }

  const show3 = async () => {
    Notify.text('123', { duration: 5000 })
    Notify.hide()
  }

  return (
    <>
      <Button onClick={show1}>show1</Button>
      <Button onClick={show2}>show2</Button>
      <Button onClick={show3}>show3</Button>
    </>
  )
}
export default Demo4
