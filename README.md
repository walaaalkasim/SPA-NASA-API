# SPA-NASA-API
see the project on:
https://space-pr0ject.netlify.app/

**overview :**
 # NASA on Map
  * in this SPA you can see data provided by NASA APIs https://api.nasa.gov/
      * The Earth Observatory Natural Event Tracker (EONET) using this api: https://eonet.gsfc.nasa.gov/api/v2.1/events
      * The Earthquakes tracker using this API : https://earthquake.usgs.gov/fdsnws/event/1/count?format=geojson (not Nasa Api)
      * One of the most popular websites at NASA is the Astronomy Picture of the Day using : https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
      * Use this API to access the NASA Image and Video Library site at images.nasa.gov :https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
 # ALAN AI
  * I also integrate voice assistant with the application to help doing small tasks like : increase font of a page or dcrease it using vocal command
  * Alan AI uses its own studio where you can learn how to add voice assistant to your project read more : https://alan.app/docs/
  * or watch https://youtu.be/j__wtb5CDCM
  
**walking through pages**

 * **Home**: where you find navigate buttons , moving to 
 * **Map** : you'll get a map with 6 buttons on left side each button can show differnet natrual events on earth such as :
    * Wildfire, Volcano, Sea & Lake Ice, Storm, Earthquakes, Craters. 
    * those are data provided by nasa api
    * except for Earhquake which are provided by : https://earthquake.usgs.gov/fdsnws/event/1/count?format=geojson and
    * Craters are showing popular Crater on Earth data from :https://en.wikipedia.org/wiki/List_of_impact_craters_on_Earth
 * **Astronomy** :presents picture of the day with some text to explain it. you can browse the uploads from previous days too.
 * **Nasa Media** :photos, vedios and news provided by: https://images-api.nasa.gov/search?q=moon&media_type=video&page=1
 * **Impact Craters** :chart shows how old and wide are the oldest and biggest Craters on Earth,You can display the data as line or bar graph
