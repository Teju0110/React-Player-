import { useRef } from 'react';
import './App.css';
import video from './restaurant_web.mp4'
import audio from './audio.mp3'

function App() {

  const videoRef=useRef()
  const audioRef=useRef()

  const handlePlay =()=>{
    videoRef.current.play();
    //audioRef.current.play();

  }
  const handlePause =()=>{
    videoRef.current.pause();
    //audioRef.current.pause();

  }

  return (
    <div className="App">
      <div className='buttons'>
        <button className='btn' onClick={handlePlay} style={{backgroundColor:"blue"}}>
          Play
        </button>
        <button className='btn' onClick={handlePause} style={{backgroundColor:"red"}}>
          Pause
        </button>
      </div>
      <video height="350px" width="650px" ref={videoRef} loop>
        <source src={video} />
      </video>
      <audio controls ref={audioRef} style={{marginTop:"20px"}}>
        <source src={audio}/>
      </audio>
    </div>
  );
}

export default App;
