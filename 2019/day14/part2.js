// prettier-ignore
const input = '29 PQJGK => 4 SRPZP;6 XKJP, 4 LDSMT => 6 ZVSMJ;9 CGCPW, 2 CFVS => 7 DWZH;1 VQWZC, 1 FRTJG => 1 MGLKL;3 GCTBC, 4 RGKB => 4 RLZR;2 LGLCP => 9 GCTBC;3 DFPW, 12 FRTJG => 2 XVSRT;1 VBXFG => 3 VQWZC;1 GCTBC, 1 BVHM => 8 DGMZB;7 DFPW, 3 JQNL => 7 FRTJG;6 BHQN, 4 VXNP => 5 HBLQT;1 XNBR, 27 FTBNQ, 2 RGKB => 7 JZPMK;6 HKMV, 4 JHDHS, 11 NMSKF => 9 STCX;129 ORE => 5 NVXTP;13 BVHM, 5 XNBR => 3 LKXML;3 SBPM, 4 LDSMT, 13 GPBG => 6 HXFCJ;1 XVSRT, 1 JHDHS => 4 FTBNQ;6 LKXML, 6 HRLWP => 5 PSJK;5 HRLWP, 19 PDHVG => 1 VRQD;3 FTBNQ, 1 QLKTZ => 7 SBPM;2 VXNP => 3 XKJP;4 SRPZP, 7 XVSRT => 8 LMVF;2 GPBG, 8 DWZH, 3 JTCHR, 10 RLZR, 1 CFVS, 20 BFCZ => 2 WZSTV;130 ORE => 9 JQNL;100 ORE => 4 VBXFG;4 XNBR => 8 RDSHN;2 CDBTL, 2 XNBR, 8 QLKTZ => 6 CGCPW;7 CGCPW => 6 BFCZ;7 FTBNQ, 7 VXNP => 1 BVHM;1 HXFCJ, 15 CSXD => 1 DFXPB;1 MCRW, 6 MGLKL, 1 HBLQT => 8 SWRV;19 BZQGL, 10 NMSKF, 20 WZSTV, 15 LVGB, 26 FTBNQ, 45 DWZH, 2 FJWVP, 56 JZPMK => 1 FUEL;12 JTCHR => 4 CDBTL;1 MGLKL => 6 PQJGK;1 NVXTP => 1 LDSMT;3 SWRV, 1 LGLCP => 2 GHVJ;4 DGMZB, 11 HXFCJ, 2 RLZR => 4 SHTB;5 GHVJ, 1 RGKB, 1 GCTBC => 6 HKMV;1 SRPZP => 9 XNBR;1 ZVSMJ => 2 JHDHS;9 SWRV => 5 NMSKF;1 NVXTP => 3 XKBS;7 BHQN => 2 GPBG;21 NMSKF, 12 FTBNQ, 12 SBPM => 3 CMXK;2 GPBG, 12 ZVSMJ, 2 PDHVG => 4 LGLCP;158 ORE => 8 DFPW;3 BVHM, 1 HXFCJ, 5 CGCPW, 5 BFCZ, 6 VRQD, 3 LDSMT => 7 LVGB;1 XVSRT, 1 XKJP => 8 PDHVG;3 VRQD, 16 SHTB, 5 SBPM => 9 BZQGL;1 BVHM, 3 HKMV => 4 CFVS;13 JQNL => 7 VXNP;1 XKJP, 6 XVSRT => 7 MCRW;15 NVXTP, 19 XKBS => 4 BHQN;8 JHDHS, 5 CMXK, 2 GPBG => 8 CSXD;1 JZBR, 13 LKXML, 1 HKMV, 9 DFXPB, 3 XKBS, 2 PSJK, 2 LMVF, 15 HRLWP => 7 FJWVP;1 CGCPW, 3 RDSHN => 8 JZBR;24 PQJGK => 5 JTCHR;1 XVSRT, 5 LDSMT => 6 QLKTZ;17 GPBG => 7 RGKB;4 STCX => 1 HRLWP';


// prettier-ignore
// const input = '10 ORE => 10 A;1 ORE => 1 B;7 A, 1 B => 1 C;7 A, 1 C => 1 D;7 A, 1 D => 1 E;7 A, 1 E => 1 FUEL'; // 31

// prettier-ignore
// const input = '9 ORE => 2 A;8 ORE => 3 B;7 ORE => 5 C;3 A, 4 B => 1 AB;5 B, 7 C => 1 BC;4 C, 1 A => 1 CA;2 AB, 3 BC, 4 CA => 1 FUEL'; // 165

// prettier-ignore
// const input = '157 ORE => 5 NZVS;165 ORE => 6 DCFZ;44 XJWVT, 5 KHKGT, 1 QDVJ, 29 NZVS, 9 GPVTF, 48 HKGWZ => 1 FUEL;12 HKGWZ, 1 GPVTF, 8 PSHF => 9 QDVJ;179 ORE => 7 PSHF;177 ORE => 5 HKGWZ;7 DCFZ, 7 PSHF => 2 XJWVT;165 ORE => 2 GPVTF;3 DCFZ, 7 NZVS, 5 HKGWZ, 10 PSHF => 8 KHKGT'; // 13312

// prettier-ignore
// const input = '2 VPVL, 7 FWMGM, 2 CXFTF, 11 MNCFX => 1 STKFG;17 NVRVD, 3 JNWZP => 8 VPVL;53 STKFG, 6 MNCFX, 46 VJHF, 81 HVMC, 68 CXFTF, 25 GNMV => 1 FUEL;22 VJHF, 37 MNCFX => 5 FWMGM;139 ORE => 4 NVRVD;144 ORE => 7 JNWZP;5 MNCFX, 7 RFSQX, 2 FWMGM, 2 VPVL, 19 CXFTF => 3 HVMC;5 VJHF, 7 MNCFX, 9 VPVL, 37 CXFTF => 6 GNMV;145 ORE => 6 MNCFX;1 NVRVD => 8 CXFTF;1 VJHF, 6 MNCFX => 4 RFSQX;176 ORE => 6 VJHF'; // 180697 

// prettier-ignore
// const input = '171 ORE => 8 CNZTR;7 ZLQW, 3 BMBT, 9 XCVML, 26 XMNCP, 1 WPTQ, 2 MZWV, 1 RJRHP => 4 PLWSL;114 ORE => 4 BHXH;14 VRPVC => 6 BMBT;6 BHXH, 18 KTJDG, 12 WPTQ, 7 PLWSL, 31 FHTLT, 37 ZDVW => 1 FUEL;6 WPTQ, 2 BMBT, 8 ZLQW, 18 KTJDG, 1 XMNCP, 6 MZWV, 1 RJRHP => 6 FHTLT;15 XDBXC, 2 LTCX, 1 VRPVC => 6 ZLQW;13 WPTQ, 10 LTCX, 3 RJRHP, 14 XMNCP, 2 MZWV, 1 ZLQW => 1 ZDVW;5 BMBT => 4 WPTQ;189 ORE => 9 KTJDG;1 MZWV, 17 XDBXC, 3 XCVML => 2 XMNCP;12 VRPVC, 27 CNZTR => 2 XDBXC;15 KTJDG, 12 BHXH => 5 XCVML;3 BHXH, 2 VRPVC => 7 MZWV;121 ORE => 7 VRPVC;7 XCVML => 6 RJRHP;5 BHXH, 4 VRPVC => 5 LTCX'; // 2210736 

// create an array of objects - each object has an "output" property (a single 2-length array), and an "inputs" property (array of 2-length-arrays)
const processInput = (input) => {
  const lines = input.split(';').map((line) => {
    return line.trim();
  });
  const retObj = lines.map((line) => {
    const parts = line.split('=>').map((line) => {
      return line.trim();
    });
    const inputString = parts[0];
    const outputString = parts[1];

    const inputs = inputString.split(',').map((part) => {
      part = part.trim();
      const inputParts = part.split(' ');
      return [parseInt(inputParts[0]), inputParts[1]];
    });


    const outputParts = outputString.split(' ');
    const output = [parseInt(outputParts[0]), outputParts[1]];
    
    return {
      output,
      inputs
    }
  });
  return retObj;
}

const getOreOutputs = (inputObject) => {
  const retObj = {};
  inputObject.forEach((rowObject) => {
    rowObject.inputs.forEach((inputArr) => {
      if(inputArr[1] === 'ORE') {
        // retArr.push(rowObject.output);
        retObj[rowObject.output[1]] = {
          amountOutput: rowObject.output[0],
          amountOreInput: inputArr[0]
        }
      }
    });
  });
  return retObj;
}

const findInputs = (element, inputObject) => {
  // search through all lines, finding which line produces this element.
  let retArr = [];
  inputObject.forEach((row) => {
    if(row.output[1] === element) {
      retArr = row.inputs;
    }
  });
  return retArr;
}

const findAmountOutput = (element, inputObject) => {
  let retAmount = undefined;
  inputObject.forEach((rowObject) => {
    if(rowObject.output[1] === element){
      retAmount = rowObject.output[0];
    }
  });
  if(retAmount) {
    return retAmount
  } else {
    console.error('ERROR - undefined');
  }
};

const reaction = (inputObject, e, n) => {
  let inventory = {};

  const retFind = (qty, element) => {
    let ore = 0;

    const outputAmount = findAmountOutput(element, inputObject);
    let multiplier = 1;
    if(outputAmount < qty) {
      multiplier = Math.ceil(qty/outputAmount);
    }

    const inputs = findInputs(element, inputObject);
    inputs.forEach((reactive) => {
      let newQty = reactive[0] * multiplier;
      if(reactive[1] === 'ORE') {
        ore = ore + newQty;
      } else {
        inventory[reactive[1]] = inventory[reactive[1]] || 0
        if(inventory[reactive[1]] < newQty) {
          ore = ore + retFind(newQty - inventory[reactive[1]], reactive[1])
        }
        inventory[reactive[1]] = inventory[reactive[1]] - newQty;
      }
    });
    inventory[element] = (inventory[element] || 0) + (multiplier * outputAmount);
    return ore
  }
  return retFind(n, e);
}



const runProgram = (input) => {
  const inputObject = processInput(input);
  console.log('inputObject:', inputObject);
  
  // const totalNeeded = reaction(inputObject, 'FUEL', 1);
  let i = 0;
  const trillion = 1000000000000;
  
  const run = (step) => {
    let result;
    do {
      i = i + step;
      result = reaction(inputObject, 'FUEL', i);
    } while(result < trillion);
    i = i - step;
  }
  let step = trillion / 10;
  do {
    run(step);
    step = step / 10;
  } while(step >= 1);
  

  return i;
};
console.log("RESULT: ", runProgram(input));

// wrong: 61190
// wrong: 29312963038
// wrong: 14156536