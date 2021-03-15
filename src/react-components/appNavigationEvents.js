import React from 'react';
import { NavigationEvents } from 'react-navigation';

// class AppNavigationEvents extends React.Component {

//     render (){

//         const {onDidFocus} = this.props;

//         return(
//             <NavigationEvents onDidFocus={onDidFocus} />
//         )
//     }
// }

export default ({ onDidFocus }) => <NavigationEvents onDidFocus={onDidFocus} />
