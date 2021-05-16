import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">All right reserved by Chilla</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;