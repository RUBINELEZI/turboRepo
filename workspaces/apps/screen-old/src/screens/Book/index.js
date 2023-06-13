import { Card } from 'ui'
import BookCalendar from './BookCalendar'
import TimeTable from './TimeTable'
import EmployeeSelect from './EmployeeSelect'
import useBooking from './useBooking'

const BookScreen = ({ salonName, service }) => {
  const bookingManager = useBooking(salonName)
  const { employeeManager } = bookingManager

  return (
    <Card title={`Book "${service}" at ${salonName}`}>
      <BookCalendar bookingManager={bookingManager} />
      <EmployeeSelect employeeManager={employeeManager} />
      <TimeTable bookingManager={bookingManager} />
    </Card>
  )
}

export default BookScreen

{
  /* <style>
    .style-0 {
        padding: 0px;
        margin-top: 16px;
        margin-bottom: 0px;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(224, 224, 224);
        border-radius: 4px;
        box-sizing: border-box;
        display: block;
    }

    .style-1 {
        box-sizing: border-box;
        padding: 4px 12px 0px;
    }

    .style-2 {
        align-items: center;
        justify-content: space-between;
        display: flex;
        box-sizing: border-box;
    }

    .style-3 {
        margin-left: 0px;
        margin-right: 0px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        box-sizing: border-box;
        visibility: hidden;
        transform: matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1);
        --size: 44px;
        align-items: center;
        border: 0px none rgb(190, 190, 190);
        color: rgb(190, 190, 190);
        cursor: pointer;
        display: flex;
        height: 44px;
        justify-content: center;
        padding: 0px;
        width: 44px;
    }

    .style-4 {
        box-sizing: border-box;
    }

    .style-5 {
        box-sizing: border-box;
    }

    .style-6 {
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(190, 190, 190);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-7 {
        margin-left: 0px;
        margin-right: 0px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    .style-8 {
        margin-left: 0px;
        margin-right: 0px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        box-sizing: border-box;
        --size: 44px;
        align-items: center;
        border: 0px none rgb(190, 190, 190);
        color: rgb(190, 190, 190);
        cursor: pointer;
        display: flex;
        height: 44px;
        justify-content: center;
        padding: 0px;
        width: 44px;
    }

    .style-9 {
        box-sizing: border-box;
    }

    .style-10 {
        box-sizing: border-box;
    }

    .style-11 {
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(190, 190, 190);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-12 {
        box-sizing: border-box;
        border-bottom: 1px solid rgb(224, 224, 224);
        display: inline-flex;
        overflow-x: auto;
        padding: 0px 4px;
        position: relative;
        scroll-behavior: smooth;
        width: 100%;
    }

    .style-13 {
        box-sizing: border-box;
        display: flex;
        flex: 1 0 0px;
        flex-direction: row;
        justify-content: space-between;
        min-width: 100%;
        overflow-x: hidden;
        padding: 4px;
    }

    .style-14 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-15 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-16 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    .style-17 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        background: rgb(255, 92, 57) none repeat scroll 0% 0% / auto padding-box border-box;
        color: rgb(255, 255, 255);
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-18 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-19 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-20 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-21 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    .style-22 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-23 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-24 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-25 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-26 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        color: rgb(190, 190, 190);
    }

    .style-27 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        color: rgb(190, 190, 190);
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-28 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-29 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-30 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-31 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        color: rgb(190, 190, 190);
    }

    .style-32 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        color: rgb(190, 190, 190);
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-33 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-34 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-35 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-36 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    .style-37 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-38 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-39 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-40 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-41 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    .style-42 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-43 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-44 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-45 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-46 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    .style-47 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-48 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-49 {
        margin-left: 2.32812px;
        box-sizing: border-box;
        display: flex;
        flex: 1 0 0px;
        flex-direction: row;
        justify-content: space-between;
        min-width: 100%;
        overflow-x: hidden;
        padding: 4px;
    }

    .style-50 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-51 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-52 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    .style-53 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-54 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-55 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-56 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-57 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    .style-58 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-59 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-60 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-61 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-62 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        color: rgb(190, 190, 190);
    }

    .style-63 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        color: rgb(190, 190, 190);
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-64 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-65 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-66 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-67 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        color: rgb(190, 190, 190);
    }

    .style-68 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        color: rgb(190, 190, 190);
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-69 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-70 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-71 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-72 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    .style-73 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-74 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-75 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-76 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-77 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    .style-78 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-79 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-80 {
        padding: 4px;
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(112, 112, 112);
        color: rgb(112, 112, 112);
        cursor: pointer;
    }

    .style-81 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-82 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    .style-83 {
        margin-top: 4px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    .style-84 {
        margin-top: 4px;
        margin-bottom: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        border: 0px none rgb(112, 112, 112);
        height: 1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px !important;
        box-sizing: border-box;
    }

    .style-85 {
        box-sizing: border-box;
        background-attachment: local, local, scroll, scroll;
        background-image: linear-gradient(0deg, rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(0deg, rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0)), linear-gradient(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0));
        background-position: 50% 100%, 50% 0%, 50% 100%, 50% 0%;
        background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
        background-size: 100% 20px, 100% 20px, 100% 10px, 100% 10px;
        height: 300px;
        overflow: auto;
    }

    .style-86 {
        box-sizing: border-box;
    }

    .style-87 {
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        align-items: normal;
        list-style: outside none none;
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    .style-88 {
        margin-bottom: 0px;
        margin-top: 0px;
        box-sizing: border-box;
        list-style: outside none none;
        position: relative;
    }

    .style-89 {
        appearance: button;
        text-transform: none;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 18.4px;
        margin: 0px;
        box-sizing: border-box;
        color: rgb(0, 0, 0);
        background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
        border: 0px none rgb(0, 0, 0);
        cursor: pointer;
        padding: 12px;
        width: 100%;
    }

    .style-90 {
        align-items: center;
        justify-content: space-between;
        display: flex;
        box-sizing: border-box;
    }

    .style-91 {
        align-items: center;
        justify-content: flex-start;
        margin-left: 0px;
        margin-right: 0px;
        display: flex;
        box-sizing: border-box;
        color: rgb(0, 0, 0);
    }

    .style-92 {
        margin-left: 0px;
        margin-right: 0px;
        box-sizing: border-box;
        background-color: rgb(0, 0, 0);
        border-radius: 4px;
        height: 4px;
        width: 4px;
    }

    .style-93 {
        margin-left: 4px;
        margin-right: 0px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 700;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    .style-94 {
        margin-left: 0px;
        margin-right: 0px;
        box-sizing: border-box;
    }

    .style-95 {
        font-size: 14px;
        line-height: 20px;
        font-weight: 700;
        font-family: TreatwellSansWeb, Arial, Helvetica, sans-serif;
        margin: 0px;
        box-sizing: border-box;
        color: rgb(112, 112, 112);
    }
</style> */
}
