import React from 'react'
import ReactPlayer from 'react-player/youtube'

const Video = () => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  return (
    <div>

      <h1 style={mystyle}>Uploaded Video</h1> 
      <div style={containerStyle}>
      <ReactPlayer url="https://youtu.be/YRBmZIDqSrc?feature=shared" height="100%" width="100%"/>
      </div>


      <h2 style={headingstyle2}>Recorded Unusal Activity</h2>
      <div style={SmallerContainer}>
      <ul style={{ listStyleType: 'none', display: 'flex', padding: 0 }}>
      {data.map((item, index) => (
        <li key={index} style={{ margin: '0px 10px' }}><ReactPlayer url="https://youtu.be/YRBmZIDqSrc?feature=shared" height="100%" width="100%"/></li>
      ))}
      </ul>
      </div>

      <div style={containerStyle1}> 
      <div style={styles.container}>
      <ul style={styles.list}>
        {data.map((item, index) => (
          <li key={index} style={styles.listItem}>
            <div style={styles1.card}>
            <h2 style={styles1.title}>title</h2>
            <p style={styles1.content}>content</p>
            </div>
          </li>
        ))}
      </ul>
      </div>  
      </div>

  </div>
  )
}
const mystyle = {
    position: "relative",
    top: "60px",
    padding: "10px",
    left:"27px",
    fontFamily: "Arial"
  };
  const containerStyle = {
    position: 'relative', // Set the positioning context for the child
    top: "50px",
    left:"40px",
    width: '35vw', // Set the desired width here
    height: '40vh', // Set the desired height here
    backgroundColor:'blue'
  };

  const containerStyle1={
    position: 'absolute',
    top:'25px',
    padding:'10px',
    height:'60vh',
    width:'65vw',
    left:'40vw',
    backgroundColor:'#FFC0CB'
  };

  const headingstyle2={
    position: "relative",
    top: "50px",
    left:'30px',
    padding:'10px'
  };

  const SmallerContainer={
    position: "relative",
    left:"30px",
    top:'40px',
  };

  const styles = {
    container: {
      width: '100%', // Adjust the width as needed
      height: '100%',
      border: '1px solid #ccc',
      borderRadius: '8px',
      overflow: 'hidden', // Hide content that overflows
    },
    list: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
      maxHeight: '100%', // Adjust the maximum height as needed
      overflowY: 'auto', // Enable vertical scrolling if content overflows
    },
    listItem: {
      padding: '0px',
      borderBottom: '1px solid #ddd',
    },
  };



  const styles1 = {
    card: {
      width: '56vw',
      height: '12.5vh',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: '1.5rem',
      marginBottom: '8px',
    },
    content: {
      fontSize: '1rem',
      color: '#555',
    },
  };

export default Video
