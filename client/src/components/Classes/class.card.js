import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
  CardHeader,
  Grid,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function ClassCard({ id, user, title, description, onClickUpdate }) {
  function AddClass() {}
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            onClick={() => AddClass}
            sx={{ zIndex: 0 }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={`#${id}`}
        sx={{ borderBottom: ".0625rem solid #dadce0" }}
      />
      <CardContent sx={{ flexGrow: 1 }}> 
        <Typography paragraph variant="body2" sx={{ mt: 2, height: "100%" }}>
          {description}
          <br />
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          borderTop: ".0625rem solid #dadce0",
          maxHeight: "2rem",
          height: "100%",
          zIndex: 0,
          justifyContent: "between",
          display: "flex",
        }}
      >
        <Grid container>
          <Grid item xs>
            <Button size="small">See More</Button>
          </Grid>
          <Grid item>
            <Button size="small" onClick={onClickUpdate}>Update</Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
export default ClassCard;
