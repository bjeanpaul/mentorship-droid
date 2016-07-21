# MENTOR TOGETHER #

This application is built with React-Native, targeting Android.

## Installation ##

Before you attempt to run the package, follow the [Android setup steps](https://facebook.github.io/react-native/docs/android-setup.html)
for React-Native.

```
> npm install
> react-native init
> react-native run-android
```



API documentation:

- Journey has

a list of `Events`:
  - event type (constants, which are mapped against icons in the UI.)
    - call started
    - call scheduled
    - new message
    -
  - title
  - subtitle
  - date

Activity:
  Category
    - About
    - Lessons
      - How is the activity marked as completed. (Have you read it, or have you had a call about it?)
    - Colour

    Lesson Detail:
      {
        0: {
          "title": "Topic",
          "icon": "ribbon.png",
          "content": "Identify: Self-esteem",
        }
        1: {
          "title": "Objective",
          "icon": "bullseye.png",
          "content": "To initiate discussion on Self Esteem and assess the current level of Mentees Self Esteem using the:” I am…” poem.",
        }
      }

      Questions: Should we allow the content creator to choose and icon, or upload an icon. Further thoughts: Are images stored in the CMS and downloaded, or stored in the application.

Call Scheduling:
  - Mostly completed.

Call Notes/ Feedback
  - Just create a json format ourselves.

  Questions:
  - Are the notes optional? If so, how do we mark an activity as complete.

Chat
  - Messages

Community:

  DISCUSSIONS:
  Comments module with likes built into it.

  - List of topics
    - Posts
      - Mentor
      - Title
      - number of likes
      - number of responses
        - Replies
          - number of likes
  - Mentions vs. responding to a topic.
  - Suggestions a new topic




  MENTOR INDEX:

  Questions:
    - What is the lorem ipsum text, is that a status update or the last post?
    - What is the date on the right hand side?
    - Filters: How do they work.

    - Mentor question/ New post mention/ Direct messaging.

      - You can send a direct message to a mentor, and somehow they respond, where?

      
