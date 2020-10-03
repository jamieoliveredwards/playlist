# PlaylistApp

## To Start Application

### Prerequisites
* node.js & npm - https://nodejs.org/
* Angular CLI - ```npm i -g @angular/cli```

### To Start Development Server
```npm start``` from project root

## Overall Approach
To start I looked at the structure of the API response from *https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json*. Determining that although one single playlist is return, the structure indicates any number of collections is not limited. Using this I produced the following requirements:

1. A user should be presented with a list of playlists grouped by collection
2. Clicking a playlist should present the user with the playlist detail, including an external link
3. A user should be able to mark a playlist as a favourite

## Problems
The API returns a list of collections with the playlists as a nested array, if multiple collections contained the same playlist any interaction with a playlist in one container would not be reflected across the other instances of that playlist (in one or more other collections).

The data held against each playlist and collection is very basic, without additional information the visual design of the application is limited.

## Solutions
Using a redux-like pattern in the PlaylistService playlists are separated from their collections and a single instance of each playlist is stored in the service. As the service is a singleton instance (provided in root) any components or services throughout the application will have access to the same single source of truth.

To allow grouping by collection the playlist items are mapped back into the collection objects, however now each playlist will update once the single instance of the playlist is updated. The functionality of requirement 3 demonstrates the application of this.

With only a single type of entity being handled in the application (playlists), the approach of a singleton service is sufficient. If further entities were to be handled a package such as Redux or NGRX would be more suitable.

Starting with a basic design for a mobile viewport and sizing up to a desktop window while applying changes on CSS media queries I came to the implemented design solution. If further information was available for each playlist a template to the right of the list on wider displays would be more visually appealing and provide a better user experience.

## Technologies
* Angular 9
* Angular Material
  * To provide structured theming throughout the application

## Testing
A simple unit test is implemented for the playlist service. Test.ts has been amended to only target this directory for demonstration purposes.

Further testing coverage is to be implemented.

## Potential Improvements
* NGRX for state management (should functionality increase)
* Animations, specifically animating the entry of the child router-outlet in the playlist component to slide in from below.
* Saving of user favourite data
* Improved test coverage
