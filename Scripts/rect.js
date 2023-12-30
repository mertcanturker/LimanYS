// ID'si boş olduğu için id yerine class ile erişilebilir.
var rectElements = document.getElementsByClassName('cls-2');

// İlk bulunan 'rect' öğesine erişim sağlanır
var rect = rectElements[0];

// Özelliklere erişim
var id = rect.id;
var cls = rect.getAttribute('class');
var x = rect.getAttribute('x');
var y = rect.getAttribute('y');
var width = rect.getAttribute('width');
var height = rect.getAttribute('height');
var transform = rect.getAttribute('transform');

// Bilgileri konsolda gösterme
console.log('ID:', id);
console.log('Class:', cls);
console.log('X:', x);
console.log('Y:', y);
console.log('Width:', width);
console.log('Height:', height);
console.log('Transform:', transform);