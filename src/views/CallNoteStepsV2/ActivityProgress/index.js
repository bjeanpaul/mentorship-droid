import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';

import { FormStep, Panel, Radio, RadioItem } from 'src/components';
import * as constants from 'src/constants/callNotes';


const getSecondaryTitle = (callNote, activity) => {
  if (activity && !callNote.activity) {
    return 'Did you complete the scheduled activity?';
  } else if (activity && callNote.activity) {
    return 'Did you complete the activity?';
  } else {
    return 'Did you complete an activity?';
  }
};


const ActivityProgress = ({
  activity,
  onChange,
  callNote,
  onActivityChangeSelect,
  ...props,
}) => (
  <FormStep
    paginationDisabled={!callNote.activityProgress}
    title="Activities"
    secondaryTitle={getSecondaryTitle(callNote, activity)}
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
        selection={callNote.activityProgress}
      >
        {
          !activity && <RadioItem
            value={constants.V2_ACTIVITY_USED}
            onSelect={onActivityChangeSelect}
          >
            We used an activity
          </RadioItem>
        }

        {
          activity && <RadioItem
            value={constants.V2_ACTIVITY_COMPLETED}
            onSelect={selection => onChange({
              activityProgress: selection,
              activity: activity.id,
            })}
          >
            Yes, we completed it
          </RadioItem>
        }

        {
          activity && <RadioItem
            value={constants.V2_ACTIVITY_PARTIALLY_COMPLETED}
            onSelect={selection => onChange({
              activityProgress: selection,
              activity: activity.id,
            })}
          >
            We used it, but did not finish
          </RadioItem>
        }

        {
          !callNote.activity && <RadioItem
            value={constants.V2_ACTIVITY_NOT_USED}
            onSelect={selection => onChange({
              activityProgress: selection,
              activity: null,
            })}
          >
            No, we did our own thing
          </RadioItem>
        }

        {
          activity && <RadioItem
            value={constants.V2_ACTIVITY_DIFFERENT}
            onSelect={onActivityChangeSelect}
          >
            We used another activity
          </RadioItem>
        }
      </Radio>
    </ScrollView>
  </FormStep>
);

ActivityProgress.propTypes = {
  callNote: PropTypes.object,
  activity: PropTypes.object,
  metadata: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onActivityChangeSelect: PropTypes.func,
};


export default ActivityProgress;
