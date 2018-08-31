import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem(library) {
console.log("Text", library.item);
        return <ListItem library={library.item} />;
    }

    render() {
        return(
            <FlatList
            data={this.props.libraries}
            renderItem={this.renderItem}
            keyExtractor={library => library.id.toString()}
            />
        );
    }
}

const mapStateToProps = state => {
    return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
/* The above line does the following:
 calls function 'connect' which returns a function,
which we then immediately call passing in LibraryList
*/