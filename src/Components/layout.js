import React, {Component} from 'react';

import Header from './header';
import Body from './body';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        )
    }
}
export default Layout;
