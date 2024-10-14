document.querySelectorAll('.plus-btn').forEach(btn => 
    btn.onclick = () => {
        let input = btn.parentNode.querySelector('input');
        input.value = parseInt(input.value) + 1;
        updateTotalPrice(btn);
    }
);

document.querySelectorAll('.minus-btn').forEach(btn => 
    btn.onclick = () => {
        let input = btn.parentNode.querySelector('input');
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
            updateTotalPrice(btn);
        }
    }
);

document.querySelectorAll('.delete-btn').forEach(btn => 
    btn.onclick = () => {
        btn.closest('.item').remove();
        updateSubtotal();
    }
);

document.querySelectorAll('.like-btn').forEach(btn => 
    btn.onclick = () => btn.classList.toggle('is-active')
);

document.querySelectorAll('.quantity input').forEach(input => {
    input.addEventListener('input', (e) => {
        const btn = e.target.closest('.quantity').querySelector('.plus-btn');
        updateTotalPrice(btn);
    });
});

function updateTotalPrice(btn) {
    const item = btn.closest('.item');
    const price = parseFloat(item.dataset.price);
    const quantity = parseInt(item.querySelector('input').value);
    const totalPriceElem = item.querySelector('.total-price');
    const totalPrice = price * quantity;

    totalPriceElem.textContent = `$${totalPrice}`;
    updateSubtotal();
}

function updateSubtotal() {
    const subtotalElem = document.querySelector('.subtotal .total-price');
    let total = 0;

    document.querySelectorAll('.item').forEach(item => {
        const totalPriceElem = item.querySelector('.total-price');
        const priceValue = parseFloat(totalPriceElem.textContent.replace('$', ''));
        total += priceValue;
    });

    subtotalElem.textContent = `$${total}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const rooms = urlParams.get('room') ? urlParams.get('room').split(',') : [];

    const items = document.querySelectorAll('.shopping-cart .item');

    items.forEach(item => {
        const itemName = item.querySelector('.description span').textContent.trim();
        let shouldDisplay = false;

        if (rooms.includes('coombes') && itemName === 'Coombes') {
            shouldDisplay = true;
        } else if (rooms.includes('nille') && itemName === 'Nillè') {
            shouldDisplay = true;
        } else if (rooms.includes('momo') && itemName === 'Momo') {
            shouldDisplay = true;
        } else if (rooms.includes('keeve') && itemName === 'Keeve Set') {
            shouldDisplay = true;
        } else if (rooms.includes('kappu') && itemName === 'Kappu') {
            shouldDisplay = true;
        } else if (rooms.includes('penemille') && itemName === 'Penemillè') {
            shouldDisplay = true;
        } else if (rooms.includes('blanko') && itemName === 'Blanko') {
            shouldDisplay = true;
        }

        if (shouldDisplay) {
            console.log(`Article conservé : ${itemName}`);
        } else {
            console.log(`Article supprimé : ${itemName}`);
            item.remove();
        }
    });

    updateSubtotal();
});

function updateSubtotal() {
    const items = document.querySelectorAll('.shopping-cart .item');
    let total = 0;
    items.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('input').value);
        total += price * quantity;
    });
    document.querySelector('.subtotal .total-price').textContent = `$${total.toLocaleString()}`;
}


function showAlert() {
    alert('Vous ne pouvez pas modifier cet article');
}