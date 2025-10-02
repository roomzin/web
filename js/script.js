// Toggle visibility of a dropdown menu
const toggleDropdown = (dropdown, menu, isOpen) => {
    dropdown.classList.toggle("open", isOpen);
    menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
};

// Close all open dropdowns
const closeAllDropdowns = () => {
    document.querySelectorAll(".dropdown-container.open").forEach((openDropdown) => {
        toggleDropdown(openDropdown, openDropdown.querySelector(".dropdown-menu"), false);
    });
};

// Click event to all dropdown toggles
document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
    dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();

        const dropdown = dropdownToggle.closest(".dropdown-container");
        const menu = dropdown.querySelector(".dropdown-menu");
        const isOpen = dropdown.classList.contains("open");

        closeAllDropdowns(); // Close all open dropdowns
        toggleDropdown(dropdown, menu, !isOpen); // Current Toggle dropdown visibility
    });
});

document.querySelectorAll(".top-link").forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
        e.preventDefault();
        closeAllDropdowns(); // Close all open dropdowns
    });
});

// Click event to sidebar toggle buttons
document.querySelectorAll(".sidebar-toggler, .sidebar-menu-button").forEach((button) => {
    button.addEventListener("click", () => {
        closeAllDropdowns(); // Close all open dropdowns
        document.querySelector(".sidebar").classList.toggle("collapsed"); // Toggle collapsed class on sidebar
    });
});

// Default Collapse Sidebar for small screens
if (window.innerWidth <= 1024) document.querySelector(".sidebar").classList.add("collapsed");


// menu
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const allSections = document.querySelectorAll('section');

    // Hide all sections initially
    allSections.forEach(section => section.style.display = 'none');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target section ID from link href or data attribute
            const targetId = this.getAttribute('href').replace('#', '') ||
                this.getAttribute('data-target');

            if (this.classList.contains('no-section')) {   // ← add this guard
                e.preventDefault();                          // keep dropdown open
                return;                                      // do nothing else
            }

            if (targetId) {
                // Hide all sections
                allSections.forEach(section => section.style.display = 'none');

                // Show target section
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = 'block';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        });
    });

    // Show first section by default
    if (allSections.length > 0) {
        allSections[0].style.display = 'block';
    }
});


/* --------------- */
document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tabs ul li a');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to show a specific tab and hide others
    function showTab(tabId) {
        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });

        // Remove active styling from all tab links
        tabLinks.forEach(link => {
            link.classList.remove('border-gray-300', 'text-gray-800');
            link.classList.add('text-gray-600', 'border-transparent');
        });

        // Show the selected tab content
        const activeTab = document.getElementById(tabId);
        if (activeTab) {
            activeTab.classList.remove('hidden');
        }

        // Style the active tab link
        const activeLink = document.querySelector(`a[href="#${tabId}"]`);
        if (activeLink) {
            activeLink.classList.add('border-gray-300', 'text-gray-800');
            activeLink.classList.remove('text-gray-600', 'border-transparent');
        }
    }

    // Add click event listeners to tab links
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.getAttribute('href').substring(1); // Remove '#'
            showTab(tabId);
        });
    });

    // Show the first tab by default
    if (tabLinks.length > 0) {
        showTab(tabLinks[0].getAttribute('href').substring(1));
    }
});

