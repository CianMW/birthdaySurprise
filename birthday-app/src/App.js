import kale from "./assets/KaleFrogCrop.png"
import './App.css';
import {Col, Container, Row} from "react-bootstrap"
import ReactAudioPlayer from 'react-audio-player'
function App() {

  let audio = new Audio("/loveYouBitch.mp3")

  const start = () => {
    audio.play()
  }


  return (
    <div className="App full-height-width">
      {/* <header className="App-header"> */}
        <Container className="full-parent-height-width full-height align-items-center justify-content-center">
          <Row className="my-5 ">
            <h1 className="gold-text"> HAPPY BIRTHDAY!!</h1>
          </Row>
          <Row className=" my-5 full-parent-height-width align-items-center justify-content-center">
            <Col className="  my-5 align-items-center justify-content-center">
            {/* <ReactAudioPlayer
  src={iLoveYou}
  autoPlay
  controls
/> */}
      <div  className="mt-5 full-parent-height-width roll-in-left">
        <div className="cursor-pointer" onClick={ start}>
        <img style={{cursor:"pointer"}}src={kale}  className="cursor-pointer d-flex mt-5 App-logo" alt="logo" />
        </div>
      </div>
      <h1 className="gold-text"> <i className=" bolded bi bi-arrow-up"></i> CLICK ME!! <i className="bolded bi bi-arrow-up"></i></h1>
            </Col>
            </Row>
          </Container>
      {/* </header> */}
    </div>
  );
}

export default App;
