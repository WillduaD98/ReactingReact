import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import CandidateSearch from './pages/CandidateSearch';


export type navStyle = {
  buttons: React.CSSProperties,
  nav: React.CSSProperties,
  marginsPadd: React.CSSProperties,
  //Defining hoverStyle for managing hover in the nav buttons
  hoverStyle: React.CSSProperties
}


const styles: navStyle = {
  buttons: {
    backgroundColor: 'inherit',
    borderRadius: '20px',
    cursor: 'pointer',
    padding: '1rem',
    color: 'white'
  },
    //Value when mouse Event Happens on 'hover'
    hoverStyle: {
      color: 'blue'
    },
  nav: {
    backgroundColor: 'inherit',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'baseline',
    alignItems: '',
    padding: '2rem'
  },
  marginsPadd : {
    margin: '0 auto'
  }

}

function App() {
  return (
    <>
      <Nav styles={styles}/>
      <main>
        <Outlet />
        <CandidateSearch/>
      </main>
    </>
  );
}

export default App;
