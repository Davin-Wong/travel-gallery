import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Bruce Lee Statue',
    description: 'A statue to commemorate Bruce Lee',
    imageUrl: 'https://bkpk.me/wp-content/uploads/2013/02/DSC_0800.jpg',
    address: 'Avenue of Stars, Tsim Sha Tsui, Hong Kong',
    location: {
      lat: 22.2956042,
      lng: 114.1742375,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Bruce Lee Statue',
    description: 'A statue to commemorate Bruce Lee',
    imageUrl: 'https://bkpk.me/wp-content/uploads/2013/02/DSC_0800.jpg',
    address: 'Avenue of Stars, Tsim Sha Tsui, Hong Kong',
    location: {
      lat: 22.2956042,
      lng: 114.1742375,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList places={loadedPlaces} />;
};

export default UserPlaces;
