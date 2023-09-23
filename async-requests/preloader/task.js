const loader = document.getElementById('loader');
const items = document.getElementById('items');

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then(response => response.json())
  .then(data => {
    loader.classList.remove('loader_active');
    
    for (let currency in data.response.Valute) {
      const currencyDiv = document.createElement('div');
      currencyDiv.className = 'item';

      const codeDiv = document.createElement('div');
      codeDiv.className = 'item__code';
      codeDiv.textContent = data.response.Valute[currency].CharCode;

      const valueDiv = document.createElement('div');
      valueDiv.className = 'item__value';
      valueDiv.textContent = data.response.Valute[currency].Value;

      const currencyNameDiv = document.createElement('div');
      currencyNameDiv.className = 'item__currency';
      currencyNameDiv.textContent = 'руб.';

      currencyDiv.appendChild(codeDiv);
      currencyDiv.appendChild(valueDiv);
      currencyDiv.appendChild(currencyNameDiv);

      items.appendChild(currencyDiv);
    }
  })