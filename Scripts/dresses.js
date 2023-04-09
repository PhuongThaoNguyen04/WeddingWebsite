function handleModalClick(modal, modalContent, btn ){
    modal.style.display = "block";
        var imgUrl = btn.firstChild.src;
        console.log(imgUrl);
        var des = btn.parentNode.children[2].innerHTML;
        console.log(des)

        toggleModal(imgUrl,des, modalContent);
}

function handleModalClose(modal){
    modal.style.display = "none";
}

function toggleModal(imgUrl, des, modalContent) {
    if (modalContent.childElementCount > 1){
      modalContent.removeChild(modalContent.children[2]);
      modalContent.removeChild(modalContent.children[1]);
    }
    
    var img = document.createElement('img');
    img.src = imgUrl;
    img.width = 300;
    img.height = 500;
    img.alt = "Product 1"
    modalContent.appendChild(img);
    var text = document.createElement('div');
    text.textContent = des;
    modalContent.appendChild(text);
  }