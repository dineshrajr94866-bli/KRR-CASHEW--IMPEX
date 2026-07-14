function sendToWhatsApp(e){
  e.preventDefault();
  var name = document.getElementById('name').value.trim();
  var company = document.getElementById('company').value.trim();
  var email = document.getElementById('email').value.trim();
  var country = document.getElementById('country').value.trim();
  var grade = document.getElementById('grade').value;
  var qty = document.getElementById('qty').value.trim();
  var message = document.getElementById('message').value.trim();

  var lines = [
    "New inquiry from the KRR Cashew Impex website:",
    "",
    "Name: " + (name || "-"),
    "Company: " + (company || "-"),
    "Email: " + (email || "-"),
    "Country: " + (country || "-"),
    "Grade of interest: " + (grade || "-"),
    "Quantity (MT): " + (qty || "-"),
    "Message: " + (message || "-")
  ];

  var text = encodeURIComponent(lines.join("\n"));
  var url = "https://wa.me/918220070867?text=" + text;
  window.open(url, "_blank");
  return false;
}
