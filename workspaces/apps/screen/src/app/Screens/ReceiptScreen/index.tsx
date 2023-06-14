import { cn } from 'utils'
import Image from 'next/image'
import TopNav from '../TopNav'
import qrCodeIcon from './qr-code.svg'

const PaymentScreen = ({ setScreen, handicapMode, shoppingCart }) => {
  const { products, totalPrice, emptyCart, cartItems } = shoppingCart

  const onFinish = () => {
    emptyCart()
    setScreen('home')
  }

  return (
    <section>
      <TopNav
        path={['home', 'products']}
        shoppingCart={shoppingCart}
        handicapMode={handicapMode}
        setScreen={setScreen}
      />
      <div className="p-16 pt-0">
        <div
          className={cn(
            'h-[90vh] overflow-y-auto no-scrollbar p-16 pt-64',
            handicapMode && 'mt-[80%] h-[55vh]'
          )}
        >
          <div className={cn('bg-white aspect-square rounded-3xl', handicapMode && 'scale-75')}>
            <div className="flex flex-col justify-center pt-5 w-full items-center h-full">
              <h2 className="text-[2rem] w-full text-center">Thank you for your payment!</h2>
              <div className="w-full p-16 pb-4 flex flex-col gap-4">
                {products.map(product => (
                  <div
                    className="text-[1.2rem] w-full p-3 h-[3.5rem] border-b-2 grid grid-cols-6"
                    key={product.id}
                  >
                    <div className="col-span-4">{product.name}</div>
                    <div className="text-center">{cartItems[product.id]}</div>
                    <div className="text-right">
                      {cartItems[product.id] * parseInt(product.price, 10)}kr
                    </div>
                  </div>
                ))}
                <div className="text-[1.2rem] w-full p-3 h-[3.5rem] grid grid-cols-6">
                  <div className="col-span-4"></div>
                  <div className="text-center"></div>
                  <div className="text-right">
                    Total:
                    <br />
                    {totalPrice}kr
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center gap-2">
                <Image src={qrCodeIcon} width={96} alt="credit-card" />
                <div className="w-full mt-5 flex flex-col px-36 items-center gap-2">
                  <button
                    onClick={onFinish}
                    className="bg-[#FB2062] w-[50%] p-3 text-lg text-white rounded-xl"
                  >
                    Get receipt in your email
                  </button>
                  <p className="text-center text-gray-400 text-sm mt-2">
                    Contribute to environmental conservation by scanning <br />
                    this code and receiving your receipt by email.
                  </p>
                  <p>OR</p>
                  <button
                    onClick={onFinish}
                    className="text-lg border-2 border-black p-1 px-6 rounded-md"
                  >
                    Print receipt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentScreen
