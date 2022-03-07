import Head from 'next/head';
import Container from '../components/container';
import fetch from 'isomorphic-fetch'
import Users from '../components/Users';

const Index = (props) => {
  // console.log(props)
  return (
    <>
      <Container>
        <Head>
          <title>Next.js Projet - Home</title>
        </Head>
        <h1>Next</h1>
        <Users users={props.users}/>
      </Container>
    </>
  );
};

Index.getInitialProps = async (ctx) =>{
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json();
  return {users: data}
}

export default Index;
