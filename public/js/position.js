mapboxgl.accessToken = 'pk.eyJ1IjoiY2FycmllLXhpYSIsImEiOiJja3Z0NDVtMzczZWpnMm9tdG92eHgxZXo5In0.DQ9J_C1Np1kl0Slf4EVoMA';

$(document).ready(function() {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [0, 0],
    zoom: 2
  });
  
  $.getJSON('./pf/202306.json', function(data) {
    $.each(data, function(i, ship) {
      let trackImg = '';
      if (ship.MMSI !== 0 && !isNaN(ship.MMSI)) {
        trackImg = `<button type="button" class="btn btn-primary my-1 track-button" data-mmsi="${ship.MMSI}">Track</button>`;
      }
    
      $('#ships-table tbody').append(`
        <tr>
          <td>${ship.House_No}</td>
          <td>${ship.POL}</td>
          <td>${ship.POD}</td>
          <td>${ship.ETD}</td>
          <td>${ship.ETA}</td>
          <td>${ship.Vessel}</td>
          <td>${ship.MMSI}</td>
          <td>${trackImg}</td>
        </tr>
      `);
    });

    // Initialize datatable after data load
    $('#ships-table').DataTable({
      scrollY: '500px',
      scrollCollapse: true,
      paging: false,
    });
  });

$(document).on('click', '.track-button', function() {
  const mmsi = $(this).data('mmsi');
  const url = `https://www.econdb.com/maritime/vessel/async/${mmsi}/?lb=1685803241448&ub=1689000041448`;

  $.getJSON(url, function(data) {
    // remove previous marker and popup if exist
    if (map.getLayer('marker')) {
      map.removeLayer('marker');
      map.removeSource('marker');
    }
      
      const overlay = new mapboxgl.Popup({
      closeButton: true,
      closeOnClick: false,
      anchor: 'top-left',
      offset: [0, -10],
      className: 'custom-popup'
    });

    // get the latest position
  const currentDate = new Date();
  
// Get only the positions up until now
const positions = data.positions.filter(position => {
  const positionDate = new Date(position.ref_period);
  return positionDate <= currentDate;
});
  
// Get only the schedules up until now
  const schedules = data.schedules.filter(schedule => {
  const scheduleDate = new Date(schedule.actual_start);
  return scheduleDate <= currentDate;
});
  
// Get the latest position and schedule
const latestPosition = positions[positions.length - 1];
const latestSchedule = schedules[schedules.length - 1];
      
    // Create popup content
let popupContent = `

<div class="col-12">
<div class="card">
    <h5>${data.data.Name}</h5>
    <table>
      <tr>
        <th>Update</th>
        <td>${data.data.last_seen}</td>
      </tr>
      <tr>
        <th>Next Port</th>
        <td>${latestSchedule.next_stop}</td>
      </tr>
      <tr>
        <th>Next ETA</th>
        <td>${latestSchedule.next_eta}</td>
      </tr>
      <tr>
        <th>Delay</th>
        <td>${latestSchedule.delay}</td>
      </tr>
    </table>
    </div>
    </div>
`;

if (data.trip) {
  let trip = data.trip;
  let percent = Number(trip.percent.replace('%', ''));  // remove the '%' character and convert to a number

  popupContent += `
<div class="col-12">
<div class="card">
    <h5>Trip Information</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item px-4 pb-4">
        <p class="mb-2 fw-bold">Progress
        <span class="float-end">${percent} %</span></p>
        <div class="progress progress-sm">
        <div class="progress-bar" role="progressbar" aria-valuenow=${percent}; aria-valuemin="0" aria-valuemax="100" style="width:${percent} %;></div>
        </div>
        </li>
        </ul>
       <h8>Origin: ${trip.Origin_iso2}</h8>
       <h8>Code: ${trip.Origin_locode}</h8>
       <h8>Dest: ${trip.Destination_iso2}</h8>
       <h8>Dest code:${trip.Destination_locode}</h8>
    </div>
    </div>
 
  `;
}



    overlay.setLngLat([latestPosition.lon, latestPosition.lat])
           .setHTML(popupContent)
           .addTo(map); 

    // update the map
    map.flyTo({
      center: [latestPosition.lon, latestPosition.lat],
      zoom: 5
    });

    // Create a DOM element for the marker
    const el = document.createElement('div');
    el.className = 'custom-marker';
    el.style.backgroundImage = 'url(/icons/marker/cargomarker.png)';
    el.style.width = '25px';
    el.style.height = '25px';
    el.style.backgroundSize = '100%';

    // create a popup
    var popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(popupContent);

    // create marker
    new mapboxgl.Marker(el) // Use the custom DOM element
      .setLngLat([latestPosition.lon, latestPosition.lat])
      .addTo(map);
  });
});
});




