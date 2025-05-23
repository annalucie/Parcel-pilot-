
function trackPackage() {
    const code = document.getElementById('trackingCode').value.trim();
    const statusBox = document.getElementById('status');

    if (!code) {
        statusBox.textContent = 'Please enter a tracking code.';
        return;
    }

    const mockStatus = {
        'ABC123': 'In Transit',
        'XYZ789': 'Delivered',
        'LMN456': 'Out for Delivery',
    };

    const status = mockStatus[code.toUpperCase()] || 'Tracking code not found.';
    statusBox.textContent = `Status: ${status}`;
}
