import { useState, useEffect } from "react";

const withMousePosition = (WrappedComponent) => {
    return (props) => {

        const [mousePosition, setMousePosition] = useState({
            x:0,
            y:0,
        })

        useEffect(() => {
            const handleMousePositionChange = (e) => {
                setMousePosition(
                    {
                        x: e.clientX,
                        y:e.clientY,
                    }
                )
            }

            window.addEventListener('mouseover', handleMousePositionChange);

            return () => {
                window.removeEventListener('mouseover', handleMousePositionChange);
            }
        }, []);

        return <WrappedComponent {...props}  mousePosition={mousePosition}/>;
    }
}


const PanelMouseLogger = ({mousePosition}) => {
    if (!mousePosition) {
        return null;
    }
    return (
        <div className="basic-tracker">
            <p>Mouse Position:</p>
            <div className="Row">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    )
}


const PointMouseLogger = ({mousePosition}) => {
    if (!mousePosition) {
        return null;
    }

    return (
        <p>
            ({mousePosition.x}, {mousePosition.y})
        </p>
    )
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function HOC() {
    return (
        <div>
            <header>Mouse pointer tracker</header>
            <PanelMouseTracker/>
            <PointMouseTracker/>
        </div>
    )
}


export default HOC;