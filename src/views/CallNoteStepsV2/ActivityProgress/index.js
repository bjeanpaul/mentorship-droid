import { isUndefined, unzip } from 'lodash';
import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';

import { FormStep, Panel, RadioList } from 'src/components';
import * as constants from 'src/constants/callNotes';


const [ACTIVITY_ITEMS, ACTIVITY_LABELS] = unzip([
  [constants.V2_ACTIVITY_COMPLETED, 'Yes, we completed it'],
  [constants.V2_ACTIVITY_PARTIALLY_COMPLETED, 'We used it, but did not finish'],
  [constants.V2_ACTIVITY_NOT_USED, 'No, we did our own thing'],
  [constants.V2_ACTIVITY_DIFFERENT, 'We used another activity'],
]);


const ActivityProgress = ({
  callNote: { activityProgress },
  activity: { objective },
  onChange,
  ...props,
}) => (
  <FormStep
    paginationDisabled={isUndefined(activityProgress)}
    title="ActivityProgress"
    secondaryTitle="Did you complete the scheduled activity?"
    {...props}
  >
    <ScrollView>
      <Panel
        title="Scheduled Activity"
        styles={[Panel.types.embedded, Panel.types.snippet]}
        numberOfLines={2}
      >
        {objective}
      </Panel>

      <RadioList
        uid="activityProgressItems"
        items={ACTIVITY_LABELS}
        onIndexChanged={
          item => onChange({
            activityProgress: ACTIVITY_ITEMS[item.index],
          })
        }
        initialSelection={activityProgress}
      />
    </ScrollView>
  </FormStep>
);

ActivityProgress.propTypes = {
  callNote: PropTypes.object,
  activity: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default ActivityProgress;
