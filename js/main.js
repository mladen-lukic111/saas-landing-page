// FAQ 
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');

        if(!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupContentToShow = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // icon on/off

        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');


        // content to show/hide

        groupContentToShow.classList.toggle('open');


        // only show one FAQ group section

        const closedGroups = faqContainer.querySelectorAll('.faq-group');
        
        closedGroups.forEach((closedGroup) => {
            // of closed group is not the one we're clicking
            if(closedGroup !== group ) {
                const closedGroupBody = closedGroup.querySelector('.faq-group-body');
                const closedIcon = closedGroup.querySelector('.faq-group-header i');

                closedGroupBody.classList.remove('open');
                closedIcon.classList.remove('fa-minus');
                closedIcon.classList.add('fa-plus');
            }
        });
    });
});

// Mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});