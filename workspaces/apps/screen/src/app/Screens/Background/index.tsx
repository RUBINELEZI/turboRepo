import Image from 'next/image'
import * as svgs from './svgs'

const Background = ({ screen }) => {
  return (
    <div className="absolute w-[100vw] h-[100vh] bg-[#FFCDC9]">
      <div className="absolute top-[0px] left-[0px]">
        <Image width={400} src={svgs.topLeftWave} alt="top-left-wave" priority />
      </div>
      <div className="absolute bottom-0 right-[0]">
        <Image width={700} src={svgs.bottomRightWave} alt="bottom-right-yellow-wave" priority />
      </div>

      {['home'].includes(screen) && (
        <>
          <div className="absolute top-0 right-0">
            <Image width={540} src={svgs.topRightWave} alt="top-right-red-wave" priority />
          </div>
          <div className="absolute top-[0px] left-[0px]">
            <Image width={500} src={svgs.topLeftRedString} alt="top-left-red-string" priority />
          </div>
          <div className="absolute top-[87px] left-[200px]">
            <Image
              width={136}
              src={svgs.topLeftYellowFlower}
              alt="top-left-yellow-flower"
              priority
            />
          </div>
          <div className="absolute top-[10px] left-[0px]">
            <Image width={250} src={svgs.topLeftBlueBrush} alt="top-left-blue-brush" priority />
          </div>
          <div className="absolute top-[87px] left-[680px]">
            <Image width={170} src={svgs.redLime} alt="top-right-red-lime" priority />
          </div>
          <div className="absolute top-[0] right-[90px]">
            <Image width={340} src={svgs.topRightWhiteLeaf} alt="top-right-white-leaf" priority />
          </div>
          <div className="absolute top-[0] right-[0]">
            <Image width={340} src={svgs.topRightBlueBrush} alt="top right blue brush" priority />
          </div>
          <div className="absolute bottom-[450px] left-[0]">
            <Image
              width={170}
              src={svgs.middleLeftBlueBrush}
              alt="middle-left-blue-brush"
              priority
            />
          </div>
          <div className="absolute bottom-[300px] left-[50px]">
            <Image width={130} src={svgs.redLime} alt="red lime bottom left" priority />
          </div>
          <div className="absolute bottom-0 left-[0px]">
            <Image width={350} src={svgs.bottomLeftWhiteLeaf} alt="yellow leaf" priority />
          </div>
          <div className="absolute bottom-0 left-[150px]">
            <Image width={240} src={svgs.yellowLeaf} alt="yellow leaf" priority />
          </div>
          <div className="absolute bottom-0 right-[0]">
            <Image
              width={550}
              src={svgs.bottomRightRedString}
              alt="bottom-right-red-string"
              priority
            />
          </div>
        </>
      )}
      <div className="absolute inset-0 bg-black opacity-0"></div>
    </div>
  )
}

export default Background
