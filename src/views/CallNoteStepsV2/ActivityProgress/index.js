import { isUndefined } from 'lodash';
import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';

import { FormStep, Panel, Radio, RadioItem } from 'src/components';
import * as constants from 'src/constants/callNotes';


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

      <Radio
        uid="activityProgressItems"
        selection={activityProgress}
        onSelect={selection => onChange({ activityProgress: selection })}
      >
        <RadioItem value={constants.V2_ACTIVITY_COMPLETED}>
          Yes, we completed it
        </RadioItem>

        <RadioItem value={constants.V2_ACTIVITY_PARTIALLY_COMPLETED}>
          We used it, but did not finish
        </RadioItem>

        <RadioItem value={constants.V2_ACTIVITY_NOT_USED}>
          No, we did our own thing
        </RadioItem>

        <RadioItem value={constants.V2_ACTIVITY_DIFFERENT}>
          We used another activity
        </RadioItem>
      </Radio>
    </ScrollView>
  </FormStep>
);

ActivityProgress.propTypes = {
  callNote: PropTypes.object,
  activity: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default ActivityProgress;
