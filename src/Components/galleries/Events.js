import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const Events = () => {
    const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: theme.palette.background.paper,
        maxWidth: '100vw',
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
    }));

    const classes = useStyles();

    return (
      <div className={classes.root}>
      <GridList cols={3}>
        {imgData.map((item) => (
          <GridListTile rows={item.featured ? 3.7 : 2.5} key={item.title}>
            <img
              srcSet={item.imageUrl}
              alt={item.description}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    )
}

export default Events

const imgData = [
    {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_0605-min.JPG',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_0700-min.JPG',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_0768-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_0771-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_0799-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_0869-min.JPG',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_1342-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_5038-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_5234-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_5694-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_5714-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_5766-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_5821-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_5822-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_5837-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_5858-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_5869-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_5918-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_6147-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_6238-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_6354-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_6588-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_6604-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_6695-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_8265-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_8299-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_8321-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_8345-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_8349-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9120-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9138-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9146-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9157-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9171-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9200-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9254-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9261-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9271-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9273-min.jpg',
    },
        {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9283-min.jpg',
    },
            {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9368-min.jpg',
    },
                {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9387-min.jpg',
    },
                {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9395-min.jpg',
    },
                {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9445-min.jpg',
    },
                {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9531-min.jpg',
    },
                {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9683-min.jpg',
    },
                {
        title: '',
        description: '',
        imageUrl: 'images/eventsImgs/IMG_9685-min.jpg',
    },

]
