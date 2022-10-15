import React, {useState} from 'react'
import { Header, Grid, GridColumn, Input, Label , Button, Image, Segment, Item} from 'semantic-ui-react'
import SearchBox from './features/SearchBox'
import Preview from './features/Preview'
import AImodel from './features/AImodel'
const Package = () => {
    const handleChange = function (e) {};
    const handleClear = function () {};
    const handlePredict = function () {};

    const [searchState, setSearchState] = useState('');
    return (
        <div className='container'>
            <Header as='h1' >
                Package dashboard
            </Header>
            <SearchBox setSearchState={setSearchState}/>
            <Preview searchState={searchState}></Preview>
            
            <div>
                <h3>extra gap</h3>
                <h3>extra gap</h3>
            </div>
            {/*<Grid>
                <GridColumn width={16}>
                    <Input
                        fluid
                        value={''}
                        icon='search'
                        iconPosition='left'
                        className='search-bar'
                        placeholder='search...'
                        onChange={handleChange.bind(this)}
                        action={{
                            icon: 'delete',
                            onClick: (event, data) => {
                                handleClear(event, data);
                            },
                        }}
                    />
                    <Label pointing className='pointedLabel'>
                        Enter Photo URL{''}
                    </Label>    
                </GridColumn>
            </Grid>
            <Grid>
                <GridColumn width={5}> 
                    <h2> Photo Preview Panel</h2>
                    <Image src={''} size='massive' wrapped />
                </GridColumn>
                <GridColumn width={10}> 
                    <h2> Interact Photo Panel</h2>
                    <Button className='predictImageBtn' onClick = {handlePredict}>
                        Interact Photo
                    </Button>
                </GridColumn>
            </Grid>
            <Grid>
                <GridColumn width={5}>
                    <Segment className='item-predict'>
                        <Item.Group>
                            <Item>
                                <Item.Image size='tiny' circular src=''/>
                                <Item.Content>
                                    <Item.Header content={''} />
                                    <Item.Description>
                                        Probability: {'' * 100} %
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                </GridColumn>
            </Grid>*/}
        </div>
           
    )
}

export default Package;