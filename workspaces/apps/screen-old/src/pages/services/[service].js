import { Salon } from 'db'
import ServicesScreen from '@/screens/Services'

const ServicePage = (props) => {
  return <ServicesScreen {...props} />
}

export default ServicePage

export async function getServerSideProps({ params }) {
  const salons = await Salon.find({}, { createdAt: 0, updatedAt: 0 }).lean()

  return {
    props: {
      service: params.service,
      salons: salons.map((s) => ({ ...s, _id: s._id.toString() })),
    },
  }
}
