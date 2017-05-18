import { isEqual } from 'lodash';
import React, { PropTypes, Component } from 'react';
import { ScrollView } from 'react-native';

import { FormStep, Panel, Radio, RadioItem } from 'src/components';
import * as constants from 'src/constants/callNotes';
import images from 'src/constants/images';


export const updateScroll = (scrollView, activity, prevActivity) => {
  if (!isEqual(activity, prevActivity)) {
    scrollView.scrollTo({
      y: 0,
      animate: false,
    });
  }
};


class ActivityProgress extends Component {
  constructor(...args) {
    super(...args);
    this.scrollView = null;
    this.setScrollViewRef = this.setScrollViewRef.bind(this);
  }

  componentDidUpdate(prevProps) {
    updateScroll(this.scrollView, this.props.activity, prevProps.activity);
  }

  getSecondaryTitle() {
    if (this.props.activity && !this.props.metadata.activityHasChanged) {
      return 'Did you complete the scheduled activity?';
    } else if (this.props.activity && this.props.metadata.activityHasChanged) {
      return 'Did you complete the activity?';
    } else {
      return 'Did you complete an activity?';
    }
  }

  setScrollViewRef(scrollView) {
    this.scrollView = scrollView;
  }

  render() {
    const {
      activity,
      onChange,
      callNote,
      metadata,
      onActivityChangeSelect,
      ...props,
    } = this.props;

    return (
      <FormStep
        paginationDisabled={!callNote.activityProgress}
        title="Activities"
        secondaryTitle={this.getSecondaryTitle()}
        {...props}
      >
        <ScrollView ref={this.setScrollViewRef}>
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
                iconSelected={images.ARROW_SELECTED}
                iconUnselected={images.ARROW_UNSELECTED}
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
              (activity && !metadata.activityHasChanged) && <RadioItem
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
                iconSelected={images.ARROW_SELECTED}
                iconUnselected={images.ARROW_UNSELECTED}
                onSelect={onActivityChangeSelect}
              >
                We used another activity
              </RadioItem>
            }
          </Radio>
        </ScrollView>
      </FormStep>
    );
  }
}

ActivityProgress.propTypes = {
  callNote: PropTypes.object,
  activity: PropTypes.object,
  metadata: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onActivityChangeSelect: PropTypes.func,
};


export default ActivityProgress;
