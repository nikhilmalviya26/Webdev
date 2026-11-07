const LOCAL_STORAGE_DATA_KEY = "PasswordManagerData";

function ClearForm() {
  document.getElementById("websiteName").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
  document.getElementById("cfPassword").value = "";
}

function SavePassword() {
  const wn = document.getElementById("websiteName").value.trim();
  const un = document.getElementById("userName").value.trim();
  const ps = document.getElementById("password").value;
  const cps = document.getElementById("cfPassword").value;

  if (!wn || !un || !ps || !cps) {
    alert("All feilds Required");
    return;
  }

  if (ps !== cps) {
    alert("Password and Confirm Password Not Match");
    return;
  }

  const newPacket = {
    id: Math.floor(Math.random() * 100000),
    websiteName: wn,
    userName: un,
    password: ps,
    cfPassword: cps,
  };

  const localStorageData =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

  // if (localStorage.getItem(LOCAL_STORAGE_DATA_KEY).length > 0) {
  //   localStorageData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY));
  //   localStorageData.push(newPacket);
  // } else {
  //   localStorageData.push(newPacket);
  // }

  localStorageData.push(newPacket);

  localStorage.setItem(
    LOCAL_STORAGE_DATA_KEY,
    JSON.stringify(localStorageData),
  );

  RenderData();
  ClearForm();
}

function RenderData() {
  const localStorageData =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

  const TableBody = document.getElementById("dataTable");

  if (localStorageData <= 0) {
    TableBody.innerHTML = `
     <tr id="emptyState">
            <td colspan="5">No Saved Password Found</td>
          </tr>
    `;
    return;
  }

  TableBody.innerHTML = "";

  localStorageData.forEach((element, index) => {
    const TR = document.createElement("tr");
    TR.innerHTML = `
            <td>${index + 1}</td>
            <td>${element.websiteName}</td>
            <td>${element.userName}</td>
            <td>${element.password}</td>
            <td>
              <button class="btn btn-danger btn-sm" onclick="DeleteItem(${element.id})">
                Delete
              </button>
            </td>
    `;

    TableBody.appendChild(TR);
  });
}

RenderData();

function DeleteItem(ItemID) {
  const localStorageData =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

  if (localStorageData <= 0) {
    alert("Nothing to Delete");
    return;
  }

  alert(`Data deleted with item ID :  ${ItemID}`);

  const newData = localStorageData.filter((item) => item.id !== ItemID);

  localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(newData));

  RenderData();
}