import React from 'react';
import {DefaultPlayer as Video} from 'react-html5video';
import guantanamo from '../videos/guantanamo.mp4';
const VideoPlayer = () => {
        return (
            <Video autoPlay loop>
                <source src={guantanamo} type="video/webm"/>
            </Video>
        );
};

export default VideoPlayer;