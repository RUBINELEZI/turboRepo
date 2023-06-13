import Image from 'next/image'
import topLeftWave from './top-left-wave-2x.svg'
import topLeftBlueBrush from './top-left-blue-brush.svg'
import topLeftYellowFlower from './top-left-yellow-flower.svg'
import topRightWave from './top-right-wave.svg'
import bottomRightWave from './bottom-right-wave.svg'
import topLeftRedString from './top-left-red-string.svg'
import topRightBlueBrush from './top-right-blue-brush.svg'
import topRightWhiteLeaf from './top-right-white-leaf.svg'
import middleLeftBlueBrush from './middle-left-blue-brush.svg'
import yellowLeaf from './yellow-leaf.svg'
import bottomLeftWhiteLeaf from './bottom-left-white-leaf.svg'
import bottomRightRedString from './bottom-right-red-string.svg'
import redLime from './red-lime.svg'

const Background = () => {
  return (
    <div className="absolute w-[100vw] h-[100vh]">
      <div className="absolute top-[0px] left-[0px]">
        <Image width={400} src={topLeftWave} alt="top-left-wave" priority />
      </div>
      <div className="absolute top-[0px] left-[0px]">
        <Image width={500} src={topLeftRedString} alt="top-left-red-string" priority />
      </div>
      <div className="absolute top-[87px] left-[200px]">
        <Image width={136} src={topLeftYellowFlower} alt="top-left-yellow-flower" priority />
      </div>
      <div className="absolute top-[10px] left-[0px]">
        <Image width={250} src={topLeftBlueBrush} alt="top-left-blue-brush" priority />
      </div>
      <div className="absolute top-[87px] left-[680px]">
        <Image width={170} src={redLime} alt="top-right-red-lime" priority />
      </div>
      <div className="absolute top-0 right-0">
        <Image width={540} src={topRightWave} alt="top-right-red-wave" priority />
      </div>
      <div className="absolute top-[0] right-[90px]">
        <Image width={340} src={topRightWhiteLeaf} alt="top-right-white-leaf" priority />
      </div>
      <div className="absolute top-[0] right-[0]">
        <Image width={340} src={topRightBlueBrush} alt="top right blue brush" priority />
      </div>
      <div className="absolute bottom-[450px] left-[0]">
        <Image width={170} src={middleLeftBlueBrush} alt="middle-left-blue-brush" priority />
      </div>
      <div className="absolute bottom-[300px] left-[50px]">
        <Image width={130} src={redLime} alt="red lime bottom left" priority />
      </div>
      <div className="absolute bottom-0 left-[0px]">
        <Image width={350} src={bottomLeftWhiteLeaf} alt="yellow leaf" priority />
      </div>
      <div className="absolute bottom-0 left-[150px]">
        <Image width={240} src={yellowLeaf} alt="yellow leaf" priority />
      </div>
      <div className="absolute bottom-0 right-[0]">
        <Image width={700} src={bottomRightWave} alt="bottom-right-yellow-wave" priority />
      </div>
      <div className="absolute bottom-0 right-[0]">
        <Image width={550} src={bottomRightRedString} alt="bottom-right-red-string" priority />
      </div>
      <div className="absolute inset-0 bg-black opacity-0"></div>
    </div>
  )
}

export default Background
