document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.getElementById('tooltip');

    function updateTooltip() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const userAgent = navigator.userAgent;
        let deviceType = 'desktop';

        if (width < 620) {
            deviceType = 'smartphone';
        } else if (width < 920) {
            deviceType = 'tablet';
        }

        tooltip.innerHTML = `
            <p>Resolution: ${width}x${height}</p>
            <p>Device: ${deviceType}</p>
            <p>User Agent: ${userAgent}</p>
        `;

        if (deviceType != 'desktop') {
            tooltip.innerHTML = '';
            tooltip.style.display = 'none';
            return;
        }
    }

    updateTooltip();

    window.addEventListener('resize', updateTooltip);
});
