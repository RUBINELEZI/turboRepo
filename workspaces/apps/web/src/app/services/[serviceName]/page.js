import ServiceScreen from './ServiceScreen'
import apiClient from 'utils/apiClient'

const ServicePage = async ({ params }) => {
  const { serviceName } = params
  const salons = await apiClient.GET('salons')

  return <ServiceScreen salons={salons} service={serviceName} />
}

export default ServicePage
