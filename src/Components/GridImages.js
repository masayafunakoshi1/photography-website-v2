import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import useFirestore from '../hooks/useFirestore'

const GridImages = () => {
    const { docs } = useFirestore('images')

    return (
        <div>
            {/* <GridList>
                <GridListTile>
                    <img></img>
                </GridListTile>
            </GridList> */}
        </div>
    )
}

export default GridImages
