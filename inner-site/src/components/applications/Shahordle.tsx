import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';

export interface ShahordleAppProps extends WindowAppProps {}

const ShahordleApp: React.FC<ShahordleAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={300}
            width={600}
            height={860}
            windowBarIcon="windowGameIcon"
            windowTitle="Shahordle"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2026 Shahil KV'}
        >
            <div className="site-page">
                <Wordle />
            </div>
        </Window>
    );
};

export default ShahordleApp;
