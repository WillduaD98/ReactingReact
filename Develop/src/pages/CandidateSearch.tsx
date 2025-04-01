import React from 'react';
// import { searchGithub, searchGithubUser } from '../api/API';
// import Nav from '../components/Nav';
import CandidateCard from '../components/candidateCard';

export type Styles = {
  card: React.CSSProperties,
  logoIMG: React.CSSProperties, 
}

const styles: Styles = {
  card:{
    borderRadius: '20px',
    backgroundColor: 'var(--accent-color)',
    border: '3px solid var(--secondary-color)',
    width: '50%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  },
  logoIMG:{
    backgroundRepeat: 'no-repeat',
    // backgroundImage: `url(${mountain})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: '10px 10px 0 0',
    width: '100%',
    height: '300px',
    display: 'flex',
    alignItems: 'flex-end'
  }
}

const CandidateSearch = () => {
  return (
  <>
    <h1>CandidateSearch</h1>
    
    <CandidateCard styles={styles}/>
  </>
  )
  
};

export default CandidateSearch;
