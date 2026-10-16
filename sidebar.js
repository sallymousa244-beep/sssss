
document.addEventListener("DOMContentLoaded", () => {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const dashboardLayout = document.querySelector(".dashboard-page");

  if (!sidebarToggle || !dashboardLayout) return;

  sidebarToggle.type = "button";

  sidebarToggle.addEventListener("click", (event) => {
    event.preventDefault();

    const isCollapsed =
      dashboardLayout.classList.toggle("sidebar-collapsed");

    sidebarToggle.setAttribute(
      "aria-expanded",
      String(!isCollapsed)
    );

    sidebarToggle.setAttribute(
      "aria-label",
      isCollapsed ? "إظهار القائمة" : "إخفاء القائمة"
    );

    sidebarToggle.title = isCollapsed
      ? "إظهار القائمة"
      : "إخفاء القائمة";

    sidebarToggle.textContent = isCollapsed ? "☰" : "✕";
  });
});
