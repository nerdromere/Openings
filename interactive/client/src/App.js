import React, { useState } from "react";
import { Button, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";

function App() {

  const [openings, setOpenings] = useState([
    {
      fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR",
      file: [
        { 
          link: "https://www.youtube.com/watch?v=6IegDENuxU4&t=36s",
          addedBy: "MrEremenko",
          dateAdded: "2022-03-10T08:23:53.428Z"
        },
        { 
          link: "https://www.youtube.com/watch?v=6IegDENuxU4&t=36s",
          addedBy: "MrEremenko",
          dateAdded: "2022-03-10T08:23:53.428Z"
        },
        { 
          link: "https://www.youtube.com/watch?v=6IegDENuxU4&t=36s",
          addedBy: "MrEremenko",
          dateAdded: "2022-03-10T08:23:53.428Z"
        },
        { 
          link: "https://www.youtube.com/watch?v=6IegDENuxU4&t=36s",
          addedBy: "MrEremenko",
          dateAdded: "2022-03-10T08:23:53.428Z"
        },
        { 
          link: "https://www.youtube.com/watch?v=6IegDENuxU4&t=36s",
          addedBy: "MrEremenko",
          dateAdded: "2022-03-10T08:23:53.428Z"
        },
        { 
          link: "https://www.youtube.com/watch?v=6IegDENuxU4&t=36s",
          addedBy: "MrEremenko",
          dateAdded: "2022-03-10T08:23:53.428Z"
        },
        { 
          link: "https://www.youtube.com/watch?v=6IegDENuxU4&t=36s",
          addedBy: "MrEremenko",
          dateAdded: "2022-03-10T08:23:53.428Z"
        },
        { 
          link: "https://www.youtube.com/watch?v=6IegDENuxU4&t=36s",
          addedBy: "MrEremenko",
          dateAdded: "2022-03-10T08:23:53.428Z"
        },
        { 
          link: "https://www.youtube.com/watch?v=6IegDENuxU4&t=36s",
          addedBy: "MrEremenko",
          dateAdded: "2022-03-10T08:23:53.428Z"
        },
        { 
          link: "https://www.youtube.com/watch?v=6IegDENuxU4&t=36s",
          addedBy: "MrEremenko",
          dateAdded: "2022-03-10T08:23:53.428Z"
        },
        { 
          link: "https://www.youtube.com/watch?v=6IegDENuxU4&t=36s",
          addedBy: "MrEremenko",
          dateAdded: "2022-03-10T08:23:53.428Z"
        },
      ]
    }
  ]);

  const [chosen, setChosen] = useState(0);

  const onClickOpening = (e) => {
    setChosen(+e.target.getAttribute("value"));
  }

  return (
    <Container className="h-100">
      <Container style={{ display: "flex", flexDirection: "column" }}>
          <InputGroup style={{ marginTop: "2vh" }}>
            <FormControl
              placeholder="Partial FEN (e.g.: rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR)"
              aria-label="Partial FEN"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup style={{ marginTop: "2vh" }}>
            <FormControl
              placeholder="Link with timestamp to video (e.g.: https://youtu.be/6IegDENuxU4?t=36)"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup style={{ marginTop: "2vh" }}>
            <FormControl
              placeholder="Github Username, possible links will be generated from this"
              aria-label="Github Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button variant="outline-success" style={{ margin: "2vh auto", width: "20vw" }}>Add</Button>
      </Container>
      <Container style={{ display: "flex", height: "70vh" }}>
            <Container className="shadow-lg p-3 mb-5 bg-body rounded" style={{ overflowY: "auto", height: "100%", minWidth: "400px", maxWidth: "30vw", marginRight: "1vw", borderStyle: "solid", borderWidth: "0.5px", borderColor: "gray" }}>
              {
                openings.map((opening, idx) => {
                  return <div key={idx} value={idx} style={{ cursor: "pointer", textDecoration: "underline", fontWeight: chosen === idx ? "bold" : "normal" }}
                  onClick={onClickOpening}>{opening.fen}</div>
                })
              }
            </Container>
            <Container style={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
              <img style={{ height: "35vh", margin: "2vh auto" }} src={`https://www.chess.com/dynboard?fen=${openings[chosen].fen}&board=green&piece=neo&size=3`}/>
              <Container className="shadow-lg bg-body rounded overflow-auto" style={{ overflowY: "auto", height: "100%", minWidth: "400px", maxWidth: "30vw", marginLeft: "1vw", borderStyle: "solid", borderWidth: "0.5px", borderColor: "gray" }}>
                <hr/>
                { openings[chosen].file.map(link => {
                  return <div>
                    <div>Link: {link.link}</div>
                    <div>Date: {link.addedBy}</div>
                    <div>Added By: {link.dateAdded}</div>
                    <hr/>
                  </div>
                }) }
              </Container>
            </Container>
            
      </Container>
    </Container>
  );
}

export default App;
