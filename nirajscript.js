// JavaScript Document
function changeelement()
		{
			var x=parseInt(window.outerWidth);
			var y=document.getElementById('changable_element');
			var z=document.getElementById('sizechanged');
			if(x<1350)
			{
				y.style.display="none";
				z.style.width="1276px";
				
				}
			else
			{
				y.style.display="block";
				z.style.width="76%";
				}
			
			}