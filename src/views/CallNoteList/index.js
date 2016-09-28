import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';
import { BaseView } from 'src/components';
//import styles from './styles';


const CallNoteList = ({
  callNotes = [],
}) => (
  <BaseView>
    <ScrollView>
    </ScrollView>
  </BaseView>
);


CallNoteList.propTypes = {
  callNotes: PropTypes.array.isRequired,
};


export default CallNoteList;
