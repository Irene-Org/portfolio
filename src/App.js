import { useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import 
{
  light,
  dark,
  GlobalStyles,
  navList
}
  from './utils';

import { useDarkMode } from "./hooks";

import 
{
  NavLarge,
  NavMobile,
  CircleMenu,
  SocialBtns,
  DeviceLoaders
} from "./components";

const styles =
{
  minHeight: "100vh",
  padding: "20px",
  textAlign: "center",
  borderBottom: "2px solid red",
  display: "flex",
  flexDirection: "column",

};


function App () 
{
  const [ theme, themeToggler ] = useDarkMode();
  const [ loaded, setLoaded ] = useState( false );

  const themeMode = theme === 'light' ? light : dark;

  useEffect( () =>
  {
    const timer = setTimeout( () =>
    {
      setLoaded( true );
    }, 6000 );

    return () => clearTimeout( timer );
  }, [] );


  useEffect( () =>
  {
    window.addEventListener( "storage", themeToggler );

    return () => window.removeEventListener( "storage", themeToggler );

  }, [ themeToggler ] );

  if ( !loaded )
  {
    return <DeviceLoaders />;
  }

  return (
    <ThemeProvider theme={ themeMode }>
      <>
        <GlobalStyles />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <NavLarge
          mode={ theme }
          toggleTheme={ themeToggler } />

        <NavMobile
          mode={ theme }
          toggleTheme={ themeToggler } />

        <CircleMenu />

        <SocialBtns />


        {
          navList.map( h =>
            (

              <div style={ styles } id={ h } key={ h } >

                <h1>{ h.toLocaleUpperCase() }</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt, aperiam sequi voluptatum eius voluptatem doloremque eum ratione commodi rerum, officia iusto. Tempora architecto earum temporibus sequi quas magni? Sit.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt, aperiam sequi voluptatum eius voluptatem doloremque eum ratione commodi rerum, officia iusto. Tempora architecto earum temporibus sequi quas magni? Sit.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt, aperiam sequi voluptatum eius voluptatem doloremque eum ratione commodi rerum, officia iusto. Tempora architecto earum temporibus sequi quas magni? Sit.</p>





              </div>

            ) )
        }

      </>
    </ThemeProvider>

  );
}

export default App;
