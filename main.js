window.addEventListener('load', function () {
    setTimeout(function() { 
        // Remove framer badge
        const element = document.getElementById("__framer-badge-container");
        if (element) {
            element.remove();
        }
        setTimeout(function() { document.title = "House Rental by Zephir"; }, 200);

        // Search bar functionality
        const queryElement = document.querySelector('[data-framer-name="Query"]');
        if (queryElement) {
            const queryText = queryElement.querySelector('p');
            const thumbnails = document.querySelectorAll('[data-framer-name="Product Thumbnail"]');

            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.style.fontSize = '26px';
            inputField.style.fontFamily = 'Nunito';
            inputField.style.fontWeight = '800';
            inputField.style.border = 'none';
            inputField.style.outline = 'none';
            inputField.style.width = '100%';

            queryElement.addEventListener('click', function() {
                if (queryText && queryText.textContent === "living room") {
                    queryElement.replaceChild(inputField, queryText);
                    inputField.focus();
                }
            });

            inputField.addEventListener('input', function() {
                const searchQuery = inputField.value.toLowerCase().trim();
                thumbnails.forEach(thumbnail => {
                    const productName = thumbnail.textContent.toLowerCase();
                    if (productName.includes(searchQuery)) {
                        thumbnail.style.display = 'block';
                    } else {
                        thumbnail.style.display = 'none';
                    }
                });
            });

            inputField.addEventListener('blur', function() {
                if (inputField.value === "") {
                    queryElement.replaceChild(queryText, inputField);
                    queryText.textContent = "living room";
                }
            });
        }

        // Sort by price
        let sortOption = document.querySelector('[data-framer-name="Best match"]');
        let arrow = document.querySelector('[data-framer-name="Arrow"]');
        let isPriceSelected = false;

        if (sortOption) {
            sortOption.addEventListener('click', function() {
                if (!isPriceSelected) {
                    window.location.href = './sorted.html';
                } else {
                    window.location.href = './main.html';
                }
            });

            if (window.location.pathname.endsWith('sorted.html')) {
                const span = sortOption.querySelector('span');
                if (span) {
                    span.textContent = 'Price';
                }
                if (arrow) {
                    arrow.style.transform = 'rotate(180deg)';
                }
                isPriceSelected = true;
            }
        }

        // Add to Cart
const listrentals = [];

// Function to add rentals
const addRental = (rentalName) => {
    if (!listrentals.includes(rentalName)) {
        listrentals.push(rentalName);
        console.log(listrentals);
        alert("L'article a bien été ajouté à votre panier.");
    }
};

// Correct order of rental names as per the new mapping
const rentalNames = ['penemille', 'blanko', 'momo', 'keeve', 'kappu', 'coombes', 'nille'];
const addToCartButtons = document.querySelectorAll('[data-framer-name="Add to Cart Button"]');

if (addToCartButtons.length === rentalNames.length) {
    addToCartButtons.forEach((button, index) => {
        button.style.cursor = 'pointer';
        button.addEventListener('click', () => {
            addRental(rentalNames[index]); 
        });
    });
} else {
    console.warn('The number of buttons does not match the rental names list.');
}

// Handle cart button click
const cartButton = document.querySelector('[data-framer-name="Cart Button"]');
if (cartButton) {
    cartButton.style.cursor = 'pointer';
    cartButton.addEventListener('click', function () {
        if (listrentals.length > 0) {
            const roomList = listrentals.join(',');
            const url = `https://epitech.fr.000.pe/eshop/house_rental/cart/?room=${roomList}`;
            window.location.href = url;
        } else {
            alert('Votre liste est vide.');
        }
    });
}


        // Price Range
        const items = [
            { price: 2600, elementClass: 'framer-1ufm0dk' },  // Coombes
            { price: 590, elementClass: 'framer-nacuq6' },    // Keeve Set
            { price: 950, elementClass: 'framer-o5kksf' },    // Nillè
            { price: 90, elementClass: 'framer-lpt5c9' },     // Blanko
            { price: 890, elementClass: 'framer-fxxtyv' },    // Momo
            { price: 120, elementClass: 'framer-njfraj' },    // Penemillè
            { price: 420, elementClass: 'framer-1m2o9lm' }    // Kappu
        ];

        const priceRangeContainer = document.querySelector('.framer-ysqzgs');
        if (priceRangeContainer) {
            priceRangeContainer.setAttribute('data-framer-name', 'Price Range');
            priceRangeContainer.setAttribute('name', 'Price Range');
            priceRangeContainer.innerHTML = '';

            const titleElement = document.createElement('div');
            titleElement.className = 'framer-swb4y2';
            titleElement.style.marginBottom = '10px';
            titleElement.innerHTML = '<p class="framer-text" style="--framer-font-size: 16px;"><span style="font-family: Nunito, sans-serif; font-size: 16px; letter-spacing: 0px; color: rgba(34, 35, 43, 1);">Price Range</span></p>';

            const sliderContainer = document.createElement('div');
            sliderContainer.className = 'framer-165kr8r';
            sliderContainer.style.position = 'relative';
            sliderContainer.style.height = '30px';
            sliderContainer.style.width = '90%';
            sliderContainer.style.margin = '0px auto';

            const track = document.createElement('div');
            track.style.position = 'absolute';
            track.style.top = '50%';
            track.style.width = '100%';
            track.style.height = '1px';
            track.style.backgroundColor = 'rgb(232, 232, 232)';
            track.style.transform = 'translateY(-50%)';

            const range = document.createElement('div');
            range.style.position = 'absolute';
            range.style.top = '50%';
            range.style.height = '1px';
            range.style.backgroundColor = 'rgb(26, 26, 26)';
            range.style.transform = 'translateY(-50%)';
            range.style.left = '0%';
            range.style.width = '98%';

            const leftKnob = document.createElement('div');
            leftKnob.style.position = 'absolute';
            leftKnob.style.top = '50%';
            leftKnob.style.width = '16px';
            leftKnob.style.height = '16px';
            leftKnob.style.borderRadius = '50%';
            leftKnob.style.backgroundColor = 'white';
            leftKnob.style.border = '1px solid rgb(26, 26, 26)';
            leftKnob.style.transform = 'translate(-50%, -50%)';
            leftKnob.style.cursor = 'pointer';
            leftKnob.style.left = '0%';

            const rightKnob = leftKnob.cloneNode(true);
            rightKnob.style.left = '98%';

            const createLabel = (text, align, side) => {
                const label = document.createElement('div');
                label.style.position = 'absolute';
                label.style.top = 'calc(100% + 5px)';
                label.style[side] = '0px';
                label.innerHTML = `<p class="framer-text" style="--framer-font-size: 13px; text-align: ${align};"><span style="font-family: Nunito, sans-serif; font-size: 13px; letter-spacing: 0px; color: rgba(34, 35, 43, 1);">${text}</span></p>`;
                return label;
            };

            const leftLabel = createLabel('$0', 'left', 'left');
            const rightLabel = createLabel('$10,000+', 'right', 'right');

            sliderContainer.appendChild(track);
            sliderContainer.appendChild(range);
            sliderContainer.appendChild(leftKnob);
            sliderContainer.appendChild(rightKnob);
            sliderContainer.appendChild(leftLabel);
            sliderContainer.appendChild(rightLabel);

            priceRangeContainer.appendChild(titleElement);
            priceRangeContainer.appendChild(sliderContainer);

            let minValue = 0;
            let maxValue = 9800;
            const totalRange = 10000;

            function updateSlider() {
                const leftPosition = (minValue / totalRange) * 100;
                const rightPosition = (maxValue / totalRange) * 100;
                
                leftKnob.style.left = `${leftPosition}%`;
                rightKnob.style.left = `${rightPosition}%`;
                range.style.left = `${leftPosition}%`;
                range.style.width = `${rightPosition - leftPosition}%`;

                filterItems();
            }

            function filterItems() {
                items.forEach(item => {
                    const element = document.querySelector(`.${item.elementClass}`);
                    if (element) {
                        if (item.price >= minValue && item.price <= maxValue) {
                            element.style.display = 'block';
                        } else {
                            element.style.display = 'none';
                        }
                    }
                });
            }

            let isDragging = null;

            function startDrag(e) {
                isDragging = e.target;
                document.addEventListener('mousemove', drag);
                document.addEventListener('mouseup', stopDrag);
            }

            function drag(e) {
                if (!isDragging) return;
                
                const rect = sliderContainer.getBoundingClientRect();
                const position = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                const value = Math.round(position * totalRange);
                
                if (isDragging === leftKnob) {
                    minValue = Math.max(0, Math.min(value, maxValue - 100));
                } else {
                    maxValue = Math.max(minValue + 100, Math.min(value, totalRange));
                }
                
                updateSlider();
            }

            function stopDrag() {
                isDragging = null;
                document.removeEventListener('mousemove', drag);
                document.removeEventListener('mouseup', stopDrag);
            }

            leftKnob.addEventListener('mousedown', startDrag);
            rightKnob.addEventListener('mousedown', startDrag);

            updateSlider();
        }

        // Make elements clickable
        const clickableElements = [
            '[name="Pagination/Number - Selected"]',
            '[data-framer-name="Magazine"]',
            '[data-framer-name="Shop"]',
            '[data-framer-name="Home"]',
            '[data-framer-name="Logo"]',
            '[data-framer-name="Login"]',
            '[data-framer-name="Pagination/Number - Unselected"]',
            '[data-framer-name="Filter Field"]',
            '[data-framer-name="Label"]',
            '[data-framer-name="Path"]'
        ];

        clickableElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            
            elements.forEach(element => {
                element.style.cursor = 'pointer';
                element.addEventListener('click', () => {
                    window.location.href = '#';
                });
            });
        });
        
    // Function to replace element with new HTML
    function replaceElement(className, newHTML) {
        // Find the element by its class name
        const element = document.querySelector(`.${className}`);
        if (element) {
            // Create a temporary container to hold the new HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newHTML;
            const newElement = tempDiv.firstElementChild;
            
            // Replace the old element with the new one
            element.replaceWith(newElement);
        }
    }

    // Replace the element with class "framer-zoojog"
    replaceElement('framer-zoojog', `
        <div class="framer-zoojog" data-framer-name="FIlter Field" name="FIlter Field">
            <select style="border: none; font-size: 16px; padding-right: 207px;">
                <option value="">Category</option>
                <option value="White">· Item</option>
                <option value="Black">· Set</option>
                <option value="Gray">· Interior</option>
                <option value="Yellow">· Exterior</option>
            </select>
            <div class="framer-197oydb" data-framer-name="Rectangle" name="Rectangle"></div>
        </div>
    `);

    // Replace the element with class "framer-wmh4wd"
    replaceElement('framer-wmh4wd', `
        <div class="framer-wmh4wd" data-framer-name="FIlter Field" name="FIlter Field">
            <select style="border: none; font-size: 16px; padding-right: 217px;">
                <option value="">Color</option>
                <option value="White">· White</option>
                <option value="Black">· Black</option>
                <option value="Gray">· Gray</option>
                <option value="Yellow">· Yellow</option>
            </select>
            <div class="framer-197oydb" data-framer-name="Rectangle" name="Rectangle"></div>
        </div>
    `);

    // Replace the element with class "framer-10utli"
    replaceElement('framer-10utli', `
        <div class="framer-10utli" data-framer-name="FIlter Field" name="FIlter Field">
            <select style="border: none; font-size: 16px; padding-right: 160px;">
                <option value="">Collection</option>
                <option value="Chair">· Chair</option>
                <option value="Lounge">· Lounge</option>
                <option value="Table &amp; Chairs">· Table &amp; Chairs</option>
                <option value="Armchair">· Armchair</option>
                <option value="Side Table">· Side Table</option>
                <option value="Shelves">· Shelves</option>
            </select>
            <div class="framer-197oydb" data-framer-name="Rectangle" name="Rectangle"></div>
        </div>
    `);


// Récupérer le <select> pour la collection
const collectionSelect = document.querySelector('.framer-10utli select');

if (collectionSelect) {
    // Récupérer tous les produits
    const thumbnails = document.querySelectorAll('[data-framer-name="Product Thumbnail"]');

    // Ajouter un écouteur d'événements sur le select pour détecter les changements
    collectionSelect.addEventListener('change', function() {
        const selectedValue = collectionSelect.value.toLowerCase().trim();  // Valeur sélectionnée (ex: 'lounge')

        thumbnails.forEach(thumbnail => {
            // Récupérer la catégorie associée au produit
            const categoryElement = thumbnail.querySelector('[data-framer-name="Category"]');
            if (categoryElement) {
                const categoryText = categoryElement.textContent.toLowerCase().trim();

                // Afficher ou masquer l'élément en fonction de la correspondance avec la valeur sélectionnée
                if (selectedValue === "" || categoryText.includes(selectedValue)) {
                    thumbnail.style.display = 'block';  // Afficher l'élément si la catégorie correspond
                } else {
                    thumbnail.style.display = 'none';   // Masquer l'élément si la catégorie ne correspond pas
                }
            }
        });
    });
}
    document.body.querySelectorAll('*').forEach(el => el.childNodes.forEach(node => { if (node.nodeType === Node.TEXT_NODE) node.textContent = node.textContent.replace(/Sajari\.com/g, 'Zephir.rf.gd') }));
    setTimeout(function() { console.clear(); console.log("Site chargé.");}, 400);
    }, 200);

    window.addEventListener('resize', function() {
        window.location.reload();
});

});