
    // Country selector functionality
    const countrySelector = document.getElementById('country-selector');
    const countryImage = document.querySelector('.images-of-country');

    countrySelector.addEventListener('change', function() {
        const selectedCountry = countrySelector.value;
        switch (selectedCountry) {
            case 'us':
                countryImage.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg';
                break;
            case 'uk':
                countryImage.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_Kingdom.svg';
                break;
            case 'in':
                countryImage.src = 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg';
                break;
            case 'au':
                countryImage.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg';
                break;
            default:
                countryImage.src = '';
        }
    });

    // Cart count functionality
    let cartCount = 0;
    const cartButton = document.querySelector('.cart');
    const cartCountText = document.querySelector('.cart-count');

    cartButton.addEventListener('click', function() {
        cartCount++;
        cartCountText.textContent = `Cart (${cartCount})`;
    });

    // Search filter functionality
    const searchInput = document.querySelector('.search_input');
    const searchButton = document.querySelector('.search_icon');
    const optionsValue = document.getElementById('options_value');

    searchButton.addEventListener('click', function() {
        const searchQuery = searchInput.value.trim();
        const category = optionsValue.value;

        if (searchQuery) {
            alert(`Searching for "${searchQuery}" in category "${category || 'All'}"`);
        } else {
            alert('Please enter a search query');
        }
    });

    // Toggle panel menu
    const menuButton = document.querySelector('.panel-all');
    const menuPanel = document.querySelector('.customer-services');

    menuButton.addEventListener('click', function() {
        menuPanel.classList.toggle('show');
    });

