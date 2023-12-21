var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

var sitesBook = [];
if (localStorage.getItem("sites") != null) {
  sitesBook = JSON.parse(localStorage.getItem("sites"));
  displaySite();
}
function addSite() {
  if (validationName() === true && validationUrl() == true) {
    var site = {
      name: siteName.value,
      url: siteUrl.value,
    };
    sitesBook.push(site);
    localStorage.setItem("sites", JSON.stringify(sitesBook));
    displaySite();
    clearForm();
  } else {
    document.getElementById('layer').style.cssText="display: block; "
  }
}
function displaySite() {
  trs = ``;
  for (var i = 0; i < sitesBook.length; i++) {
    trs += `  <tr>
  <td>${i + 1}</td>
  <td>${sitesBook[i].name}</td>
  <td><a href="${
    sitesBook[i].url
  }" target="_blank"><button class="btn btn-success"><i class="fa-solid fa-eye"></i> Visit</button></a></td>
  <td><button onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i> Delete</button></td>
 </tr>
  `;
  }
  document.getElementById("tbody").innerHTML = trs;
}
function clearForm() {
  siteName.value = "";
  siteUrl.value = "";
}
function deleteSite(index) {
  sitesBook.splice(index, 1);
  localStorage.setItem("sites", JSON.stringify(sitesBook));
  displaySite();
}

function validationUrl() {
  var regex = /^(https:\/\/)?(http:\/\/)/i;
  return regex.test(siteUrl.value);
}

function validationName() {
  var regexName = /^[A-Z][a-z]{3,}$/g;
  return regexName.test(siteName.value);
}

function closeMessage(){
  document.getElementById('layer').style.cssText="display: none;"
}
