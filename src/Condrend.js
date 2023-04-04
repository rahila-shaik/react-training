import React from 'react'
export default class CondRenderingCls extends React.Component {
    render() {
        const showMessage = true;
        return (
            <div>
                { showMessage && <p>I M Conditionally Rendered</p>}
            </div>
        );
    }
}