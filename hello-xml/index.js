$(function() {
    $('.btn').on('click', function() {
        fetchData()
    })
})


function fetchData() {

    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'data.xml', true)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {                      // response received successfully
            if (xhr.status === 200) {                   // data received successfully
                handleResults(xhr.responseXML)
            } else {
                onAPIError()
            }
        }
    }
    xhr.send()
}

function handleResults(results) {
    // if (!results) {
    //     showError()
    //     return
    // }

    const books = $(results).find('book')
    handleBooks(books)
}

function handleBooks(books) {
    if (books.length === 0) {
        showError()
        return
    }

    let output = `<tr>
                    <th>Title</th>
                    <th>Author</th>
                </tr>`

    for (const book of books) {
        output += `<tr>
                      <td>${$(book).find('title').text()}</td>
                      <td>${$(book).find('author').text()}</td>
                    </tr>`
    }

    $('.books-list').html(output)
}



function onAPIError() {
    console.log('API Error')
}

function showError() {
    $('.error.hidden').clone().removeClass('hidden').appendTo('.outer')
}

function hideError() {
    $('.outer').find('.error').remove()
}
