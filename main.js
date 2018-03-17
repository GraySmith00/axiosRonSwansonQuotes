var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';


const xhrBtn = document.querySelector("#xhr");
const fetchBtn = document.querySelector('#fetch');
const axiosBtn = document.querySelector('#axios');

const display = document.querySelector('#quote');

// XHR Request
// ============================================
xhrBtn.addEventListener('click', function() {
    const XHR = new XMLHttpRequest();
    
    XHR.onreadystatechange = function() {
        if(XHR.readyState == 4 && XHR.status === 200) {
            const quote = JSON.parse(XHR.responseText)[0];
            display.innerText = quote;
        }
    };
    
    XHR.open('GET', url);
    XHR.send();
});


// Fetch Request
// ============================================
fetchBtn.addEventListener('click', function() {
    fetch(url)
    .then(function(req) {
        req.json().then(function(data){
            display.innerText = data[0];
        });
    })
    .catch(function() {
        alert('error!');
    });
});

// jQuery Request
// ============================================
$('#jquery').click(function() {
    $.getJSON(url)
    .done(function(data) {
        display.innerText = data[0];
    })
    .fail(function() {
        console.log('fail!');
    });
});

// Axios Request
// ============================================
axiosBtn.addEventListener('click', function() {
    axios.get(url)
        .then(function(res) {
            display.innerText = res.data[0];
        })
        .catch(function() {
            alert('error!');
        });
})