window.onload = function (){

    const form = document.getElementById('form')
    const btn = document.getElementById('btn')
    form.addEventListener('submit',function(e){
        e.preventDefault()
        let DATA_BASE = {};
        [...this.elements].forEach((input,ind)=>{
            if (input.type !== 'submit') {
                DATA_BASE[input.name.trim()] = input.value
                if (input.value === '') {
                    input.classList.add('warning')
                    let small = document.createElement('small')
                    small.textContent = `${input.name} is required`
                    small.style.color = 'red'
                    document.getElementById(`${'item'}${ind}`).appendChild(small)
                }else{
                    input.classList.add('success')
                    document.getElementById(`${'item'}${ind}`).lastElementChild.remove()
                }
                
            }
        })
        // fetch('url',{
        //     method: 'POST',
        //     headers:{
        //         "Content-type":"JSON/Application"
        //     },
        //     body: JSON.stringify(DATA_BASE)
        // })
        // .then(res=>res.json())
        // .then(response=>{
        //     console.log(response)
        // }).catch(e=>{
        //     console.log(new Error('Error Occurred'))
        // })
        
    })

    


}