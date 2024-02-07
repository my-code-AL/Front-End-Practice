import React from 'react';
import { MAIN_DATA } from "./data.js";
import Main from "./Main.js";

function LandingView() {
    return (
        <div className="landing-view">
            <Main content={MAIN_DATA[0].content} />
            <Main content={MAIN_DATA[1].content} />
            <Main content={MAIN_DATA[2].content} />
            <Main content={MAIN_DATA[3].content} />
            <Main content={MAIN_DATA[4].content} />
            <Main content={MAIN_DATA[5].content} />
            <Main content={MAIN_DATA[6].content} />
        </div>
    );
}

export default LandingView;