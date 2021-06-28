/* $(function(){
    $('#add').on('click', function(){
        var val = $('input').val()
        if(val !== ''){
            var elem = $('<li></li>').text(val)
            $(elem).append("<button class='rem'>X</button>")
            $('#mylist').append(elem)
            $('input').val('')
            $(".rem").on("click", function() {
                $(this).parent().remove();
              })  
        }
    })
}) */


var addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => {
    var myList = document.getElementById('mylist')
    var val = document.querySelector('input').value
    if(val !== ''){
        var elem = document.createElement('li')
        var xBtn = document.createElement('button')
        xBtn.classList.add('rem')
        xBtn.innerHTML = 'X'
        elem.innerHTML = val
        myList.appendChild(elem)
        elem.appendChild(xBtn)
    }
    
    xBtn.addEventListener('click', () => {
        elem.remove()
    })
})
