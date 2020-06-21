const diameterForm = document.getElementById('input-diameters-form')

diameterForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inDiameter = +document.getElementById('in-diameter').value
    const outDiameter = +document.getElementById('out-diameter').value
    const circleGap = +document.getElementById('circle-gap').value

    if(inDiameter <= 0 || outDiameter <= 0 || circleGap <= 0){
        showAlert('Vstupné parametre musia byť kladné čísla')
    }
    else if(inDiameter >= outDiameter){
        showAlert('Vnútorný priemer nemôže byť vačší ako vonkajší')
    }
    else{       
        //show calculations
        const home = document.getElementById('home')
        const calculations = document.getElementById('calculations')
        home.classList.remove('show')
        setTimeout(() => calculations.classList.add('show'), 300)

        //return back to home page
        const backBtn = document.getElementById('back-btn')

        backBtn.addEventListener('click', f => {
            calculations.classList.remove('show')
            setTimeout(() => home.classList.add('show'), 300)
        })


        //calculate the width of circle
        const circleWidth = (outDiameter - inDiameter)/2

        //calculate external circuit
        const extCircle = Math.sqrt(Math.pow((outDiameter*Math.PI), 2) + Math.pow(circleGap, 2))       

        //calculate internal circuit
        const intCircle = Math.sqrt(Math.pow((inDiameter*Math.PI), 2) + Math.pow(circleGap, 2))

        //calculate internal radius
        const inRadius = (circleWidth*intCircle)/(extCircle-intCircle)
        document.getElementById('in-radius').innerText = Math.round(inRadius)

        //calculate external radius
        const outRadius = inRadius + circleWidth
        document.getElementById('ext-radius').innerText = Math.round(outRadius)

        //calculate whole circuit P
        const wholeCircuit = outRadius*2*Math.PI

        //calculate cutting section
        const cuttingSection = wholeCircuit - extCircle
        document.getElementById('cut').innerText = Math.round(cuttingSection)
    }    
})

const resetBtn = document.getElementById('reset-btn')
resetBtn.addEventListener('click', e => {
    document.getElementById('in-diameter').value = ''
    document.getElementById('out-diameter').value = ''
    document.getElementById('circle-gap').value = ''
})


//function showing errors
function showAlert(msg){
    const alert = document.getElementById('alert')
    alert.classList.remove('hide')
    alert.classList.add('alert')
    alert.innerText = msg

    setTimeout(() => alert.classList.add('hide'), 3000)
}




