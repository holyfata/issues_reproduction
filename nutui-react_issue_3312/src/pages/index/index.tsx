import { useState } from 'react'
import { ImagePreview, Image } from '@nutui/nutui-react'

const images = [
  {
    src: '//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
    index: 1,
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
    index: 2
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
    index: 3,
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
    index: 5,
  },
]

const videos = [
  {
    source: {
      src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
      type: 'video/mp4',
    },
    options: {
      muted: true,
      controls: true,
    },
    index: 0,
  },
  {
    source: {
      src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
      type: 'video/mp4',
    },
    options: {
      muted: true,
      controls: true,
    },
    index: 4,
  },
]

const Demo4 = () => {
  const [init, setInit] = useState<any>(1)
  const [showPreview, setShowPreview] = useState(false)

  const showImagePreview = (index: number) => {
    setInit(index)
    setShowPreview(true)
  }

  return (
    <>
      <ImagePreview
        visible={showPreview}
        videos={videos}
        images={images}
        autoPlay={0}
        defaultValue={init}
        value={init}
        indicator
        closeIcon
        onChange={(value) => setInit(value)}
        onClose={() => setShowPreview(false)}
      />

      {/* 展示第一张图 */}
      <Image width={50} height={50} src={images[0].src} onClick={() => showImagePreview(1)} />
      {/* 展示第二张图 */}
      <Image width={50} height={50} src={images[1].src} onClick={() => showImagePreview(2)} />
      {/* 展示第三张图 */}
      <Image width={50} height={50} src={images[2].src} onClick={() => showImagePreview(3)} />
      {/* !!展示第三张图 */}
      <Image width={50} height={50} src={images[3].src} onClick={() => showImagePreview(6)} />
    </>
  )
}
export default Demo4
