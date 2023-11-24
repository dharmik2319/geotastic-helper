# Geotastic Helper

A userscript to ""help"" you win in [Geotastic](https://www.geotastic.net).

Works in all modes where you are supposed to pinpoint a location on a guess map from StreetView, i.e. Local mode, Online lobbies, and even matchmaking.

## Installation

- First of all, you will need to install a userscript manager, such as [Violentmonkey](https://violentmonkey.github.io/) (It's free and open source!)

- Go to your preferred userscript manager's dashboard and choose the option to install a new script (usually indicated by a '+' sign).
- Choose install from URL and enter
```
https://github.com/dharmik2319/geotastic-helper/raw/master/geotastic-helper.user.js
```
and you're good to go.

## Usage

- From the Geotastic homepage, choose any mode which you wish to play, whether online or offline mode. 

> Note that this script won't work with flag modes. Yet, at the least.

- After starting the game, you have 3 options:

#### 1 - Simply show the Coordinates of the target location, using the javascript alert() function.

#### 2 - Open the target coordinates in Google Maps in another tab, to cross reference with the guess map.

#### 3 - The most useful one; place a marker at the exact coordinates, but this will not be counted as a real marker, so you need to manually place a real marker as close to it as possible in order to finish your guess.
> Please remember the marker placed by the script will not be considered a "real" one, i.e. the "Finish Guess" button will be greyed out.
> In the next round, the fake marker will be at the same Cooordinates. You need to press 3 again to update its location.

- You can simply press 1, 2 or 3 to use the script.

## Acknowledgements

- There is next to none documentation for cheating in Geotastic. The only thing I could find was [this](https://github.com/therealOri/GeoEye), which, not meaning to discredit the author, was very manual. Regardless, it inspired me and gave me the knowledge of the exact API request that I had to intercept. I have also contributed back to it in order to improve it.

- The most major help I got was from [here](https://github.com/0x978/GeoGuessr_Resolver). Though made for Geoguessr, and not Geotastic, a major portion of the code was reused from here with substantial editing, in order to adapt the script to Geotastic.

- The idea of hijacking the `google.maps` module was given to me by the Bing AI, though it was filled with problems which had to be fixed.

## Disclaimer

- This completely ruins the fun of the game. Part of the reason I built this was for learning purposes, and also because it did not exist.

