import React from 'react'
import {useRef, useEffect, useState} from 'react'
import './Openskill.css';
const Openskill = () => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const [hasPhoto, setHasPhoto] = useState(false);
    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({video: {width:1920,height:1080}})
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
        {/*const height = width / (16/9);*/}
        const height = width; 
        

        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        //let ctx = photo.getContext('2d');
        //ctx.drawImage(video, 0, 0,width, height);
        setHasPhoto(true);
    }

    const closePhoto = () => {
        let photo = photoRef.current;
        //let ctx = photo.getContext('2d');
        //ctx.clearRect(0, 0, photo.width,photo.height);
        setHasPhoto(false);
    }
    useEffect(() => {
        //getVideo();
    }, [videoRef]);

    return (
        <div className='container'>
            <h1 className='text-center' stryle={{paddingTop: '30%'}}>
                Openskill
            </h1>
            <div className='camera'>
                <video ref={videoRef}></video>
                <button2 onClick={takePhoto}>Package name</button2>
            </div>
            
            {/*<div className={'result ' + (hasPhoto ? 'hasPhoto': '')}>*/}
            <div className={'result ' + (hasPhoto ? 'hasPhoto': '')}>
                <canvas ref={photoRef}></canvas>
                <button21>mint</button21>
                <button2 onClick={closePhoto}>close</button2>
            </div> 
        </div>
    )
}

export default Openskill;