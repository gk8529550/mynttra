
let itemContainerElement=document.querySelector(".items-conatiner")
letConatainerElement.innerHtml=


let innerHTML=""
items.forEach(item=>{
    innerHTML+=<div class="item-container">
        <div class="item-image" src="$(item.item_image)" alt="img">
        <div class="rating">${item.rating.stars}  ${item.rating.count}</div>
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">RS${item.current_price}</span>
            <span price="original-price">RS${item.origina_price}</span>
            <span class="discount">(${item.discount}%OFF)</span>
        </div>
        <button class="btn-add-bag">Add to Bag</button>
    </div> 
})