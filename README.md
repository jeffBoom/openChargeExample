# 📺 Video of the Solution
### Here's a [link to the video](https://vimeo.com/853142145) of the finished app.

<br />

# 🗒️ My Process

### Read the Open Charge API Documentation
1. Identify which endpoint returns "POIs".
2. Generate an API key.
3. Figure out what parameters the API would need for limiting the results to a specific location, turns out its latitude/longitude.
4. Send a few responses with my home latitude/longitude (used Thunder Client which is like Postman).
5. Read through the POI schema to identify fields that would be useful for the user.
   - AdressInfo
   - UsageType
   - StatusType


### Refresh my memory on getting device location
1. React Native used to provide a Geolocation API out of the box but they deprecated that so I went with a popular library called "@react-native-community/geolocation".


### App Architectural Design
1. I would normally spend more time here but because this was just a small demo, I just wrote down some thoughts the project structure and components I thought I would need:
   - Components
      - Button component for various actions (get location, start charging).
      - POI result component
   - Models
   - Styles
   - Utils
   - Connectors
   - Local State (normally would use state management libraries like Redux or Mobx)
      - Device geolocation
      - POIs
      - POI the user is charging at
      - Loading state
      - Error message


### Git Repo / Init Project
1. Created a private git repo on GitHub.
2. Initialized a React Native project (CRA not Expo).
3. Initialized the git repository in the project.
4. Pushed to main (init).
5. Created and checked out a git branch called "local-charging-search"


### Feature Build
1. Started by making sure I could get the device location.
2. Built the button component and setup state in the main app view that would display the results.
3. Setup the models for the Open Charge API requests and responses.
4. Tested getting the POIs with the users geolocation.
5. Built and styled the POI component to show the results.
6. Built the interaction around 'Start Charging' and built the connector for the ev.energy endpoint.
7. Tested throughout this process but again at the end (rebuilding the app and testing everything).


<br />

# 🚀 If I had more time I would...
1. I would have researched the type definitions for the Open Charge API, as I'm guessing someone has created definitions for the request/responses (ex: DefinitelyTyped).
2. I would have likely used a state management library depending on the context of this feature. As in, does the rest of the app need to know which station the user is charging at? Or does the app also need the geolocation somewhere else?
3. I would have abstracted the functions out of the app view (ex:startChargingSession, getGeoLocation, getPOIs).
4. This feature would likely be in its own view or at least its own component. I just wrote it in the App file for demo purposes.
5. I would have created an animated component wrapper that would show the POIs animating in as they mounted. I would have also added layout animations for when they expand / close.
6. I would have used better icons (not emojis 🤣).
7. I would have added loading states to the buttons when their handlers are called asynchronously. 
8. I would have created an HttpResp class (w/generics) and use it for all of the API responses.
9. I would have created 'manager' classes that would be responsible for calling the connectors as those managers could be a central place to call the connectors but also update global state (full view loading states, error toast notifications, etc).
10. I would have added a 'distance' selector so the user could specify a range of miles (the Open Charge API has a distance property you can use).
11. If I anticipated that a lot of results could come in, I'd probably introduce automatic paging into the FlatList (get more on scroll to end).
12. I would have come up with a better overall design (button positioning, text styles, loading animations, etc).
13. Tested on the Android emulator in addition to the iOS simulator.
14. Tested on devices (not just simulators) for both iOS and Android (I have a few devices at home)

<br />


# 🤙 Thank you!
#### Thank you so much for taking the time to read through this. Feel free to reach out if you have questions or would like me to walk through the code / my thought process more.