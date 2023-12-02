/* eslint-disable no-unused-vars */
import { memo } from 'react';

const Home = memo((props) => {
  console.log(`token = ${localStorage.getItem('token')}`);
  return <div>Home page!</div>;
});

export default Home;
