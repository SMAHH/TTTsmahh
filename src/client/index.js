import './../styles/style.css';

function component() {
    let element = document.createElement('div');
    element.innerHTML = '<br><strong>Hello human...<br>Script is now connected</strong>';
    return element;
}

document.body.appendChild(component());

