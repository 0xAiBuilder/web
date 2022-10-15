import React from 'react'
import { Grid, GridColumn, Input, Label , Button, Image, Segment, Item} from 'semantic-ui-react'

const ShowPrediction = ({predictedData}) => {

    return (
        <Segment className='item-predict'>
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' circular src=''/>
                        <Item.Content>
                            <Item.Header content={predictedData.product} />
                            <Item.Description>
                                Probability: {predictedData.probability * 100} %
                            </Item.Description>
                        </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    );
};    

export default ShowPrediction;