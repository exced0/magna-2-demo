// Assuming JSON data is stored in a variable called jsonData
const jsonData = [
    {
      "shortName": "א049",
      "Title": "דוח מיידי על תוצאות אסיפה",
      "delay": "",
      "isPublic": true
    },
    {
      "shortName": "א100",
      "Title": "דוח מיידי על שינוי פרטים",
      "delay": "",
      "isPublic": true
    },
    {
      "shortName": "א101",
      "Title": "דוח מיידי על שינוי שם תאגיד",
      "delay": "",
      "isPublic": true
    },
    {
      "shortName": "א121",
      "Title": "דוח מיידי מטעם נאמן לתעודות התחייבות",
      "delay": "",
      "isPublic": true
    },
    {
      "shortName": "א206",
      "Title": "התכתבות עם רשות ניירות ערך",
      "delay": "",
      "isPublic": false
    },
    {
      "shortName": "א300",
      "Title": "שינוי פרטי מורשה חתימה אלקטרונית",
      "delay": "",
      "isPublic": false
    },
    {
      "shortName": "א301",
      "Title": "בקשה להוספת/גריעת מורשה חתימה אלקטרונית לגורם מדווח",
      "delay": "",
      "isPublic": false
    },
    {
        "shortName": "א311",
        "Title": "בקשה לחידוש תוקף רישומו של מורשה חתימה אלקטרונית לגורם מדווח",
        "delay": "",
        "isPublic": false
    },
    {
        "shortName": "א312",
        "Title": "התכתבות עם רשות ניירות ערך בעניין הפקת אישור / הארכת תוקף לאישור למורשה חתימה אלקטרונית למגנא",
        "delay": "",
        "isPublic": false
    },
    {
        "shortName": "א460",
        "Title": "דוח מיידי על אסיפה",
        "delay": "דיווח מושהה (20 דקות)",
        "isPublic": true
    },
    {
        "shortName": "א999",
        "Title": "טופס בדיקה",
        "delay": "",
        "isPublic": false
    }
  ];
  
const searchInput = document.getElementById("search-input");
const publicTableBody = document.getElementById("public-table-body");
const nonPublicTableBody = document.getElementById("non-public-table-body");

function generateTableRows(data, tableBody) {
  tableBody.innerHTML = "";
  data.forEach(function(item) {
    const row = document.createElement("tr");
    const shortNameCell = document.createElement("td");
    const titleCell = document.createElement("td");

    shortNameCell.textContent = item.shortName;
    titleCell.textContent = item.Title;

    if (item.delay !== "") {
        const delaySpan = document.createElement("span");
        delaySpan.textContent = item.delay;
        delaySpan.id = "report-delay";
        titleCell.appendChild(delaySpan);
    }

    row.appendChild(shortNameCell);
    row.appendChild(titleCell);
    tableBody.appendChild(row);

    // Add click event listener to the table row
    row.addEventListener("click", function() {
        if(item.shortName === "א999"){
            showSection("form999");
        }

        if(item.shortName === "א460"){
            showSection("form460");
        }
    });

  });
}

function filterTables() {
  const searchValue = searchInput.value.trim().toLowerCase();
  const publicFilteredData = jsonData.filter(
    item => item.isPublic && item.shortName.toLowerCase().includes(searchValue)
  );
  const nonPublicFilteredData = jsonData.filter(
    item => !item.isPublic && item.shortName.toLowerCase().includes(searchValue)
  );

  generateTableRows(publicFilteredData, publicTableBody);
  generateTableRows(nonPublicFilteredData, nonPublicTableBody);
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.getElementsByTagName("section");
    for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    
    // Show the specified section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.style.display = "block";
    }
  }

searchInput.addEventListener("input", filterTables);

generateTableRows(jsonData.filter(item => item.isPublic), publicTableBody);
generateTableRows(jsonData.filter(item => !item.isPublic), nonPublicTableBody);