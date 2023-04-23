
allListData = "";
addNew.addEventListener('click', function () {
    newVal = newList.value;

    if (newVal != "") {
        var node = document.createElement('li');
        var strong = document.createElement('strong');
        var del = document.createElement('span');
        strong.innerHTML = newVal;
        node.appendChild(strong);
        node.appendChild(del);
        allList.append(node);
        newList.value = "";
    }

    allListData = allList.innerHTML;
    localStorage.setItem("allListData", allListData);

    delList()
})

allListData = localStorage.getItem("allListData", allListData);
allList.innerHTML = allListData;

delList();
function delList() {
    del_trigger = document.querySelectorAll(" #allList li span ");
    del_trigger.forEach(function (eachElement) {
        eachElement.addEventListener('click', function () {
            parentElm = eachElement.parentElement;
            parentElm.remove();

            allListData = allList.innerHTML;
            localStorage.setItem("allListData", allListData);
        })

    })
}

clearAll.addEventListener('click', function () {
    allList.innerHTML = "";
    allListData = allList.innerHTML;
    localStorage.setItem("allListData", allListData);

})