function takeEntoBn(en) {
  var tmp = en.toString();

  for (let i = 0; i < tmp.length; i++) {
    switch (tmp[i]) {
      case '1':
        tmp = tmp.replace(/1/g, '১');
      case '2':
        tmp = tmp.replace(/2/g, '২');
      case '3':
        tmp = tmp.replace(/3/g, '৩');
      case '4':
        tmp = tmp.replace(/4/g, '৪');
      case '5':
        tmp = tmp.replace(/5/g, '৫');
      case '6':
        tmp = tmp.replace(/6/g, '৬');
      case '7':
        tmp = tmp.replace(/7/g, '৭');
      case '8':
        tmp = tmp.replace(/8/g, '৮');
      case '9':
        tmp = tmp.replace(/9/g, '৯');
      case '0':
        tmp = tmp.replace(/0/g, '০');
    }
  }
  return tmp;
}
function takeBntoEn(bn) {
  var tmp = bn.toString();
  for (let i = 0; i < tmp.length; i++) {
    switch (tmp[i]) {
      case '১':
        tmp = tmp.replace(/১/g, '1');
      case '২':
        tmp = tmp.replace(/২/g, '2');
      case '৩':
        tmp = tmp.replace(/৩/g, '3');
      case '৪':
        tmp = tmp.replace(/৪/g, '4');
      case '৫':
        tmp = tmp.replace(/৫/g, '5');
      case '৬':
        tmp = tmp.replace(/৬/g, '6');
      case '৭':
        tmp = tmp.replace(/৭/g, '7');
      case '৮':
        tmp = tmp.replace(/৮/g, '8');
      case '৯':
        tmp = tmp.replace(/৯/g, '9');
      case '০':
        tmp = tmp.replace(/০/g, '1');
    }
  }
  return tmp;
}

export {takeEntoBn, takeBntoEn};
