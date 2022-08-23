let operationsButtons=document.getElementsByClassName('operation-button')
let input1         = document.getElementById('number1')
let input2         = document.getElementById('number2')

function makeOperation(operationCode){
    let result  = null
    let number1 = Number(input1.value)
    let number2 = Number(input2.value)

    if(operationCode==='+'){
         result = number1+number2
    }
    else if(operationCode==='-'){
         result = number1-number2
    }
    else if(operationCode==='*'){
         result = number1*number2
    }
    else if(operationCode==='/'){
         result = number1/number2
    }
    else{
        window.alert('Ты дурак блядь')
    }
    window.alert(result)

}

function onOperationButtonClick(eventObject){
    let clickedElement = eventObject.currentTarget
    let operation      = clickedElement.innerHTML
    makeOperation(operation)


}

for (i=0;i<operationsButtons.length;i++){
    operationsButtons[i].addEventListener('click',onOperationButtonClick)
}