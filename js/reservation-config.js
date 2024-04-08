//to do: incorperate this parameter into cartData (see sealifeparkluau.com for example)
let highlightData = {}
let checkoutButtonA = document.getElementById("product-button");
let checkoutButtonB = document.getElementById("book-now-alt");
checkoutButtonA.onclick = () => {
    setDatepickerKey();
    setReservationWindow();
};
checkoutButtonB.onclick = () => {
    setDatepickerKey();
    setReservationWindow();
};