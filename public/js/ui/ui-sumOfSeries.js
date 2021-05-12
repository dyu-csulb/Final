
function resetAddNew() {
    document.getElementById("txtStartNum").value 			="";
    document.getElementById("txtEndNum").value 	="";
    document.getElementById("txtIncrement").value 	="";
    document.getElementById("lblMessage").innerHTML 	="";
    document.getElementById("txtStartNum").focus()
  }
  


  function validate() {
    let txtStartNum =  document.getElementById("txtStartNum");
    let txtEndNum =  document.getElementById("txtEndNum");
    let txtIncrement =   document.getElementById("txtIncrement");
    let msg = "";
    if ((txtStartNum.value).trim() ==='') {
      msg = 'Please enter an starting number!'
      invalidEntryMsg(msg);
      document.getElementById("lblMessage").innerHTML = msg;
      txtStartNum.focus()
    } 
    else if ((txtEndNum.value).trim()  ==='') {
      msg = 'Please enter an ending number!'
      invalidEntryMsg(msg);
      document.getElementById("lblMessage").innerHTML = msg;
      txtEndNum.focus();
    }
    else if (txtIncrement.value ==='') {
      msg = 'Please enter an increment number!'
      invalidEntryMsg(msg);
      document.getElementById("lblMessage").innerHTML = msg;
      txtIncrement.focus();
    }

    /*================================================
    this validation is off, based on the exam question..commented out code. 
    ==================================================*/ 
    // else if (txtEndNum.value > txtStartNum.value) {
    //   msg = 'Ending number must be less than the starting number!'
    //   document.getElementById("lblMessage").innerHTML = msg;
    //   invalidEntryMsg(msg);
    // }

    else {
      calculate();
    }
  }
  

  /*================================================
    I am not sure if this calculation is correct..
  ==================================================*/ 
function calculate(){
  let txtStartNum =  document.getElementById("txtStartNum").value;
  let txtEndNum =  document.getElementById("txtEndNum").value;
  let txtIncrement =   document.getElementById("txtIncrement").value;

  console.log(txtStartNum)
  console.log(txtEndNum)
  console.log(txtIncrement)

  var num = Number(txtStartNum); 
  for (let i=0; i<txtEndNum; i++){
    num += Number(txtIncrement); 
    
     console.log(num);
    
  }

  let msg = 'The sum of numbers from ' + document.getElementById("txtStartNum").value + ' to ' + document.getElementById("txtEndNum").value + ' is ' + num + '.'
  Swal.fire({
    title: 'Success',
    text: msg,
    icon: 'success',
    showCancelButton: false,
    customClass: 'swal-size-sm',
    confirmButtonText: 'OK'
})
document.getElementById("lblMessage").innerHTML = msg;


}
  

    