const disableSetup = true;
var topBarCenterText = `VKCC`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  ["2196F3", "Hamclock", "https://hamclock.ozoz.eu.org:8443/live.html", "1"],
  ["2196F3", "CONTEST", "https://contest.run/#/", "1",],
  ["2196F3", "RBN", "https://reversebeacon.net/main.php?zoom=1.07,149.44,2.00&rows=100&spotters=1&max_age=5,hours&spotted_call=vk&hide=distance_mi", "1",],
  ["2196F3", "DX HEAT", "https://dxheat.com/dxc/", "1"],
  ["2196F3", "Solar Conditions", "https://solar.w5mmw.net/", "1"],
  ["2196F3", "Windy", "https://windy.app/map/#c=-38.2231,145.16252&z=10", "1", "R"],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  ["2196F3", "WEATHER", "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=-38.3158&lon=145.6952&zoom=8", "1", "R"],
  ["2196F3", "WINDS", "https://earth.nullschool.net/#current/wind/surface/level/grid=on/equirectangular=-221.62,-29.01,1276/loc=144.946,-37.878", "1", "R"],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aIMG = [
  [
    "MUFD",
    "https://prop.kc2g.com/renders/current/mufd-normal-now.svg",
  ],
  [
    "F0F2",
    "https://prop.kc2g.com/renders/current/fof2-normal-now.svg",
  ],
  [
    "SOLAR",
    "https://services.swpc.noaa.gov/images/swx-overview-small.gif",
  ],
  [
    "HAP Mel",
    "https://www.sws.bom.gov.au/Images/HF%20Systems/Australasia/HAP%20Charts/Melbourne.gif",
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  [    
    "Solar Wind Prediction",
    "https://services.swpc.noaa.gov/images/animations/enlil/latest.jpg",
  ],
  [
    "Solar Wind ACE MAG",
    "https://services.swpc.noaa.gov/images/ace-mag-swepam-24-hour.gif",
  ],
  [
    "SYNOPTIC",
    "https://data.weatherzone.com.au/map-builder/synoptic/au/synoptic-au-1280x720.jpg",
  ],
  [
    "HF Propagation",
    "https://www.hamqsl.com/solar101vhf.php",
  ],
  [
    "10m",
    "https://img.propagation.dr2w.de/australia/10M/dr2w_animation_10M.gif",
  ],
  [
    "15m",
    "https://img.propagation.dr2w.de/australia/15M/dr2w_animation_15M.gif",
  ],
  [
     "20m", 
     "https://img.propagation.dr2w.de/australia/20M/dr2w_animation_20M.gif",
  ],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  11200,10000,11000,10100,
  10200,10500,10300,10600,
  30400,60700,60900,10800
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
var aRSS = [
  ["  ", 1200],           // Example RSS feed, refresh every 60 minutes
  ["  ", 1200], // Example Atom feed, refresh every 120 minutes
  ];
