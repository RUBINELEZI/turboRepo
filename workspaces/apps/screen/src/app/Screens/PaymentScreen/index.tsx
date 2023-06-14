import { cn } from 'utils'
import Image from 'next/image'
import TopNav from '../TopNav'
import creditCardIcon from './credit-card-pay.svg'

const PaymentScreen = ({ setScreen, handicapMode, shoppingCart }) => {
  const { totalPrice, emptyCart } = shoppingCart

  const onCancel = () => {
    emptyCart()
    setScreen('home')
  }

  const onPaid = () => setScreen('receipt')

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
            <div className="flex flex-col justify-center gap-16 items-center h-full">
              <h2 className="text-[2.5rem] w-full text-center">
                <div> Total:</div>
                <div>
                  {totalPrice}kr
                  <span className="block text-[1rem] text-gray-400">including taxes</span>
                </div>
              </h2>
              <div className="w-full flex flex-col items-center gap-2">
                <Image src={creditCardIcon} width={128} alt="credit-card" />
              </div>
              <div className="w-full mt-10 flex flex-col px-36 items-center gap-2">
                <button
                  onClick={onPaid}
                  className="bg-[#FB2062] w-full p-4 text-3xl text-white rounded-2xl"
                >
                  Pay now
                </button>
                <button onClick={onCancel} className="text-3xl mt-5">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentScreen
