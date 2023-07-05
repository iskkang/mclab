// Fetch JSON data
fetch('./pf/202306.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#mmsi-table tbody');

        if (!data || data.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="8"><p>No ship data</p></td></tr>';
        } else {
            let tableContent = '';
            data.forEach((ship) => {
                tableContent += `
                    <tr> 
                        <td><a href="#" class="mmsi-link" data-mmsi="${ship.MMSI}">${ship.MMSI}</a></td>
                        <td>${ship.House_No}</td>
                        <td>${ship.Customer_Name}</td>
                        <td>${ship.POL}</td>
                        <td>${ship.POD}</td>
                        <td>${ship.F_DEST}</td>
                        <td>${ship.Vessel}</td>
                        <td>${ship.MMSI}</td>
                    </tr>
                `;
            });
            tableBody.innerHTML = tableContent;
            addMmsiLinkListeners();
        }
    })
    .catch(error => console.error('Error:', error));

function addMmsiLinkListeners() {
    const mmsiLinks = document.getElementsByClassName('mmsi-link');
    for (let i = 0; i < mmsiLinks.length; i++) {
        mmsiLinks[i].addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action
            const mmsi = this.getAttribute('data-mmsi'); // Get the MMSI from the data-mmsi attribute
            fetchAndShowPosition(mmsi); // Fetch and show position
        });
    }
}

// You also need to have the fetchAndShowPosition function here or in another JavaScript file that is included in your HTML.
