export function render(htmlContent){
  const mainView = document.querySelector('#primaryView');
  mainView.innerHTML = htmlContent;
}

// render('
// <h2> DIFFERENT </h2>
// ');
//
// render('
// <h1> Naaahhhh </h1>
// ')
