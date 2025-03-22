const insert = document.getElementById('insert')

window.addEventListener('keypress',(e)=>{
    insert.innerHTML = `
        <div class = 'color'>
        <table>
            <tr>
                <th>Keyth>
                <th>Keycode
                <th>Codeh>
            </tr>
            <tr>
                <td>${e.key ==" "?'space':e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
        </div>
    `
    console.log(e.key)
    console.log(e.keyCode)
    console.log(e.code)
})
