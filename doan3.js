function mua()
{
  var mua = prompt("Nhập sản phầm bạn muốn mua ?");
  if(mua == "")
  {
    alert("Vui lòng nhập tên sản phẩm !");
  }

  else
  {
    alert("Sản phẩm" + " " + mua + " " + "đã được thêm vào giỏ hàng của bạn !");
  }
}

function dangky()
{
  var dangky = prompt("Nhập tên cho tài khoản của bạn !")
  if(dangky == "")
  
  {
    alert("Vui lòng nhập tên tài khoản của bạn !");
  }

  else
  {
       alert("Cảm ơn" + " " + dangky + " " + "đã đăng ký tài khoản !");
  }
}

