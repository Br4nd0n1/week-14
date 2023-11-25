import '../styles/bootstrap.min.css';
//import '../styles/globals.css';
import NavBar from '../components/Navbar'

function leaderApp( { Component, pageProps } ) 
{
  return (
    <>
    <NavBar></NavBar>
    <Component {...pageProps} />
    </>
  );
}

export default leaderApp;
