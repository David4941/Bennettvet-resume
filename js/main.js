// David Bennett, DVM — resume site behavior

// Current year in footer
document.addEventListener('DOMContentLoaded', function () {
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
});

// "Download PDF" -> opens the browser print dialog.
// The print stylesheet renders a clean, ATS-friendly layout; the user
// chooses "Save as PDF" as the destination.
var btn = document.getElementById('download-pdf');
if (btn) {
  btn.addEventListener('click', function () { window.print(); });
}
