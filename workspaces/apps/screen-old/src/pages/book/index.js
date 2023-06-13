import BookScreen from '@/screens/Book'

const BookPage = (props) => {
  return <BookScreen {...props} />
}

export async function getServerSideProps({ req, res, params }) {
  const search = new URLSearchParams(req.url.replace(/.+\?/, ''))
  const service = search.get('service')
  const salonName = search.get('salon')
  return { props: { salonName, service } }
}

export default BookPage
