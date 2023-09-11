Hattrick League Search script
=============================

Hattrick script utility to search for last positioned leagues for Argentina's VI division (1024 with the starting id of #26313). When you are on one of the last 3 divisions of your country, you can change your team to weaker leagues in order to access a more competitive league for your team, or serve for another purposes like make a training plan for a season without getting worried about losing your positions. Leave a like if this helps you!

### Tech notes

Currently is implementing a delayed call to avoiding timeouts from Hattrick site, so it could take some time to fetch at lower divions (1024+ leagues). Added a timeout limit to fix this (still needs more work).

### TODO

- Make a script for choosing a country and a division and change it dinamically.
- Make the fetching stop when first N leagues are already found.