document.addEventListener('DOMContentLoaded', function() {
    
    let tickets = document.querySelectorAll('.custom-margin a');
    let seatsLeft = document.querySelector('.seatsLeft');
    let selectedSeatCount = document.querySelector('.selectedSeatCount');
    let selectedSeatArea = document.querySelector('.selectedSeatArea');
    let couponArea = document.querySelector('.couponArea');
    let couponInput = document.querySelector('.couponInput');
    let couponBtn = document.querySelector('.couponBtn');
    let totalPrice = document.querySelector('.totalPrice');
    let discountPriceContent = document.querySelector('.discountPriceContent');
    let discountPrice = document.querySelector('.discountPrice');
    let grandTotalPrice = document.querySelector('.grandTotalPrice');
    let nextBtn = document.querySelector('.nextBtn');
    
    let passengerName = document.getElementById('passengerName');
    let phoneNumber = document.getElementById('phoneNumber');
    let emailId = document.getElementById('emailId');

    let selectedSeatForm = document.querySelector('.selectedSeatForm');
    let successModal = document.querySelector('.successModal');
    let continueBtn = document.querySelector('.continueBtn');

    let count = 0;
    let totalSeats = parseInt(seatsLeft.innerText);
    let availableSeats = 0;
    let perSeatPrice = 550;
    let seatTotalPrice = 0;
    let seatdiscountPrice = 0;
    let seatgrandPrice = 0;

    tickets.forEach((ticket) => {
        ticket.addEventListener('click', function(event) {
            event.preventDefault();

            if(count == 4) {
                alert('You can\'t select more than 4 seats.');
            }

            if(count < 4 && event.target.classList.contains('active') != true) {
                count++;

                event.target.classList.add('active');

                let selectedSeat = document.createElement('div');
                selectedSeat.classList.add('flex', 'justify-between', 'mt-4');
                selectedSeatArea.appendChild(selectedSeat);

                let seatNumber = document.createElement('p');
                seatNumber.innerText = event.target.innerText;
                seatNumber.classList.add('flex-1', 'text-base', 'font-normal', 'text-secondaryColorA60');  
                selectedSeat.appendChild(seatNumber);

                let seatClass = document.createElement('p');
                seatClass.innerText = 'Economy';
                seatClass.classList.add('flex-1', 'text-base', 'font-normal', 'text-secondaryColorA60');  
                selectedSeat.appendChild(seatClass);

                let seatPrice = document.createElement('p');
                seatPrice.innerText = perSeatPrice;
                seatPrice.classList.add('flex-1', 'text-base', 'font-normal', 'text-secondaryColorA60', 'flex', 'justify-end');  
                selectedSeat.appendChild(seatPrice);

                availableSeats = totalSeats - count;

                seatTotalPrice = perSeatPrice * count;
                totalPrice.innerText = seatTotalPrice;

                seatgrandPrice = seatTotalPrice;
                grandTotalPrice.innerText = seatgrandPrice;

                selectedSeatCount.innerText = count;
                seatsLeft.innerText = availableSeats;

                if(count == 4) {
                    couponBtn.classList.remove('pointer-events-none', 'cursor-not-allowed'); 
                }

                

                phoneNumber.addEventListener('input', function() {
                    if(phoneNumber.value != '') {
                        nextBtn.removeAttribute('disabled');
                    };
                });
            }

        });
    });

    couponBtn.addEventListener('click', function(event) {
        event.preventDefault();
        let couponInputValue = couponInput.value;

        if(couponInputValue == 'NEW15') {
            seatdiscountPrice = (seatTotalPrice * 15) / 100;
            discountCalculation();
        } else if(couponInputValue == 'Couple20') {
            seatdiscountPrice = (seatTotalPrice * 20) / 100;
            discountCalculation();
        } else {
            alert('Your Coupon is not valid!');
        }
    });

    function discountCalculation() {
        couponArea.classList.add('hidden');
        discountPriceContent.classList.add('flex');
        discountPriceContent.classList.remove('hidden');
        discountPrice.innerText = seatdiscountPrice;
        seatgrandPrice = seatgrandPrice - seatdiscountPrice;
        grandTotalPrice.innerText = seatgrandPrice;
    }

    nextBtn.addEventListener('click', function() {
        successModal.classList.remove('hidden');
    })
    continueBtn.addEventListener('click', function(event) {
        event.preventDefault();
        successModal.classList.add('hidden');
        location.reload();
    })

});