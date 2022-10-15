import React, {useState} from 'react'
import { Grid, GridColumn, Input, Label , Button, Image, Segment, Item} from 'semantic-ui-react'
import AImodel from './AImodel'
//import ShowPrediction from './ShowPrediction'
const Preview = ({searchState}) => {
    {/*const [predictedData, setPredictedData] = useState({
        Product: '',
        Probability: '',
    });
    const handlePredict = function (){
        if (searchState === ''){
            return;
        }
        console.log(searchState);
        const data = {
            imageUrl: searchState,
        };
        const requesOptions = {
            method: 'POST',
            Accept: 'application/json',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
            mode: 'cors',
        }

        fetch('http://localhost:5000/image/service',requesOptions).then(
            (response) => {
                if(response.status!==200){
                    setPredictedData({
                        Product: 'Not sure!',
                        Probability: 0,
                    });
                    console.log('Something went err!');
                }else{
                    response.json().then((data) => {
                        debugger;
                        setPredictedData({
                            Product: data[0].class,
                            Probability: data[0].score,
                        });
                    });
                }
            }
        )
    };*/}
    return (
        <Grid>
            <GridColumn width={5}> 
                <h2> Photo Preview Panel</h2>
                <Image src={searchState} size='massive' wrapped />
            </GridColumn>
            <GridColumn width={10}> 
                <h2> Interact Panel</h2>
                <AImodel/>
            </GridColumn>
            {/*<GridColumn width={10}> 
                <h2> Interact Photo Panel</h2>
                <Button className='predictImageBtn' onClick = {handlePredict}>
                    Interact Photo
                </Button>
                <ShowPrediction predictedData={predictedData}/>
            </GridColumn>*/}
        </Grid>
    );
};    

export default Preview;