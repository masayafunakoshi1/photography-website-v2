import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ScrollToTop from '../ScrollToTop'
import imgData from './images/NatureImgs'

const Nature = () => {

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
        <ScrollToTop />
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

export default Nature


