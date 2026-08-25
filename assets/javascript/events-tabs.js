// Events page: open the tab named in the URL hash (#seminars / #conferences)
// and keep the hash in sync when the user switches tabs.
document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('#eventTabs [data-bs-toggle="tab"]');
  if (!tabs.length || !window.bootstrap) return;
  var target = location.hash && document.querySelector('#eventTabs [data-bs-target="' + location.hash + '"]');
  if (target) bootstrap.Tab.getOrCreateInstance(target).show();
  tabs.forEach(function (el) {
    el.addEventListener('shown.bs.tab', function (e) {
      history.replaceState(null, '', e.target.getAttribute('data-bs-target'));
    });
  });
});
