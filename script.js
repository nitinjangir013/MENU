let selectedActiveElement = document.getElementsByClassName("menu_active_color")[0];
function activeTab(value)
{
  if(value==0)
  {
    selectedActiveElement.style.width = "200px";
    selectedActiveElement.style.marginLeft = "50px";
    setTimeout(function(){
      selectedActiveElement.style.width = "110px";
      selectedActiveElement.style.marginLeft = "0";
    },300)
  }
  else if(value==1)
  {
    selectedActiveElement.style.width = "200px";
    setTimeout(function(){
      selectedActiveElement.style.width = "110px";
      selectedActiveElement.style.marginLeft = "95px";
    },300)
  }
  else if(value==2)
  {
    selectedActiveElement.style.width = "200px";
    setTimeout(function(){
      selectedActiveElement.style.width = "110px";
      selectedActiveElement.style.marginLeft = "190px";
    },300)
  }
}