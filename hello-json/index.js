$(function() {
    $('.btn').on('click', function() {
        fetchData()
    })
})


function fetchData() {

    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'data.json', true)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {                      // response received successfully
            if (xhr.status === 200) {                   // data received successfully
                handleResults(JSON.parse(xhr.responseText))
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

    const books = results.books
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
                      <td>${book.title}</td>
                      <td>${book.author}</td>
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
