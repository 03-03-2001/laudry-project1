

emailjs




 let cart = [];

function updateCart() {
  const cartContainer = document.getElementById("cart");

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>No items added</p>";
    return;
  }

  cartContainer.innerHTML = "";

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `${item.name} - ₹${item.price}`;
    cartContainer.appendChild(div);
  });
}
function addItem(name, price) {
  cart.push({ name, price });
  updateCart();
}
function removeItem(name) {
  cart = cart.filter((item) => item.name !== name);
  updateCart();
}







function scrollToServices() {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
}















 

function sendMail (){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone:document.getElementById("phone").value,
  }
   const serviceID = "service_yrc4fq2"
  const templateID = "template_9b137vc" 

  emailjs.send(serviceID,templateID,params)

  .then((response) => {
     document.getElementById("name").value ="";
     document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
     console.log('res');
    alert("Thank you for booking! We will get back to you soon." ,response.status, response.text);
  })
  .catch(err => {
     console.error("EmailJS error:", err);
  });



}

  






 












