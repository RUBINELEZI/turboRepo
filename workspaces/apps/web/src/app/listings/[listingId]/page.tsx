import ListingScreen from "./ListingScreen";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const mockListingData = {
    title: "Awesome Listing",
    images: ["https://gogetdigitalmenu.com/wp-content/uploads/2023/05/frisor-1-bergen-1.jpeg", "https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    locationValue: "123 Main St, Anytown, USA",
    coords: [
      38.70053241527991,
      -9.231863891847322
    ],
    latitude: "38.700532415279910",
    longitude: "-9.231863891847322",
    id: "1",
    category: "hair",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  };




  return (
    <ListingScreen
      listing={mockListingData}
    />
  );
}

export default ListingPage;
