function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  fetch(url)
    .then(res => {
      if (res.status === 200) return res.json();
      return Promise.reject();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
