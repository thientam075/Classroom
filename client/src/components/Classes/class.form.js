import { TextField, Typography, Button, Grid, Box } from "@mui/material";
import { useState } from "react";
function Classform({ handleClose, handleChange, isCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const divStyle = {
    display: "flex",
    justifyContent: "between",
  };

  // Function event handlers
  function Createform(){
    return (
      <Grid item xs={6} sm={12}>
            <TextField
              autoComplete="given-name"
              name="title"
              required
              fullWidth
              id="title"
              label="Title"
              autoFocus
              onChange={onHandleChange}
              value={handleClose ? "" : title}
            />
          </Grid>
    );
  };

  function Updateform(){
    return (
      <Grid item xs={6} sm={12}>
            <TextField
              autoComplete="given-name"
              name="title"
              required
              fullWidth
              id="title"
              label="Title"
              autoFocus
              onChange={onHandleChange}
              value={handleClose ? "" : title}
            />
          </Grid>
    );
  };
  const fetchData = async (title, description) => {
    await fetch("http://localhost:8080/classes", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title ,
        description: description ,
      }),
    }).then(res => res.json())
    .then((result) => alert(result.message + ". Please reload the page"))
    .catch(err => console.error(err));
  };
  function resetForm(){
    setTitle("");
    setDescription("");
  }
  const onHandleSubmit = (event) => {
    event.preventDefault();
    fetchData(title,description);
    handleChange();
    resetForm();
  };
  const onHandleChange = (event) => {
    console.log(event.target);
    const Target = event.target;
    if(Target.name === 'title'){
      setTitle(Target.value);
    }else{
      setDescription(Target.value);
    }
  };
  return (
    <Box
      sx={{
        marginTop: 8,
        flexDirection: "column",
        alignItems: "center",
        display: handleClose ? "none" : "inline",
        zIndex: 100,
      }}
      className="class-form"
    >
      <Typography component="h1" variant="h5">
        {isCreate ? "Create new Class" : "Update Class"}
      </Typography>
      <Box component="form" noValidate onSubmit={onHandleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {isCreate ? <Createform /> : <Updateform />}
          <Grid item xs={6} sm={12}>
            <TextField
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              onChange = {onHandleChange}
              value={handleClose ? "" : description}
            />
          </Grid>
        </Grid>
        <div style={divStyle}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, mr: 2 }}
          >
            Create
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="error"
            onClick={() => handleChange()}
          >
            Cancel
          </Button>
        </div>
      </Box>
    </Box>
  );
}
export default Classform;
