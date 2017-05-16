import { isUndefined } from 'lodash';
import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';

import { FormStep, Panel, Radio, RadioItem } from 'src/components';
import * as constants from 'src/constants/callNotes';


const getSecondaryTitle = (activity, overrideActivityId) => {
  if (activity && !overrideActivityId) {
    return 'Did you complete the scheduled activity?';
  } else if (activity && overrideActivityId) {
    return 'Did you complete the activity?';
  } else {
    return 'Did you complete an activity?';
  }
};


const ActivityProgress = ({
  activity,
  onChange,
  onActivityDifferentSelect,
  callNote: { activityProgress },
  metadata: { overrideActivityId },
  ...props,
}) => (
  <FormStep
    paginationDisabled={isUndefined(activityProgress)}
    title="Activities"
    secondaryTitle={getSecondaryTitle(activity, overrideActivityId)}
    {...props}
  >
    <ScrollView>
      {
        activity && <Panel
          title={activity.title}
          styles={[Panel.types.embedded, Panel.types.snippet]}
          numberOfLines={2}
        >
          {activity.objective}
        </Panel>
      }

      <Radio
        uid="activityProgressItems"
        selection={activityProgress}
        onSelect={selection => onChange({ activityProgress: selection })}
      >
        {
          !activity && <RadioItem value={constants.V2_ACTIVITY_USED}>
            We used an activity
          </RadioItem>
        }

        {
          activity && <RadioItem value={constants.V2_ACTIVITY_COMPLETED}>
            Yes, we completed it
          </RadioItem>
        }

        {
          activity && <RadioItem value={constants.V2_ACTIVITY_PARTIALLY_COMPLETED}>
            We used it, but did not finish
          </RadioItem>
        }

        {
          !overrideActivityId && <RadioItem value={constants.V2_ACTIVITY_NOT_USED}>
            No, we did our own thing
          </RadioItem>
        }

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
  metadata: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default ActivityProgress;
