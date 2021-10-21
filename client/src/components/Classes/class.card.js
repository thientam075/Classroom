import {Card, CardContent, Typography,CardActions, Button, IconButton , CardHeader} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function ClassCard({id,user,title,description}){
    function AddClass(){
        
    }
    return (
        <Card 
        sx={{ maxWidth: '18.75rem', maxHeight: '18.375rem', margin: 1}}>
        <CardHeader
        action={
          <IconButton aria-label="settings" onClick = {() => AddClass} sx= {{zIndex: 0}}>
            <MoreVertIcon />
          </IconButton>
        }
        title= {title}
        subheader={user ? user : ''}
        sx = {{borderBottom: '.0625rem solid #dadce0'}}
      />
      <CardContent>
        <Typography variant="body2" sx= {{  mt: 2}}>
          {description}
          <br />
        </Typography>
      </CardContent>
      <CardActions sx = {{ borderTop: '.0625rem solid #dadce0', zIndex: 0 }}>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
);
}
export default ClassCard;