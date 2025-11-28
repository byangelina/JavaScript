
// esto es para el menu de la pagina (todavia no lo ocupo)

function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('overlay');
            
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        }

        function showPage(pageName) {
            const allPages = document.querySelectorAll('.page-section');
            allPages.forEach(page => page.classList.remove('active'));
            
            const selectedPage = document.getElementById('page-' + pageName);
            selectedPage.classList.add('active');
            
            const allLinks = document.querySelectorAll('.page-link');
            allLinks.forEach(link => link.classList.remove('active'));
            event.target.closest('.page-link').classList.add('active');
            
            if (window.innerWidth <= 768) {
                toggleSidebar();
            }
            
            window.scrollTo(0, 0);
        }

        document.getElementById('overlay').addEventListener('click', toggleSidebar);