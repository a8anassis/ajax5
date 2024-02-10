$(function() {
    $('.btn').on('click', function() {
        fetchData()
    })
})


function fetchData() {

    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'http://localhost:8080/ajax5/hello-ajax/data.txt', true)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {                      // response received successfully
            if (xhr.status === 200) {                   // data received successfully
                handleResults(xhr.responseText)
            } else {
                showError()
            }
        }
    }
    xhr.send()
}

function handleResults(results) {
    $('.cf-text').text(results)
}

function showError() {
    console.log('API Error')
}
