<script>

var request = new XMLHttpRequest();
request.open('GET', 'https://www.omdbapi.com/?apikey=e4db3ced&t={'search.value'}', true);
request.onload = function () {

  var data = JSON.parse(this.response);
      data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

    });
  }

request.send();

</script>