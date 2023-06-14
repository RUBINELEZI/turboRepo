import ListingScreen from "./ListingScreen";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const mockListingData = {
    title: 'Frisør 1 Bergen',
    images: ["https://gogetdigitalmenu.com/wp-content/uploads/2023/05/frisor-1-bergen-1.jpeg", "https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    locationValue: "212, Strandgaten, Nordnes, Skuteviken, Bergenhus, Bergen, Vestland, 5004, Norge",
    coords: [
      38.70053241527991,
      -9.231863891847322
    ],
    latitude: "38.700532415279910",
    longitude: "-9.231863891847322",
    id: "1",
    category: "hair",
    description: "Velkommen til Frisør 1 Bergen. Vil du ha en spesiell, trendy eller tradisjonell frisyre? Vi utfører det meste innen hårmoter, trender og generell hårpleie."
  }

  return (
    <ListingScreen
      listing={mockListingData}
    />
  );
}

export default ListingPage;
