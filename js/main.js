(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  var theImages = document.querySelectorAll('.data-ref'),
      carModel = document.querySelector('.modelName'),
      carPrice = document. querySelector('.priceInfo'),
      carDetail = document.querySelector('.modelDetails'),
      appliedClass;

  function changeElements() {

      let carIndex = carData[this.id];

      carModel.firstChild.nodeValue = carIndex.headline;
      carPrice.firstChild.nodeValue = carIndex.Description;
      carDetail.firstChild.nodeValue = carIndex.text;


      theImages.forEach(function(element, index){
        element.classList.add('nonActive');
      })

      this.classList.remove('nonActive');

        }

      theImages.forEach(function(element, index) {
    element.addEventListener('click', changeElements, false);
  })


})();
