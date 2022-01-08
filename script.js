
// BY USING ONCHANGE METHOD----------------------------

// const val = ()=>{
//       let selectedVal = document.getElementById('selectedVal').value;

// 	      return selectedVal;
	      
//       }

// const convertTemp = ()=>{
// 	const tempNum = document.getElementById('tempNum').value;
// 	let selectedOption = val();

// 	const fahToCel = (cel)=>{
//             let celius = Math.round((tempNum - 32) * 5/9);

//             return celius;
// 	}

// 	const celToFah = (fah)=>{
//             let faranhite = Math.round((tempNum * 9/5) + 32);

//             return faranhite;
// 	}
      
//       let result;

//       if (selectedVal == 'cel') {
//       	result = fahToCel(tempNum);
//       	document.getElementById('result').innerHTML= `${result}Celcius`;
//       }
//       else{
//       	result = celToFah(tempNum);
//       	document.getElementById('result').innerHTML= `${result}Celcius`;
//       }	    
   
// }



//  BY USING SELECTED INDEX METHOD----------------------------------
const convertTemp = ()=>{
	const tempNum = document.getElementById('tempNum').value;
	const tempValue = document.getElementById('selectedVal');
	const selectedOption = selectedVal.options[tempValue.selectedIndex].value;


	const fahToCel = (cel)=>{
            let celius = Math.round((tempNum - 32) * 5/9);

            return celius;
	}

	const celToFah = (fah)=>{
            let faranhite = Math.round((tempNum * 9/5) + 32);

            return faranhite;
	}
      
      let result;

      if (selectedOption == 'cel') {
      	result = fahToCel(tempNum);
      	document.getElementById('result').innerHTML= `${result}Celcius`;
      }
      else{
      	result = celToFah(tempNum);
      	document.getElementById('result').innerHTML= `${result}Celcius`;
      }	    
   
}
