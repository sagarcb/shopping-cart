const plusBtn = document.getElementsByClassName('plus-btn');
const minusBtn = document.getElementsByClassName('minus-btn');
const price = document.getElementsByClassName('price');
const total = document.getElementById('total');
const subtotal = document.getElementById('subtotal');
const cartItem = document.getElementsByClassName('cart-item');


for (let i = 0; i < plusBtn.length; i++)
{
    plusBtn[i].addEventListener('click',function (e) {
        const input = this.parentNode.querySelector('input');
        let inputVal = parseInt(input.value);
        input.value = inputVal + 1;
        subtotal.textContent =parseInt(subtotal.textContent) + parseInt(price[i].textContent);
        total.textContent =subtotal.textContent;
    });

    minusBtn[i].addEventListener('click',function () {
        const input = this.parentNode.querySelector('input');
        let inputVal = parseInt(input.value);
        if (input.value === '0'){
            input.value = '0';
        }else{
            input.value = inputVal - 1;
            subtotal.textContent =parseInt(subtotal.textContent) - parseInt(price[i].textContent);
            total.textContent =subtotal.textContent;
        }
    })

    cartItem[i].addEventListener('click',function (e) {
        const removeBtn = this.querySelector('.remove-item');
        const input = this.querySelector('input');
        const price = this.querySelector('.price');
        if (e.target === removeBtn){
            subtotal.textContent = parseInt(subtotal.textContent) - (parseInt(input.value) * parseInt(price.textContent));
            total.textContent = subtotal.textContent;
             this.remove();
        }
    })


}
