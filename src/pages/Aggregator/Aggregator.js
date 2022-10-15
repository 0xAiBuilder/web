import React from 'react'
import {useState} from 'react'
import './Aggregator.css';
const Aggregator = () => {
    //map serviceList, deploy layers
    const [serviceList, setServiceList] = useState([
        {service: ''},
    ]);

    console.log(serviceList);

    const handleServiceAdd = () => {
        setServiceList([...serviceList, {service: ""}])
    }

    const handleServiceRemove = (index) => {
        const list = [...serviceList]
        list.splice(index, 1)
        setServiceList(list)
    }

    const handleServiceChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    }

    return (
        <div className='container'>
            <h1 className='text-center' stryle={{paddingTop: '30%'}}>
                Aggregator
            </h1>
            <form autoComplete='off'>
                <div className='form-field'>
                    <label htmlFor='service'>Service(s)</label>
                    {serviceList.map((singleService, index)=> (
                        <div key = {index} className="services">
                            <div className="first-division">
                                <input 
                                    name="service" 
                                    type="text" 
                                    id="service" 
                                    required 
                                    value={singleService.service}
                                    onChange={(e) => handleServiceChange(e, index)}
                                
                                />
                                
                                {serviceList.length - 1 === index && serviceList.length < 4 &&
                                (
                                    <button 
                                        type="button" 
                                        className="add-btn" 
                                        onClick={handleServiceAdd}                                    
                                    >
                                        <span>Add a Service</span>
                                    </button>
                                )}
                                
                            </div>
                            <div className="second-division">
                                {serviceList.length > 1 && (
                                    <button 
                                        type="button" 
                                        className="remove-btn"
                                        onClick={() => handleServiceRemove(index)}  
                                    >
                                        <span>Remove</span>
                                    </button>
                                )}
                                
                            </div>
                        </div>
                    ))}
                </div>
                <div className='output'>
                    <h2>Output</h2>
                    {serviceList.map((singleService, index) => (
                        <ul key={index}>
                            {singleService.service && <li>{singleService.service}</li>}
                        </ul>
                    ))}
                </div>    
            </form>
            <div>
                <h2>extra gap</h2>
                <h3>extra gap</h3>
            </div>  
        </div>
    )
}

export default Aggregator;