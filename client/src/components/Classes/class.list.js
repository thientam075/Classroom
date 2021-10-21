import { useEffect, useState } from "react";
import {  Grid, Container } from "@mui/material";
import ClassCard from "./class.card";
function Classlist() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/classes")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setClasses(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container>
        <Grid container>
            {classes.map((item) => (
              <Grid key={item.id}>
              <ClassCard 
            id = {item.id} 
            title = {item.title} 
            description = {item.description}/>
              </Grid>
            ))}
        </Grid>
      </Container>
    );
  }
}

export default Classlist;
