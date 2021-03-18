document
    .querySelector('.bully-generate')
    .addEventListener('click', function () {
        fetch('/bullies')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                document.querySelector('.bully').innerText = data.bully;
            })
            .catch(function (err) {
                console.log(err)
            });
    });