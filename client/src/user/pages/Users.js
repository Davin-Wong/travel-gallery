import UsersList from '../components/UsersList';

const USERS = [
  {
    id: 'u1',
    name: 'Mori Jin',
    image: 'https://i.redd.it/ngqbamsd5fc51.png',
    places: 3,
  },
];

const Users = () => {
  return <UsersList users={USERS} />;
};

export default Users;
