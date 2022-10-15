import React from 'react'
import {useRef, useEffect, useState} from 'react'
import './Skill.css';


const Skill = () => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const [hasPhoto, setHasPhoto] = useState(false);
    const getVideo = () => {
        //navigator.mediaDevices.getUserMedia({video: {width:1920,height:1080}})
        navigator.mediaDevices.getUserMedia({video: {width:227,height:227}})
                              .then(stream => {
                                  let video = videoRef.current;
                                  video.srcObject = stream;
                                  video.play();
                              })
                              .catch(err => {
                                  console.error(err);
                              })
    }

    const takePhoto = () => {
        const width = 227;
        {/*const height = width / (16/9); */}
        const height = 227;
        

        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0,width, height);
        setHasPhoto(true);
    }

    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');
        ctx.clearRect(0, 0, photo.width,photo.height);
        setHasPhoto(false);
    }
    useEffect(() => {
        getVideo();
    }, [videoRef]);

    //add label
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


    //import teachable machine


    return (
        <div className='container'>
            <h1 className='text-center' stryle={{paddingTop: '30%'}}>
                Skill
            </h1>
            <div className='camera'>
                <video ref={videoRef}></video>
                <button3 onClick={takePhoto}>Snap 1 Simple</button3>
            </div>
            <div className={(hasPhoto ? 'hasPhoto': '')}>
                <canvas ref={photoRef}></canvas>
                <button3 onClick={closePhoto}>close</button3>
            </div>
            {/*--v--add label--v--*/}
            <form autoComplete='off'>
                <div className='form-field'>
                    <label htmlFor='service'>Service(s)</label>
                    {serviceList.map((singleService, index)=> (
                        <div key = {index} className="services">
                            <div className="first-division">
                                {/*<input 
                                    name="service" 
                                    type="text" 
                                    id="service" 
                                    required 
                                    value={singleService.service}
                                    onChange={(e) => handleServiceChange(e, index)}
                                
                                />*/}
                                <input 
                                    name="service" 
                                    type="text" 
                                    id="service" 
                                    required 
                                    value={singleService.service}
                                    onChange={(e) => handleServiceChange(e, index)}
                                
                                />
                                <button 
                                    type="button"        
                                >                        
                                </button>
                                
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
                
                <div>
                    <h2>extra gap</h2>
                    <h3>extra gap</h3>
                </div>     
            </form>
        </div>
    )

    
}

export default Skill;